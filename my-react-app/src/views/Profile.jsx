import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Profile() {
  const user = {
    name: "Diprati Das",
    email: "diprati@example.com",
    joined: "January 2025",
    bio: "A passionate learner exploring the world of technology and development.",
    avatar: "./images/card_image.png",
  };

  const enrolledCourses = [
    {
      title: "React.js for Beginners",
      text: "Learn the fundamentals of React, components, and hooks.",
      img_source: "./images/react.jpg",
      page_source: "/course/react",
    },
    {
      title: "Python Data Analysis",
      text: "Explore data manipulation and visualization using Python.",
      img_source: "./images/python.jpg",
      page_source: "/course/python",
    },
    {
      title: "Machine Learning Basics",
      text: "Understand ML concepts, algorithms, and model building.",
      img_source: "./images/ml.jpg",
      page_source: "/course/ml",
    },
  ];

  return (
      <main className="container my-5">
        {/* Profile Header */}
        <section className="text-center mb-5">
          <img
            src={user.avatar}
            alt="Profile"
            className="rounded-circle mb-3"
            width="150"
            height="150"
            style={{ objectFit: "cover" }}
          />
          <h2 className="fw-bold text-dark">{user.name}</h2>
          <p className="text-muted mb-1">{user.email}</p>
          <p className="text-muted small">Joined {user.joined}</p>
          <p className="text-secondary mt-3">{user.bio}</p>

          <button className="btn btn-outline-primary mt-2 px-4">
            Edit Profile
          </button>
        </section>

        {/* Enrolled Courses */}
        <section className="enrolled-courses">
          <h3 className="fw-bold text-dark mb-4 text-center">
            My Enrolled Courses
          </h3>

          <div className="row justify-content-center">
            {enrolledCourses.map((course, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
              >
                <Card
                  title={course.title}
                  text={course.text.slice(0, 80) + "..."}
                  img_source="./images/card_image.png"
                  page_source={course.page_source}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}

export default Profile;
