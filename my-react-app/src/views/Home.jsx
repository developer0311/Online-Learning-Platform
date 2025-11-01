import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import coursesData from "../coursesData";

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
        <div className="row justify-content-center ">
          {coursesData.slice(0, 5).map((course) => (
            <div key={course.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
              <Card
                title={course.name}
                text={course.description}
                page_source={course.id}
                img_source="./images/card_image.png"
              />
            </div>
          ))}
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
