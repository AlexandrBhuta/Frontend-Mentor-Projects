import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data } from "../data.js";

const Technology = () => {
  const [tech, setTech] = useState(0);
  const [techImg, setTechImg] = useState(data.technology[tech].images.portrait);

  const timeOut = 500;

  const checkMedia = () => {
    if (window.innerWidth > 1023) {
      setTechImg(data.technology[tech].images.portrait);
    } else if (window.innerWidth < 1024) {
      setTechImg(data.technology[tech].images.landscape);
    }
  };

  useEffect(() => {
    checkMedia();
    window.addEventListener("load", () => {
      document.querySelector(".vehicle").classList.add("active");
    });
    window.addEventListener("resize", checkMedia);
  });

  const changeTech = (e) => {
    if (e.target.innerText === "1") {
      setTech(0);
      document.querySelector(".vehicle").classList.add("active");
      document.querySelector(".port").classList.remove("active");
      document.querySelector(".capsule").classList.remove("active");
      if (tech !== 0) {
        document.querySelector(".technology_img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".technology_img").classList.remove("animate");
          document.querySelector(".main_info").classList.remove("animate");
        }, timeOut);
      }
    } else if (e.target.innerText === "2") {
      setTech(1);
      document.querySelector(".port").classList.add("active");
      document.querySelector(".capsule").classList.remove("active");
      document.querySelector(".vehicle").classList.remove("active");
      if (tech !== 1) {
        document.querySelector(".technology_img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".technology_img").classList.remove("animate");
          document.querySelector(".main_info").classList.remove("animate");
        }, timeOut);
      }
    } else {
      setTech(2);
      document.querySelector(".capsule").classList.add("active");
      document.querySelector(".port").classList.remove("active");
      document.querySelector(".vehicle").classList.remove("active");
      if (tech !== 2) {
        document.querySelector(".technology_img").classList.add("animate");
        document.querySelector(".main_info").classList.add("animate");
        setTimeout(() => {
          document.querySelector(".technology_img").classList.remove("animate");
          document.querySelector(".main_info").classList.remove("animate");
        }, timeOut);
      }
    }
  };

  return (
    <div className="Technology_page">
      <Navbar />
      <main>
        <div className="page_indicator">
          <p>
            <span> 03 </span> space launch 101
          </p>
        </div>
        <div className="technology_info">
          <div className="technology_img">
            <img
              src={techImg}
              alt="technology-img"
              className="technology-img"
            />
          </div>
          <div className="main_info">
            <TechnologyNav changeTech={changeTech} />
            <div>
              <span> the terminology... </span>
              <h1> {data.technology[tech].name} </h1>
              <p> {data.technology[tech].description} </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;

const TechnologyNav = ({ changeTech }) => {
  return (
    <div className="technology_nav">
      <ul>
        <li>
          <button className="vehicle" onClick={changeTech}>
            1
          </button>
        </li>
        <li>
          <button className="port" onClick={changeTech}>
            2
          </button>
        </li>
        <li>
          <button className="capsule" onClick={changeTech}>
            3
          </button>
        </li>
      </ul>
    </div>
  );
};
