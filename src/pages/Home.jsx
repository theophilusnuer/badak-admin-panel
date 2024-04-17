import React from "react";
import LoginForm from "../components/user-login/LoginForm";

const Home = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-sky-blue-500 p-2 text-center">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className="mb-4">Welcome, please login</p>
        <LoginForm />
      </div>
    </section>
  );
};

export default Home;
