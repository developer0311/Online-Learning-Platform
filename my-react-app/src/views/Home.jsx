import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

function Home() {

  return (
    <main className="home">
      <section className="home mb-5">
        <h1 className="text-center fw-bold display-5 text-dark mt-5">
          Learn Anytime, Anywhere with &nbsp;
          <span
            className="text-primary"
            style={{ textDecoration: "underline" }}
          >
            CourseDash
          </span>
        </h1>
        <p className="text-center text-muted mt-3 mb-5">
          Empower your career with industry-leading online courses, built for
          learners like you.
        </p>

        <Carousel />
      </section>

      <section className="home mb-5 container">
        <h3 className="fw-semibold text-center mb-4">Popular Courses</h3>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Card
              title="Web Development"
              text="Learn HTML, CSS, and JavaScript to start your career as a full-stack developer."
              page_source="/"
              img_source="./images/card_image.png"
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Card
              title="Data Science"
              text="Master data analysis, Python, and AI to become a top data scientist."
              page_source="/"
              img_source="./images/card_image.png"
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Card
              title="UI/UX Design"
              text="Design stunning interfaces with Figma and Adobe XD from scratch."
              page_source="/"
              img_source="./images/card_image.png"
            />
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Card
              title="Machine Learning"
              text="Dive deep into ML algorithms and build predictive models using Python."
              page_source="/"
              img_source="./images/card_image.png"
            />
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/courses" className="btn btn-primary">
            Explore All Courses
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
