// components/AuthModal.js
'use client'; // Required for client-side components

import { useState } from 'react';
import { signIn, signUp, confirmSignUp, signInWithRedirect } from 'aws-amplify/auth';

export default function AuthModal({ isOpen, onClose }) {
  const [formType, setFormType] = useState('signIn'); // 'signIn', 'createAccount', 'confirmCode'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility

  // Handle Sign In
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signIn({ username: email, password });
      alert('Login successful!');
      onClose(); // Close the modal after successful login
    } catch (err) {
      setError('Invalid email or password');
      console.error('Error signing in:', err);
    }
  };

  // Handle Social Login (Google and Facebook)
  const handleSocialSignIn = async (provider) => {
    try {
      await signInWithRedirect({ provider });
    } catch (err) {
      setError('Error signing in with social provider');
      console.error('Error signing in with social provider:', err);
    }
  };

  // Handle Create Account
  const handleCreateAccount = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          'custom:age': age,
          'custom:gender': gender,
        },
      });
      setFormType('confirmCode'); // Switch to confirmation code form
    } catch (err) {
      setError('Error creating account');
      console.error('Error creating account:', err);
    }
  };

  // Handle Confirmation Code Submission
  const handleConfirmCode = async (event) => {
    event.preventDefault();
    try {
      await confirmSignUp({ username: email, confirmationCode });
      alert('Account confirmed! Please sign in.');
      setFormType('signIn'); // Switch back to sign-in form
    } catch (err) {
      setError('Invalid confirmation code');
      console.error('Error confirming code:', err);
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Sign In Form */}
        {formType === 'signIn' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full mb-4"
              >
                Sign In
              </button>
            </form>

            {/* Social Login Buttons */}
            <div className="mb-6">
              <button
                onClick={() => handleSocialSignIn('Google')}
                className="flex items-center justify-center w-full py-2 px-4 text-gray-800 font-bold rounded focus:outline-none focus:shadow-outline"
                style={{ borderColor: '#3b5998', borderWidth: '2px' }}
              >
                <img src="/google-icon.png" alt="Google" className="mr-2" style={{ width: '40px' }} />
                Sign In with Google
              </button>
              <button
                onClick={() => handleSocialSignIn('Facebook')}
                className="flex items-center justify-center w-full py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline mt-2"
                style={{ backgroundColor: '#3b5998', border: '2px solid #3b5998' }}
              >
                <img src="/facebook-icon.png" alt="Facebook" className="mr-2" style={{ width: '40px' }} />
                Sign In with Facebook
              </button>
            </div>

            <p className="text-center mt-4">
              Don't have an account?{' '}
              <button
                onClick={() => setFormType('createAccount')}
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Create Account
              </button>
            </p>
          </>
        )}

        {/* Create Account Form */}
        {formType === 'createAccount' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
            <form onSubmit={handleCreateAccount}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                    confirmPassword && confirmPassword !== password ? 'border-red-500' : ''
                  } leading-tight focus:outline-none focus:shadow-outline`}
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
                {confirmPassword && confirmPassword !== password && (
                  <p className="text-red-500 text-xs italic">Passwords do not match</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                  Age
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                >
                  <option value="">Select your age group</option>
                  <option value="15-30">15-30</option>
                  <option value="31-50">31-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Create Account
              </button>
            </form>
            <p className="text-center mt-4">
              Already have an account?{' '}
              <button
                onClick={() => setFormType('signIn')}
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Sign In
              </button>
            </p>
          </>
        )}

        {/* Confirmation Code Form */}
        {formType === 'confirmCode' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">We Emailed You</h2>
            <p className="text-center mb-4">
              Your code is on the way. To log in, enter the code we emailed to{' '}
              <strong>{email.replace(/(.{2}).*(.@.*)/, '$1***$2')}</strong>. It may take a minute to arrive.
            </p>
            <form onSubmit={handleConfirmCode}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmationCode">
                  Confirmation Code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmationCode"
                  type="text"
                  placeholder="Enter your code"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full mb-4"
              >
                Confirm
              </button>
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 text-sm font-bold w-full"
                onClick={() => alert('Resend code functionality coming soon!')}
              >
                Resend Code
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}