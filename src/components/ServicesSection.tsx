import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-12" style={{ background: 'var(--neutral)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--accent)' }}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--primary)' }}>
              {/* Placeholder Icon/Image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" style={{ color: 'var(--secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--secondary)' }}>Mehndi & Haldi Decor</h3>
            <p className="text-gray-600">Vibrant and traditional decorations to make your pre-wedding ceremonies extra special.</p>
          </div>

          {/* Service Item 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
              {/* Placeholder Icon/Image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.187-2.059-.518-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Birthday Party Themes</h3>
            <p className="text-gray-600">From whimsical to elegant, we create unforgettable birthday celebrations for all ages.</p>
          </div>

          {/* Service Item 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-200 rounded-full flex items-center justify-center">
              {/* Placeholder Icon/Image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inauguration Setups</h3>
            <p className="text-gray-600">Professional and impactful setups for successful inaugurations and corporate events.</p>
          </div>

          {/* Service Item 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-200 rounded-full flex items-center justify-center">
              {/* Placeholder Icon/Image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-.786a2 2 0 010 2.828L11.828 15H9v-2.828l8.786-8.786a2 2 0 012.828 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Baby Shower Decor</h3>
            <p className="text-gray-600">Sweet and charming decorations to welcome the little one in style.</p>
          </div>

          {/* Add more service items as needed */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;