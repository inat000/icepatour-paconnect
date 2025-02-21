// app/layout.js
'use client'; // Required for client-side components

import '@/styles/globals.css'; // Import Tailwind CSS
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'; // Amplify UI styles
import { Authenticator } from '@aws-amplify/ui-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Authenticator.Provider>
          <Navbar />
          {children}
          <Footer />
        </Authenticator.Provider>
      </body>
    </html>
  );
}