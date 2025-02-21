// app/_app.js
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'; // Amplify UI styles
import { AmplifyProvider } from '@aws-amplify/ui-react';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

export default function App({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}