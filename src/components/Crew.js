import React, { useState } from "react";
import Navbar from "./Navbar";
import { data } from "../data.js";

const Crew = () => {
  const [member, setMember] = useState(0);
  const timeOut = 500;

  window.addEventListener("load", () => {
    document.querySelector(".first").classList.add("active");
  });

  const changeMember = (e) => {
    if (e.target.value === "1") {
      setMember(0);
      document.querySelector(".first").classList.add("active");
      document.querySelector(".second").classList.remove("active");
      document.querySelector(".third").classList.remove("active");
      document.querySelector(".last").classList.remove("active");
      if (member !== 0) {
        document.querySelector(".member-img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".member-img").classList.remove("animate");
          document.querySelector(".main_info").classList.add("animate");
        }, timeOut);
      }
    } else if (e.target.value === "2") {
      setMember(1);
      document.querySelector(".first").classList.remove("active");
      document.querySelector(".second").classList.add("active");
      document.querySelector(".third").classList.remove("active");
      document.querySelector(".last").classList.remove("active");
      if (member !== 1) {
        document.querySelector(".member-img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".member-img").classList.remove("animate");
          document.querySelector(".main_info").classList.add("animate");
        }, timeOut);
      }
    } else if (e.target.value === "3") {
      setMember(2);
      document.querySelector(".first").classList.remove("active");
      document.querySelector(".second").classList.remove("active");
      document.querySelector(".third").classList.add("active");
      document.querySelector(".last").classList.remove("active");
      if (member !== 2) {
        document.querySelector(".member-img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".member-img").classList.remove("animate");
          document.querySelector(".main_info").classList.add("animate");
        }, timeOut);
      }
    } else {
      setMember(3);
      document.querySelector(".first").classList.remove("active");
      document.querySelector(".second").classList.remove("active");
      document.querySelector(".third").classList.remove("active");
      document.querySelector(".last").classList.add("active");
      if (member !== 3) {
        document.querySelector(".member-img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".member-img").classList.remove("animate");
          document.querySelector(".main_info").classList.add("animate");
        }, timeOut);
      }
    }
  };

  return (
    <div className="Crew_page">
      <Navbar />
      <main>
        <div className="header">
          <p>
            <span> 02 </span> meet your crew
          </p>
        </div>
        <img
          src={data.crew[member].images.png}
          alt="member-img"
          className="member-img"
        />
        <div className="crew_info">
          <CrewNav changeMember={changeMember} />
          <div className="main_info">
            <div className="header-desktop">
              <p>
                <span> 02 </span> meet your crew
              </p>
            </div>
            <div>
              <span> {data.crew[member].role} </span>
              <h1> {data.crew[member].name} </h1>{" "}
              <p> {data.crew[member].bio} </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;

const CrewNav = ({ changeMember }) => {
  return (
    <div className="crew_nav">
      <ul>
        <li>
          <button className="first" onClick={changeMember} value="1"></button>
        </li>
        <li>
          <button className="second" onClick={changeMember} value="2"></button>
        </li>
        <li>
          <button className="third" onClick={changeMember} value="3"></button>
        </li>
        <li>
          <button className="last" onClick={changeMember} value="4"></button>
        </li>
      </ul>
    </div>
  );
};
