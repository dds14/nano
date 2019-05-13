import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import DisplayInfluencers from "../displayInfluencers/displayInfluencers";
import Footer from "../Footer/Footer";
import Hero_Under from "../Hero_Under/Hero_Under";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar />
      <Hero />
      <Hero_Under />
      <DisplayInfluencers />
      <Footer />
    </div>
  );
}

export default App;
