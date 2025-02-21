import React from "react";
import { Link } from "react-router-dom";
import trackWorkout from './Images/trackWorkout.jpg';
import posture from './Images/posture.jpg';
import goals from './Images/personalized_goals.jpg';

const Home = () => {
  return (
    <div className="px-4 py-8 min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-gray-200 transition-colors duration-300">
      
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to Your Fitness Tracker
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Track your workouts, monitor your progress, and achieve your fitness goals with ease.
        </p>
      </section>
      <section className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to='/tracking'>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all transform hover:scale-105 duration-300">
            <img className="h-90 w-auto mx-auto" src={trackWorkout} alt="Track Workout" />
            <h2 className="pt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Track Workouts</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Log your daily workouts and monitor improvements over time.
            </p>
          </div>
        </Link>

        <Link to='/posture'>  
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 transform hover:scale-105">
            <img className="h-90 w-auto mx-auto" src={posture} alt="Posture Analysis" />
            <h2 className="pt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Posture Analysis</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Get real-time feedback on your running and workout posture.
            </p>
          </div>
        </Link>

        <Link to='/goals'>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all transform hover:scale-105 duration-300">
            <img className="h-90 w-auto mx-auto" src={goals} alt="Personalized Goals" />
            <h2 className="pt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">Personalized Goals</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Set fitness goals and get insights to keep you motivated.
            </p>
          </div>
        </Link>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-2xl font-semibold">What Our Users Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-300">"This fitness tracker has transformed my workouts! The posture analysis is a game-changer."</p>
            <p className="mt-2 font-semibold">— Alex R.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-300">"I love the personalized goals feature. It's really helped me stay motivated!"</p>
            <p className="mt-2 font-semibold">— Sarah M.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-600 dark:text-gray-300">"A must-have for fitness enthusiasts. Easy to use and super effective."</p>
            <p className="mt-2 font-semibold">— John D.</p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
        <div className="mt-6 max-w-2xl mx-auto">
          <details className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
            <summary className="cursor-pointer font-semibold">How do I get started?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Sign up and start logging your workouts. AI will guide you with posture corrections.</p>
          </details>
          <details className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
            <summary className="cursor-pointer font-semibold">Is this app free to use?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Yes! A free plan is available, and a premium plan unlocks advanced insights.</p>
          </details>
          <details className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800">
            <summary className="cursor-pointer font-semibold">Can I sync this with my smartwatch?</summary>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Yes! The app integrates with major fitness wearables.</p>
          </details>
        </div>
      </section>

      <section className="text-center my-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Ready to Transform Your Fitness Journey?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Sign up today and start achieving your fitness goals.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-300">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Home;
