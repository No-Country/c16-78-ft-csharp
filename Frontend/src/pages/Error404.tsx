import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="w-full h-svh bg-primary flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white flex justify-center items-center">
        <article className="flex justify-center flex-col">
          <h1 className="text-8xl font-bold">404</h1>
          <button className="mt-12 bg-primary rounded-md py-2 px-4 hover:brightness-90">
            <Link to="/">Vuelve a casa</Link>
          </button>
        </article>
      </main>
      <Footer />
    </main>
  );
};

export default Error404;
