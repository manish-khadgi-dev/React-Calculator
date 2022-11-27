import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  return (
    <section id="contactme" className="container contact">
      <div className="title">
        <span>Contact Me</span>
      </div>

      {/* <!-- icons to link  --> */}
      <div className="row ">
        <div className="col-md-6">
          <Form>
            <Form.Group className="mt-3 " controlId="">
              <Form.Label> Your Name : </Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Your email address: </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Details</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="dark" type="submit" className="">
              Get in Touch
            </Button>
          </Form>
        </div>
        <div className="col-md-6 mt-5 py-4 g-5">
          <p>
            If you have any questions about me or my projects, or (politely)
            argue about the best albums of the 90's, I'm your man!{" "}
          </p>
          <p>
            I'm available to grab a coffee and chat! Drop a comment, question,
            concern, or Spotify playlist, and thanks for stopping by! Shoot to
            my inbox:
          </p>
          <a href=""> manishkhadgi123@gmail.com</a>
        </div>
        <div className="mt-5 d-flex justify-content-center gap-5 ">
          <a href="" target="_blank">
            <i className="fa-solid fa-envelope text-primary"></i>
          </a>
          <a href="https://www.linkedin.com/in/manishkhadgi/" target="_blank">
            <i className="fa-brands fa-linkedin text-primary"></i>
          </a>
          <a href="https://www.facebook.com/moonish.khadgi/" target="_blank">
            <i className="fa-brands fa-facebook text-primary"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC4kLCi4RWB2Iw5K2yYwBZpQ"
            target="_blank"
          >
            <i className="fa-brands fa-youtube text-danger"></i>
          </a>
          <a href="https://www.instagram.com/moonish_kale/" target="_blank">
            <i class="fa-brands fa-instagram text-danger"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
