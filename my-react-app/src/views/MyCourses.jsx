import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import coursesData from "../coursesData";


function Courses() {

  return (
      <main className="container my-5">
        <section className="courses-section">
          <h1 className="text-center fw-bold text-dark mb-3">My Courses</h1>
          <p className="text-center text-muted mb-5">
            Explore our curated list of professional online courses and take the
            next step in your career.
          </p>

          <div className="row justify-content-center">
            {coursesData.slice(0, 6).map((course, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
              >
                <Card
                  title={course.title}
                  text={course.description}
                  img_source="./images/card_image.png"
                  page_source={course.id}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-4">
          <button className="btn btn-primary px-4 py-2 fw-semibold">
            Explore More Courses
          </button>
        </div>
      </main>
  );
}

export default Courses;
