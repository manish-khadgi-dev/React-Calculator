import React from "react";
import ProjectCalculator from "../assets/react-calculator-project.png";
import ProjectSearchMovie from "../assets/search-movie-api-project.png";
import ProjectTaskTracker from "../assets/task-tracker-project.png";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div id="projects" className=" py-4">
      <div className="title">
        <span>Projects</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md order-md-2">
            <img src={ProjectCalculator} alt="react-calculator" width="90%" />
          </div>
          <div className="col-md mt-5 py-4">
            <motion.h3 whileHover={{ scale: 1.2, originX: 0 }}>
              Prank Calculator App
            </motion.h3>

            <p className="mt-3 fw-bold">
              Tech Used : HTML, CSS, JAVASCRIPT REACT
            </p>
            <p>
              This app does mathematical operation like all the calculator. But
              I have added a prank feature which will give wrong answer randomly
              making weird sound.{" "}
            </p>
            <p>
              In this project, I learned about Component of React JS , Props and
              States & other fundamentals of React JS
            </p>

            <div>
              <a
                href="https://react-prank-calculator.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              {"  "} |{" "}
              <a
                href="https://github.com/moonishkale/React-Prank-Calculator"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md order-md">
            <img
              src={ProjectSearchMovie}
              alt="react-calculator"
              width="90%"
              className="mb-3"
            />
          </div>
          <div className="col-md mt-5 py-5 ">
            <motion.h3 whileHover={{ scale: 1.2, originX: 0 }}>
              Search Movie API App
            </motion.h3>

            <p className="mt-3 fw-bold">
              Tech Used : HTML, CSS, JAVASCRIPT REACT
            </p>
            <p>
              This app suggests a random movie every time it reloads. It can
              categorise a searched movie into happy movies or sad movies.
              Later, it can be filtered by "All movies," "happy movies” & "Lazy
              Movies"
              <p>
                In this project, I learned about Fetch API , UseState and
                UseEffect hooks & Framer motion library
              </p>
            </p>

            <div>
              <a
                href="https://movie-react-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              {"  "} |{" "}
              <a
                href="https://github.com/moonishkale/Movie-Reac"
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md order-md-2">
            <img src={ProjectTaskTracker} alt="react-calculator" width="90%" />
          </div>
          <div className="col-md mt-5 py-5">
            <motion.h3 whileHover={{ scale: 1.2, originX: 0 }}>
              Task Tracker App
            </motion.h3>

            <p className="mt-3 fw-bold">
              Tech Used : HTML, CSS, JAVASCRIPT REACT
            </p>
            <p>
              This app is a simple task tracker which has a feature to filter
              our task into good list or bad list. It also gives total hour of
              task list and total hour of bad task list.
            </p>
            <p>I create this app using cutom css and vanilla javascript.</p>
            <div id="anchor">
              <a
                href="https://react-task-manager-chi.vercel.app/"
                target="_blank"
                className="text-info"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              {"  "} |{" "}
              <a
                href="https://github.com/moonishkale/react-task-manager"
                target="_blank"
                className="text-info"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <motion.a href="#navbar" id="arrow" whileHover={{ scale: 1.1 }}>
                <i class="fa-solid fa-arrow-up"></i>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
