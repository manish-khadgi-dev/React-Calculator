import "./App.css";

import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Layout } from "./components/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
              </Layout>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/skills"
            element={
              <Layout>
                <Skills />
              </Layout>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/about-me"
            element={
              <Layout>
                <AboutMe />
              </Layout>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/contactme"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
