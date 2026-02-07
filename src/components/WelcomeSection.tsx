import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroMeal from '@/assets/hero-meal.jpg';

const WelcomeSection: React.FC = () => {
  return (
    <section className="section-full position-relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${heroMeal})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <div className="mb-4" style={{ fontSize: '3.5rem' }}>🍽️</div>
            <h1 className="display-3 fw-bold text-themed mb-3">
              Welcome to{' '}
              <span className="text-primary-themed">Meal Analyzer</span>
            </h1>
            <p className="fs-5 text-muted-themed mb-4 mx-auto" style={{ maxWidth: 540 }}>
              Upload a photo of your meal and get instant insights.
              Discover healthier alternatives and make every bite count.
            </p>
            <div className="mt-5">
              <p className="text-muted-themed mb-3 fw-medium" style={{ letterSpacing: '0.05em', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                Scroll down to analyze your meal
              </p>
              <a href="#analyze" className="d-inline-block text-primary-themed scroll-hint">
                <ChevronDown size={32} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
