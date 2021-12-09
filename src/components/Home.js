import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="Home_page">
      <Navbar />
      <main>
        <div className="Home_text">
          <div>
            <span> So, you want to travel to </span> <h1> Space </h1>
            <p>
              Let’ s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it.Well sit back, and relax because we’ ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <p> Explore </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
