// app/page.js
'use client'; // Required for client-side components

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Amplify UI styles
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export default function Home() {
  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-500 to-blue-500">
          <h1 className="text-3xl font-bold text-center mt-8">Welcome, {user.attributes.email}</h1>
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 self-center"
          >
            Sign Out
          </button>
        </div>
      )}
    </Authenticator>
  );
}