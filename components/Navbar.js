// components/Navbar.js
export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ice Pa Tour</h1>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/trips" className="hover:underline">Trips</a>
            <a href="/account" className="hover:underline">Account</a> {/* Add Account Link */}
          </div>
        </div>
      </nav>
    );
  }