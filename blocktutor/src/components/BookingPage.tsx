import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';

const BookingPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Book a Lesson</h2>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">Subject</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="">Select a subject</option>
                <option value="math">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-700">Time Slot</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select a time</option>
                <option value="9am">9:00 AM</option>
                <option value="10am">10:00 AM</option>
                <option value="11am">11:00 AM</option>
              </select>
            </div>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Book Session
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingPage;
