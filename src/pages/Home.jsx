import React from 'react';
import Hero from '../components/Hero';  // Import the Hero component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar /> {/* Fixed Navbar */}
      <div className="pt-24"> {/* Add padding to prevent content being hidden behind the navbar */}
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default Home;
