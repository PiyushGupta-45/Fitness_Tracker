import React from 'react';
import { Link } from 'react-router-dom';
import cardio from '../Track_Workout/cardio.jpg';
import back from '../Track_Workout/Back.jpg';
import chest from '../Track_Workout/Chest.jpg';
import legs from '../Track_Workout/legs.jpg';
import shoulder from '../Track_Workout/shoulder.jpg';
import arms from '../Track_Workout/arms.jpg';

const workouts = [
  {
    title: "Cardio",
    description: "There are multiple Cardio options, click anywhere on Cardio.",
    image: cardio,
    link: "/running",
  },
  {
    title: "Back",
    description: "There are multiple Back options, click anywhere on Back.",
    image: back,
    link: "/back",
  },
  {
    title: "Chest",
    description: "There are multiple Chest options, click anywhere on Chest.",
    image: chest,
    link: "/chest",
  },
  {
    title: "Arms",
    description: "There are multiple Arms options, click anywhere on Arms.",
    image: arms,
    link: "/arms",
  },
  {
    title: "Shoulders",
    description: "There are multiple Shoulder options, click on Shoulder.",
    image: shoulder,
    link: "/shoulder",
  },
  {
    title: "Legs",
    description: "There are multiple Legs options, click anywhere on Legs.",
    image: legs,
    link: "/legs",
  },
];

const Tracking = () => {
  return (
    <>
      <p className='text-center py-2.5 text-3xl bg-lime-300 dark:bg-neutral-950 font-semibold'>
        Here you are going to track your workouts
      </p>

      <section className="my-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {workouts.map((workout, index) => (
          <Link key={index} to={workout.link}>
            <div className='p-3 mx-3 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-all transform hover:scale-105 duration-300'>
              <img className='h-70 w-auto mx-auto' src={workout.image} alt={workout.title} />
              <h2 className="pt-2 text-xl text-center font-semibold text-gray-800 dark:text-gray-100">
                {workout.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                {workout.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Tracking;