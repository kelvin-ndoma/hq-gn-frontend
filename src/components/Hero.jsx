import React from "react";
import { Link } from "react-router-dom";
import Connected from "../assets/connectedf.jpg";

const Hero = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              The International Hub for Black Professionals
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Connecting 1 Million+ Black Professionals Worldwide
            </p>
            <div className="mt-6 space-x-4">
              <Link to="/signup">
                <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                  Log In
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={Connected}
              alt="Hero"
              className="rounded-lg w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <div className="text-5xl text-blue-600 mb-4">👥</div>
            <h3 className="text-xl font-semibold">Collaboration</h3>
            <p className="mt-2 text-gray-600">
              Find career mentors, industry contacts, or partners for your next
              business venture.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl text-blue-600 mb-4">🌐</div>
            <h3 className="text-xl font-semibold">Networking</h3>
            <p className="mt-2 text-gray-600">
              Connect with like-minded individuals in your city and beyond.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl text-blue-600 mb-4">🌏</div>
            <h3 className="text-xl font-semibold">Cultural Exchange</h3>
            <p className="mt-2 text-gray-600">
              Meet people from places you might never have visited otherwise.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Community
            </h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-semibold text-gray-700">
                  In-Person & Virtual Events
                </h3>
                <p className="text-gray-600">
                  Learn about events in your area or create your own to find
                  your tribe.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-700">
                  Interest Groups
                </h3>
                <p className="text-gray-600">
                  Discuss, devise, and discover your interests with fellow
                  members.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-700">
                  Build Your Global Network
                </h3>
                <p className="text-gray-600">
                  Showcase who you are and curate the best representation of
                  yourself.
                </p>
              </li>
            </ul>
            <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Explore
            </button>
          </div>
          <div>
            <img
              src={Connected}
              alt="Community"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Engage and Connect Section */}
      {/* Engage and Connect Section */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex justify-left">
            <img
              src={Connected}
              alt="Engage and Connect"
              className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Engage and Connect
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-gray-700">
                  Members Forums
                </h3>
                <p className="text-gray-600">
                  Start or join discussions on trending topics and burning
                  questions.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-gray-700">
                  Attend an Event
                </h3>
                <p className="text-gray-600">
                  RSVP and make lifelong memories with global peers through easy
                  event access.
                </p>
              </li>
            </ul>
            <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
