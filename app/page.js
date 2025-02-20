// app/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-500 to-blue-500">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          {/* Social Login Buttons */}
          <div className="mb-6">
            <button
              className="flex items-center justify-center w-full py-2 px-4 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              style={{ backgroundColor: '#3b5998', border: '2px solid #3b5998' }}
            >
              <img src="/facebook-icon.png" alt="Facebook" className="mr-2" style={{ width: '40px' }} />
              Login with Facebook
            </button>
            <button
              className="flex items-center justify-center w-full py-2 px-4 text-gray-800 font-bold rounded focus:outline-none focus:shadow-outline"
              style={{ borderColor: '#3b5998', borderWidth: '2px', marginTop: '1rem' }}
            >
              <img src="/google-icon.png" alt="Google" className="mr-2" style={{ width: '40px' }} />
              Login with Google
            </button>
          </div>
          {/* Separator */}
          <div className="flex items-center mb-6">
            <div className="w-full border-t border-gray-300" />
            <span className="px-2 text-gray-600 font-bold">or</span>
            <div className="w-full border-t border-gray-300" />
          </div>
          {/* Email Login */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign in to account
            </button>
          </form>
          <div className="text-center mt-6">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Forgot password?
            </a>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-gray-700 text-lg">Don't have an account?</p>
            <a href="#" className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Get access
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}