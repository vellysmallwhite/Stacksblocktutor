import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ReviewsPage from './components/ReviewsPage';
import PaymentPage from './components/PaymentPage';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'book':
        return <BookingPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'payment':
        return <PaymentPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation setCurrentPage={setCurrentPage} />
      <main className="container mx-auto">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
