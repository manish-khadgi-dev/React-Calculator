import React from "react";

export const Skills = () => {
  return (
    <section id="skill" className="container py-4">
      <div className="row">
        <div className="col">
          {/* <!-- title --> */}
          <div className="title">
            <span>Skills</span>
          </div>

          {/* <!-- icons --> */}
          <div className="icons">
            <div>
              <i className="fa-brands fa-html5 text-danger"> </i> HTML5
            </div>
            <div>
              <i className="fa-brands fa-css3 text-primary"> </i> CSS
            </div>
            <div>
              <i className="fa-brands fa-js text-dark bg-warning"> </i>{" "}
              Javascript ES6
            </div>
            <div>
              <i className="fa-brands fa-react text-primary bg-dark"></i> React
            </div>
            <div>
              <i className="fa-brands fa-github text-info bg-dark"> </i>Github
            </div>
            <div>
              <i className="fa-solid fa-terminal text-warning"></i> Terminal
            </div>
            <div>
              <i class="fa-solid fa-mobile-screen-button text-primary"></i>{" "}
              Responsive <p>design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
