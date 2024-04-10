import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-sky-blue-500 p-8 rounded-md text-center border border-gray-300">
        <h1 className="text-3xl font-bold mb-4">Home/Admins Page</h1>
        <p className="mb-4">You are logged in!</p>
        <Link to="/dashboard" className="text-blue-500 underline mb-4">
          Admin Dashboard
        </Link>
        <div className="flex justify-center">
          <button className="bg-red-500 text-white py-2 px-4 rounded-md">
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;