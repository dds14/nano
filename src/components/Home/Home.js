import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import DisplayInfluencers from "../displayInfluencers/displayInfluencers";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <Navbar />
      <Hero />
      <DisplayInfluencers />
      <Footer />
    </div>
  );
}

export default App;
