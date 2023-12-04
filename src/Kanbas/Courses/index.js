import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import axios from "axios";
import { COURSES_URL as URL } from "../Modules/client";

function Courses({}) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [course, setCourse] = useState({});

  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    if (courseId !== "Home" && courseId !== undefined) {
      findCourseById(courseId);
    }
  }, [courseId]);

  const generateBreadcrumb = () => {
    console.log("here");
    console.log(pathname);
    if (pathname.split("/").length >= 5) {
      const split = pathname.split("/")[4];

      if (split.includes("%20")) {
        return split.split("%20")[0] + " " + split.split("%20")[1];
      } else {
        return split;
      }
    }
    return;
  };

  return (
    <div className="d-flex flex-column" style={{ marginLeft: 22, flexGrow: 1 }}>
      <div className="d-none d-xl-block">
        <div className="d-flex align-items-center" style={{ gap: "20px" }}>
          <nav
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0" y1="3" x2="20" y2="3" stroke="red" />
                    <line x1="0" y1="10" x2="20" y2="10" stroke="red" />
                    <line x1="0" y1="17" x2="20" y2="17" stroke="red" />
                  </svg>
                  <p
                    style={{
                      marginTop: "15px",
                      color: "red",
                      marginRight: "-10px",
                      marginLeft: "20px",
                    }}
                  >
                    CS4550.12631.202410
                  </p>
                </div>
              </li>
              <li
                className="breadcrumb-item"
                style={{ marginTop: "14px", marginLeft: "10px" }}
              >
                {generateBreadcrumb()}
              </li>
            </ol>
          </nav>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ marginLeft: "auto", marginRight: "20px" }}
          >
            <i className="fa-solid fa-glasses" />
            Student View
          </button>
        </div>
        <hr />
      </div>
      <div className="d-flex" style={{ marginTop: 15 }}>
        <CourseNavigation />
        <div className="container-fluid">
          <div className="row">{course && <h1>Course: {course.name}</h1>}</div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
