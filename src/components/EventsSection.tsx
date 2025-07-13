import React from 'react';

const EventsSection: React.FC = () => {
  // Placeholder event data
  const events = [
    {
      id: 1,
      name: 'Grand Opening Celebration',
      date: 'October 26, 2023',
      description: 'Join us for the inauguration of a new boutique.',
    },
    {
      id: 2,
      name: 'Diwali Mela Decor',
      date: 'November 10, 2023',
      description: 'Experience the festive decorations at the annual Diwali Mela.',
    },
    {
      id: 3,
      name: 'Theme Birthday Party (Superhero)',
      date: 'December 5, 2023',
      description: 'A fun-filled superhero-themed birthday bash.',
    },
  ];

  return (
    <section id="events" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-4">Date: {event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;