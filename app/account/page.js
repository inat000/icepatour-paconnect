// app/account/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-6 text-center">Your Account</h2>

          {/* User Activity Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Your Activities</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded shadow">
                <p className="text-lg font-medium">Trip to Miami</p>
                <p className="text-gray-600">Date: 2023-11-15</p>
                <p className="text-gray-600">Status: Booked</p>
              </div>
              <div className="bg-gray-50 p-4 rounded shadow">
                <p className="text-lg font-medium">Mountain Hike in Denver</p>
                <p className="text-gray-600">Date: 2023-11-20</p>
                <p className="text-gray-600">Status: Pending</p>
              </div>
            </div>
          </div>

          {/* Chat Placeholder */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Chat</h3>
            <div className="bg-gray-50 p-4 rounded shadow h-48 flex items-center justify-center">
              <p className="text-gray-600">Chat functionality will be implemented here.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}