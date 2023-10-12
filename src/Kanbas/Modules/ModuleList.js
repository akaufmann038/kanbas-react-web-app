import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ alignSelf: "flex-end", marginBottom: "20px" }}
      >
        <button type="button" className="btn btn-secondary">
          Collapse All
        </button>
        <button type="button" className="btn btn-secondary">
          View Progress
        </button>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className="fa-solid fa-check"
              style={{ color: "lightgreen" }}
            ></i>
            Publish All
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Something
              </a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger">
          <i
            className="fa-solid fa-plus"
            style={{ color: "white", marginRight: "5px" }}
          ></i>
          Module
        </button>
        <button type="button" className="btn btn-secondary">
          <i
            className="fa-solid fa-ellipsis-vertical float-end"
            style={{ height: "20px", marginTop: "3px" }}
          ></i>
        </button>
      </div>
      <hr />
      <ul class="list-group" style={{ marginTop: 30 }}>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <>
              <li className="list-group-item list-group-item-courses list-group-item-secondary">
                <i
                  className="fa-solid fa-braille"
                  style={{ marginRight: "10px" }}
                ></i>
                {module.name}
                <i className="fa-solid fa-ellipsis-vertical float-end"></i>
                <i
                  className="fa fa-plus float-end"
                  aria-hidden="true"
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                ></i>
                <i
                  className="fa-solid fa-caret-down float-end"
                  style={{ marginLeft: "5px" }}
                ></i>
                <i
                  className="fa fa-check-circle float-end"
                  aria-hidden="true"
                  style={{ color: "green" }}
                ></i>
              </li>
              <li className="list-group-item list-group-item-courses">
                <i
                  className="fa-solid fa-braille"
                  style={{ marginRight: "50px" }}
                ></i>
                {module.description}
                <i
                  className="fa-solid fa-ellipsis-vertical float-end"
                  style={{ marginLeft: "20px" }}
                ></i>
                <i
                  className="fa fa-check-circle float-end"
                  aria-hidden="true"
                  style={{ color: "green" }}
                ></i>
              </li>
            </>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;

{
  /* <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul> */
}
