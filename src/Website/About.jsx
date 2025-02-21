import React from "react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex-grow px-6 py-12 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Our Fitness Tracker</h1>
        <p className="text-lg mb-6">
          Our Fitness Tracker is designed to help you stay on top of your fitness goals
          with ease. Whether you're a beginner or an advanced athlete, we provide tools
          to track workouts, set goals, and monitor progress.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Set personalized fitness goals</li>
              <li>Track workouts with real-time analytics</li>
              <li>Monitor running posture with AI-based detection</li>
              <li>Google Sign-In for easy access</li>
              <li>Dark mode support for better usability</li>
            </ul>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We believe in making fitness accessible and data-driven. Our app helps users
              stay motivated by providing actionable insights, AI-powered posture tracking,
              and intuitive goal-setting features.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-xl font-semibold">Join Us on Your Fitness Journey</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Start tracking your workouts today and take control of your fitness goals.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-4 text-center">
        <p className="text-sm">© 2025 Fitness Tracker. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-white">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-white">Terms & Conditions</a>
          <a href="#" className="mx-2 hover:text-white">About Us</a>
          <a href="#" className="mx-2 hover:text-white">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default About;
