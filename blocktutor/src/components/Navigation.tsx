import React from 'react';
import { Shield } from 'lucide-react';

interface NavigationProps {
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage }) => (
  <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-2xl flex items-center">
        <Shield className="mr-2" />
        BlockTutor
      </div>
      <div className="space-x-6">
        <button onClick={() => setCurrentPage('home')} className="text-white hover:text-indigo-200 transition-colors font-medium">Home</button>
        <button onClick={() => setCurrentPage('book')} className="text-white hover:text-indigo-200 transition-colors font-medium">Book Lesson</button>
        <button onClick={() => setCurrentPage('reviews')} className="text-white hover:text-indigo-200 transition-colors font-medium">Reviews</button>
        <button onClick={() => setCurrentPage('payment')} className="text-white hover:text-indigo-200 transition-colors font-medium">Payment</button>
        <button onClick={() => setCurrentPage('about')} className="text-white hover:text-indigo-200 transition-colors font-medium">About</button>
      </div>
    </div>
  </nav>
);

export default Navigation;
