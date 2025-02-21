// app/layout.js
import '@/styles/globals.css'; // Updated path

// 'use client'; // Required for client-side components


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          {children}
        
      </body>
    </html>
  );
}