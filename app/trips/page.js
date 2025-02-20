// app/trips/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mockTrips = [
  { id: 1, title: 'Beach Day', location: 'Miami', date: '2023-11-15' },
  { id: 2, title: 'Mountain Hike', location: 'Denver', date: '2023-11-20' },
];

export default function Trips() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Available Trips</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockTrips.map((trip) => (
            <div key={trip.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{trip.title}</h2>
              <p>Location: {trip.location}</p>
              <p>Date: {trip.date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}