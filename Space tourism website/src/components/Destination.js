import React, { useState } from "react";
import Navbar from "./Navbar";
import { data } from "../data.js";

const Destination = () => {
  const [destination, setDestination] = useState(0);
  const timeOut = 500;

  const onDestinationLoad = () => {
    window.addEventListener("load", () => {
      document.querySelector(".moon").classList.add("active");
    });
  };

  onDestinationLoad();

  const changeDestination = (e) => {
    if (e.target.innerText === "MOON") {
      setDestination(0);
      document.querySelector(".moon").classList.add("active");
      document.querySelector(".mars").classList.remove("active");
      document.querySelector(".europa").classList.remove("active");
      document.querySelector(".titan").classList.remove("active");
      if (destination !== 0) {
        document.querySelector(".destination_img").classList.add("animate");
        setTimeout(() => {
          document
            .querySelector(".destination_img")
            .classList.remove("animate");
        }, timeOut);
      }
    } else if (e.target.innerText === "MARS") {
      setDestination(1);
      document.querySelector(".mars").classList.add("active");
      document.querySelector(".moon").classList.remove("active");
      document.querySelector(".europa").classList.remove("active");
      document.querySelector(".titan").classList.remove("active");
      if (destination !== 1) {
        document.querySelector(".destination_img").classList.add("animate");
        document.querySelector(".first_info").classList.add("animate");
        document.querySelector(".last_info").classList.add("animate");
        setTimeout(() => {
          document
            .querySelector(".destination_info")
            .classList.remove("animate");
          document.querySelector(".first_info").classList.remove("animate");
          document.querySelector(".last_info").classList.remove("animate");
        }, timeOut);
      }
    } else if (e.target.innerText === "EUROPA") {
      setDestination(2);
      document.querySelector(".europa").classList.add("active");
      document.querySelector(".moon").classList.remove("active");
      document.querySelector(".mars").classList.remove("active");
      document.querySelector(".titan").classList.remove("active");
      if (destination !== 2) {
        document.querySelector(".destination_img").classList.add("animate");
        document.querySelector(".first_info").classList.add("animate");
        document.querySelector(".last_info").classList.add("animate");
        setTimeout(() => {
          document
            .querySelector(".destination_img")
            .classList.remove("animate");
          document.querySelector(".first_info").classList.remove("animate");
          document.querySelector(".last_info").classList.remove("animate");
        }, timeOut);
      }
    } else {
      setDestination(3);
      document.querySelector(".titan").classList.add("active");
      document.querySelector(".moon").classList.remove("active");
      document.querySelector(".europa").classList.remove("active");
      document.querySelector(".mars").classList.remove("active");
      if (destination !== 3) {
        document.querySelector(".destination_img").classList.add("animate");
        document.querySelector(".first_info").classList.add("animate");
        document.querySelector(".last_info").classList.add("animate");
        setTimeout(() => {
          document
            .querySelector(".destination_img")
            .classList.remove("animate");
          document.querySelector(".first_info").classList.remove("animate");
          document.querySelector(".last_info").classList.remove("animate");
        }, timeOut);
      }
    }
  };

  return (
    <div className="Destination_page">
      <Navbar />
      <main>
        <div className="page_indicator">
          <p>
            <span> 01 </span> pick your destination
          </p>
        </div>
        <div className="destination_info">
          <div className="destination_img">
            <img
              src={data.destinations[destination].images.png}
              alt="destination-img"
              className="destination-img"
            />
          </div>
          <div className="main_info">
            <DestinationNav changeDestination={changeDestination} />
            <div className="first_info">
              <h1> {data.destinations[destination].name} </h1>
              <p> {data.destinations[destination].description} </p>
            </div>
            <div className="last_info">
              <span>
                <p> avg.distance </p>
                <p> {data.destinations[destination].distance} </p>
              </span>
              <span>
                <p> est.travel time </p>
                <p> {data.destinations[destination].travel} </p>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;

const DestinationNav = ({ changeDestination }) => {
  return (
    <div className="destination_nav">
      <ul>
        <li>
          <button className="moon" onClick={changeDestination}>
            moon
          </button>
        </li>
        <li>
          <button className="mars" onClick={changeDestination}>
            mars
          </button>
        </li>
        <li>
          <button className="europa" onClick={changeDestination}>
            europa
          </button>
        </li>
        <li>
          <button className="titan" onClick={changeDestination}>
            titan
          </button>
        </li>
      </ul>
    </div>
  );
};
