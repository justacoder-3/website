import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function App() {
  const [alumni, setAlumni] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch alumni data
    axios.get('http://localhost:5000/alumni')
      .then(response => setAlumni(response.data))
      .catch(error => console.error('Error fetching alumni:', error));

    // Fetch students data
    axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="#" className="text-white hover:text-yellow-500">Home</a></li>
          <li><a href="#alumni" className="text-white hover:text-yellow-500">Alumni</a></li>
          <li><a href="#students" className="text-white hover:text-yellow-500">Students</a></li>
          <li><a href="#mentorship" className="text-white hover:text-yellow-500">Mentorship</a></li>
          <li><a href="#events" className="text-white hover:text-yellow-500">Events</a></li>
        </ul>
      </nav>

      {/* Main Content with Animation */}
      <div className="flex justify-center items-center h-screen">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Alumni-Student Platform
        </motion.h1>
      </div>

      {/* Alumni Section */}
      <section id="alumni" className="bg-gray-800 py-12">
        <motion.h2
          className="text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Alumni Profiles
        </motion.h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          {alumni.map(profile => (
            <motion.div
              key={profile.id}
              className="bg-gray-700 p-4 rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-gray-400">{profile.occupation}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Students Section */}
      <section id="students" className="bg-gray-900 py-12">
        <motion.h2
          className="text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Student Profiles
        </motion.h2>
        <div className="flex justify-center space-x-8 flex-wrap">
          {students.map(profile => (
            <motion.div
              key={profile.id}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-gray-400">{profile.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="bg-gray-800 py-12">
        <motion.h2
          className="text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mentorship Program
        </motion.h2>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-gray-400">
            Connect with experienced alumni who can guide you in your career.
            <br />
            Join our mentorship program to get personalized advice and support.
          </p>
        </motion.div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-gray-900 py-12">
        <motion.h2
          className="text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Upcoming Events
        </motion.h2>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="list-disc text-gray-400">
            <li>Alumni Meetup - September 30, 2024</li>
            <li>Online Webinar on Career Guidance - October 15, 2024</li>
            <li>Panel Discussion on Emerging Technologies - November 5, 2024</li>
          </ul>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center">
        <p className="text-gray-400">&copy; 2024 Alumni-Student Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
