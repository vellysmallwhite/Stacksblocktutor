import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, CreditCard, Star, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => (
  <div className="p-8">
    <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">About BlockTutor</h2>
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-8">
        <div className="space-y-6">
          <p className="text-xl text-gray-600 leading-relaxed">
            BlockTutor is a revolutionary tutoring platform that leverages blockchain
            technology to ensure transparency, security, and trust in online education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide verified, high-quality education through blockchain technology,
                  ensuring trust and transparency in online tutoring.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">Our Technology</h3>
                <p className="text-gray-600">
                  Built on secure blockchain infrastructure, ensuring verified credentials,
                  secure payments, and authentic reviews.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Key Features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="text-indigo-600" />
                <span className="text-gray-600">Blockchain-verified tutor credentials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="text-indigo-600" />
                <span className="text-gray-600">Secure cryptocurrency payments</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="text-indigo-600" />
                <span className="text-gray-600">Immutable review system</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-indigo-600" />
                <span className="text-gray-600">Smart contract-based booking</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AboutPage;
