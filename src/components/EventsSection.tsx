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
    <section id="events" className="py-12" style={{ background: 'var(--section-purple)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--secondary)' }}>Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: 'var(--primary)' }}>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--secondary)' }}>{event.name}</h3>
              <p className="mb-4" style={{ color: 'var(--accent)' }}>Date: {event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;