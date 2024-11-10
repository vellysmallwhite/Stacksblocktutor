import React, { useState } from 'react';
import { Shield, CreditCard, Star, Calendar } from 'lucide-react';

const Navigation = ({ setCurrentPage }) => (
  <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-2xl flex items-center">
        <Shield className="mr-2" /> BlockTutor
      </div>
      <div className="space-x-6">
        {['home', 'book', 'reviews', 'payment', 'about'].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className="text-white hover:text-indigo-200 transition-colors font-medium"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4 text-indigo-600">
      Welcome to BlockTutor
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Blockchain-verified online tutoring
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: Shield, title: 'Verified Tutors', desc: 'Blockchain-verified professionals' },
        { icon: CreditCard, title: 'Secure Payments', desc: 'Cryptocurrency payments' },
        { icon: Star, title: 'Verified Reviews', desc: 'Transparent review system' }
      ].map(({ icon: Icon, title, desc }) => (
        <div key={title} className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Icon className="text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const BookingPage = () => {
  const [formData, setFormData] = useState({ subject: '', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking:', formData);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Book a Lesson</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Subject</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Subject</option>
            {['Mathematics', 'Science', 'English'].map(subject => (
              <option key={subject} value={subject.toLowerCase()}>{subject}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
        >
          Book Session
        </button>
      </form>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: <HomePage />,
    book: <BookingPage />,
    reviews: <div className="p-8">Reviews Page</div>,
    payment: <div className="p-8">Payment Page</div>,
    about: <div className="p-8">About Page</div>
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation setCurrentPage={setCurrentPage} />
      <main className="container mx-auto">
        {pages[currentPage]}
      </main>
    </div>
  );
};

export default App;