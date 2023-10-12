import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Assignment"
          style={{ height: "40px" }}
        />
        <div
          className="d-flex align-items-center"
          style={{ marginBottom: "20px" }}
        >
          <button type="button" className="btn btn-secondary">
            <i
              className="fa-solid fa-plus"
              style={{ color: "white", marginRight: "5px" }}
            ></i>
            Group
          </button>
          <button type="button" className="btn btn-danger">
            <i
              className="fa-solid fa-plus"
              style={{ color: "white", marginRight: "5px" }}
            ></i>
            Assignment
          </button>
          <button type="button" className="btn btn-secondary">
            <i
              className="fa-solid fa-ellipsis-vertical float-end"
              style={{ height: "20px", marginTop: "3px" }}
            ></i>
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group" style={{ marginTop: "30px" }}>
        <li className="list-group-item list-group-item-courses list-group-item-secondary">
          <i
            className="fa-solid fa-braille"
            style={{ marginRight: "10px" }}
          ></i>
          <i
            className="fa-solid fa-caret-down"
            style={{ marginRight: "5px" }}
          ></i>
          <a style={{ fontWeight: "bold" }}>Assignments</a>
          <i
            className="fa-solid fa-ellipsis-vertical float-end"
            style={{ marginTop: "5px" }}
          ></i>
          <i
            className="fa fa-plus float-end"
            aria-hidden="true"
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "5px",
            }}
          ></i>
          <div
            className="float-end rounded"
            style={{
              border: "1px solid grey",
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingBottom: "4px",
            }}
          >
            40% of Total
          </div>
        </li>
        {courseAssignments.map((assignment, index) => (
          <Link
            key={index}
            className="list-group-item list-group-item-courses"
            style={{ borderLeft: "5px solid green" }}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          >
            <i
              className="fa-solid fa-braille"
              style={{ marginRight: "10px" }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square"
              style={{ marginLeft: "5px", marginRight: "10px" }}
            ></i>
            <i
              className="fa-solid fa-ellipsis-vertical float-end"
              style={{ marginLeft: "20px", marginTop: "18px" }}
            ></i>
            <i
              className="fa fa-check-circle float-end"
              aria-hidden="true"
              style={{ color: "green", marginTop: "18px" }}
            ></i>
            <div className="d-inline-flex flex-column">
              <a
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {assignment.title}
              </a>
              <div style={{ fontSize: "0.7em" }}>
                <a style={{ fontWeight: "bold" }}>Due</a> Oct 2, 2022 at 11:59
                PM | 100 pts
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;

{
  /* <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div> */
}
