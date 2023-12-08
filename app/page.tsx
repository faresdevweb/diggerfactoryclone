"use client";
import { RegisterForm, LoginForm } from "./(components)";
import { useState } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div>
      {showForm ? (
        <LoginForm showForm={showForm} setShowForm={setShowForm} />
      ) : (
        <RegisterForm showForm={showForm} setShowForm={setShowForm} />
      )}
    </div>
  );
};

export default Home;
