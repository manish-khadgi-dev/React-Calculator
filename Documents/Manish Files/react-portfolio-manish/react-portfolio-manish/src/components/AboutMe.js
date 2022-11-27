import React from "react";
import ManishImg from "../assets/manish-img.jpeg";

export const AboutMe = () => {
  return (
    <section id="aboutme" className="container mb-5">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="row py-3 ">
        <div className="col-md-6">
          <img src={ManishImg} alt="aboutme" width="50%" />
        </div>
        <div className="col-md-6 mt-5">
          <p className="mt-5">
            Hello! My name is Manish Khadgi. I graduated from Federation
            University in Bachelors of Information Teachnology. Currently, I am
            enrolled in Dented Code Academy Bootcamp to pursue career in
            Software Development.I enjoy developing live Application on the
            internet.
          </p>
          <p>
            Other than coding, I spent most of my free time playing music or
            listening to podcast. I also create mix and master music and beats
            using Ableton live.
          </p>
        </div>
      </div>
    </section>
  );
};
