import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Shield } from 'lucide-react';

interface Review {
  id: number;
  tutor: string;
  rating: number;
  text: string;
  verified: boolean;
  subject: string;
}

const ReviewsPage: React.FC = () => {
  const mockReviews: Review[] = [
    { id: 1, tutor: "John Doe", rating: 5, text: "Excellent teacher! Very knowledgeable in advanced mathematics.", verified: true, subject: "Mathematics" },
    { id: 2, tutor: "Jane Smith", rating: 4, text: "Very helpful session on quantum physics. Clear explanations.", verified: true, subject: "Physics" },
    { id: 3, tutor: "Mike Johnson", rating: 5, text: "Outstanding literature analysis skills. Helped me improve my essay writing.", verified: true, subject: "English Literature" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Verified Reviews</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {mockReviews.map(review => (
          <Card key={review.id} className="transform hover:scale-102 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl text-indigo-600">{review.tutor}</h3>
                  <p className="text-gray-500">{review.subject}</p>
                </div>
                <div className="flex items-center bg-indigo-50 rounded-full px-4 py-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              {review.verified && (
                <div className="flex items-center text-green-600 bg-green-50 rounded-full px-4 py-2 w-fit">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Blockchain Verified Review</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
