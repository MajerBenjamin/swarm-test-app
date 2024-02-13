import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

const Home = () => {
  const callApi1 = async () => {
    await fetch("http://localhost:5000/api/posts/all", {
      method: "GET",
    })
      .then(async (res) => {
        console.log("Result", JSON.stringify(await res.json()));
        return res;
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
  const callApi2 = async () => {};
  const callApi3 = async () => {};

  return (
    <>
      <Hero />
      <div className="inline-flex">
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <button
            type="button"
            onClick={callApi1}
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
            Api click1
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <button
            type="button"
            onClick={callApi2}
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
            Api click2
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <button
            type="button"
            onClick={callApi3}
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
            Api click3
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
      <Intro />
      <Services />
      <Portfolio />
      <Clients />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
