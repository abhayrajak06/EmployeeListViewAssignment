import React, { useState } from "react";
import HomeScreen from "../components/HomeScreen";
import EmployeeListView from "../components/EmployeeListView";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(1);

  return (
    <div id="home-page" className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        {showHomeScreen === 1 ? <HomeScreen /> : <EmployeeListView />}
      </div>
      <Footer
        setShowHomeScreen={setShowHomeScreen}
        showHomeScreen={showHomeScreen}
      />
    </div>
  );
};

export default Home;
