"use client";
import { useState, useRef } from "react";
import { register } from "@/app/(components)/Form/action";

interface RegisterFormProps {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  showForm,
  setShowForm,
}) => {
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);

    try {
      await register(formData);
      formRef.current?.reset();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-start text-4xl font-bold">Register</h1>
      <form
        className="p-5 w-1/2 text-center"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="flex flex-col p-3">
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-500 py-2 px-3 w-1/2 rounded-lg mx-auto"
          />
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="username" className="mb-3">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-500 py-2 px-3 w-1/2 rounded-lg mx-auto"
          />
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="password" className="mb-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-500 py-2 px-3 w-1/2 rounded-lg mx-auto"
          />
        </div>
        <div className="flex flex-col p-3">
          <label htmlFor="passwordConfirmation" className="mb-3">
            Password Confirmation
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
            className="border border-gray-500 py-2 px-3 w-1/2 rounded-lg mx-auto"
          />
        </div>
        <button
          type="submit"
          className="border border-gray-500 font-bold rounded-lg py-2 px-3 w-1/2 mx-auto mt-5 
            hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out"
        >
          Register
        </button>
        <div className="flex justify-center items-center gap-4 mt-5">
          <p className="">Already have an account ? </p>
          <p
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          >
            Login
          </p>
        </div>
        {error && (
          <p className="bg-red-500 text-white font-bold p-3 rounded-lg mt-5">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
