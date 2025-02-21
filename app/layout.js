// app/layout.js
import '@/styles/globals.css'; // Updated path

// 'use client'; // Required for client-side components

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'; // Amplify UI styles
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}