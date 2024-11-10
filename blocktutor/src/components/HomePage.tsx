import React from 'react';
import { Shield, CreditCard, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const HomePage: React.FC = () => (
  <div className="p-8">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to BlockTutor
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        The future of verified online tutoring powered by blockchain technology
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardTitle className="flex items-center text-indigo-600">
            <Shield className="mr-2" />
            Verified Tutors
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600">All our tutors are blockchain-verified professionals with proven expertise</p>
        </CardContent>
      </Card>
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardTitle className="flex items-center text-indigo-600">
            <CreditCard className="mr-2" />
            Secure Payments
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600">Pay securely with cryptocurrency using smart contracts</p>
        </CardContent>
      </Card>
      <Card className="transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardTitle className="flex items-center text-indigo-600">
            <Star className="mr-2" />
            Verified Reviews
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-600">Trust our transparent, blockchain-verified review system</p>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default HomePage;
