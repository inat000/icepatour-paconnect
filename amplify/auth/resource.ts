// amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true, // Enable email-based login
    externalProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '', // Replace with your Google Client ID
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '', // Replace with your Google Client Secret
      },
    },
  },
});