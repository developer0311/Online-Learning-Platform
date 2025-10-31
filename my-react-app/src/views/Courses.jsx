import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import coursesData from "../coursesData";

function Courses() {
  const courses = [
    {
      title: "Web Development Bootcamp",
      text: "Master HTML, CSS, JavaScript, and React to build modern web applications.",
      img_source: "./images/webdev.jpg",
      page_source: "/course/webdev",
    },
    {
      title: "Data Science with Python",
      text: "Learn data analysis, visualization, and machine learning using Python.",
      img_source: "./images/datascience.jpg",
      page_source: "/course/datascience",
    },
    {
      title: "UI/UX Design Masterclass",
      text: "Create user-friendly designs using Figma and design principles.",
      img_source: "./images/uiux.jpg",
      page_source: "/course/uiux",
    },
    {
      title: "Digital Marketing Strategy",
      text: "Understand SEO, content marketing, and social media campaigns.",
      img_source: "./images/marketing.jpg",
      page_source: "/course/marketing",
    },
    {
      title: "AI & Machine Learning",
      text: "Dive deep into neural networks, deep learning, and AI concepts.",
      img_source: "./images/ai.jpg",
      page_source: "/course/ai",
    },
    {
      title: "Cybersecurity Essentials",
      text: "Protect systems and networks from threats with practical security skills.",
      img_source: "./images/cyber.jpg",
      page_source: "/course/cybersecurity",
    },
  ];

  return (
    
      <main className="container my-5">
        <section>
          <h1 className="text-center fw-bold text-dark mb-4">All Courses</h1>
          <p className="text-center text-muted mb-5">
            Explore our curated list of online courses and boost your career
            today.
          </p>

          <div className="row justify-content-center">
            {coursesData.map((course, index) => (
              <div
                key={course.id}
                className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
              >
                <Card
                
                  title={course.name}
                  text={course.description.slice(0, 50) + "..."}
                  img_source="./images/card_image.png"
                  page_source={course.id}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}

export default Courses;
