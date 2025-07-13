import React from 'react';

const ReviewsSection: React.FC = () => {
  // Placeholder review data
  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      feedback: 'Eventastic Varanasi made our Haldi ceremony absolutely beautiful! The decor was stunning and exactly what we envisioned.',
    },
    {
      id: 2,
      name: 'Rohit Kumar',
      feedback: 'Amazing job with the birthday party decorations for my son. All the kids loved the theme!',
    },
    {
      id: 3,
      name: 'Anjali Singh',
      feedback: 'Very professional and creative team. They transformed the venue for our inauguration ceremony. Highly recommended!',
    },
  ];

  return (
    <section id="reviews" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">{`"${review.feedback}"`}</p>
              <p className="text-right font-semibold text-gray-900">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;