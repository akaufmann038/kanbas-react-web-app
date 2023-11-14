import { Link } from "react-router-dom";
import db from "../Database";
import { React, useState } from "react";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="d-flex flex-column" style={{ width: "100%" }}>
      <h1>Dashboard</h1>
      <hr />
      <div className="container-fluid">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="row">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
        <div className="row" style={{ width: 450 }}>
          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <div className="d-flex" style={{ marginTop: 10 }}>
            <button className="btn btn-success" onClick={addNewCourse}>
              Add
            </button>
            <button
              className="btn btn-primary"
              style={{ marginLeft: 5 }}
              onClick={updateCourse}
            >
              Update
            </button>
          </div>
          {courses.map((course) => (
            <div className="d-flex" style={{ marginTop: 10 }}>
              <input
                className="form-control"
                type="text"
                value={course.name}
                style={{ width: 200 }}
              />
              <button
                className="btn btn-warning"
                style={{ marginLeft: 30 }}
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                style={{ marginLeft: 5 }}
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div
      className="col-sm-6 col-md-4 col-xl-3"
      style={{ borderRadius: "10px" }}
    >
      <div
        className="card"
        style={{ width: "270px", marginBottom: "35px", marginTop: "35px" }}
      >
        <div
          className="d-flex justify-content-end"
          style={{
            backgroundColor: "darkcyan",
            height: "160px",
            borderRadius: "5px",
            width: "270px",
          }}
        >
          <i
            className="fa-solid fa-braille"
            style={{ marginTop: "10px", marginRight: "10px", color: "white" }}
          ></i>
        </div>

        <div className="card-body">
          <Link
            className="card-title"
            style={{
              color: "darkblue",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            to={`/Kanbas/Courses/${course._id}`}
          >
            {course.number} {course._id} {course.name}
          </Link>
          <h5 className="card-text" style={{ color: "grey" }}>
            {course.number}.{course._id}
          </h5>
          <p className="card-text" style={{ fontSize: "0.9em", color: "grey" }}>
            {course.startDate} Fall 2023 Semester Full Term
          </p>
          <i className="fa-regular fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
