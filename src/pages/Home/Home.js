import React from "react";
import Banner from "../../components/Banner/Banner";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <div className="max-w-container mx-auto px-4">
        <NewArrivals />
      </div>
    </div>
  );
};

export default Home;
