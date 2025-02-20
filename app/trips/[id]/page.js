// app/trips/[id]/page.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mockTrips = [
  { id: 1, title: 'Beach Day', location: 'Miami', date: '2023-11-15', description: 'A relaxing day at the beach.' },
  { id: 2, title: 'Mountain Hike', location: 'Denver', date: '2023-11-20', description: 'An adventurous hike in the mountains.' },
];

export default function TripDetails({ params }) {
  const trip = mockTrips.find((t) => t.id === parseInt(params.id));

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">{trip.title}</h1>
        <p><strong>Location:</strong> {trip.location}</p>
        <p><strong>Date:</strong> {trip.date}</p>
        <p><strong>Description:</strong> {trip.description}</p>
      </div>
      <Footer />
    </div>
  );
}