// app/layout.js
import '@/styles/globals.css'; // Updated path

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}