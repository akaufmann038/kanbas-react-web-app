import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
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
                Home
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
          <div className="row">
            <h1>Course: {course.name}</h1>
          </div>
          <div className="row">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<h1>Home</h1>} />
              <Route path="Modules" element={<h1>Modules</h1>} />
              <Route path="Assignments" element={<h1>Assignments</h1>} />
              <Route
                path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;

// <div>
//   <h1>Course: {course.name}</h1>
//   <CourseNavigation />
//   <div>
//     <div
//       className="overflow-y-scroll position-fixed bottom-0 end-0"
//       style={{
//         left: "320px",
//         top: "50px",
//       }}
//     >
//       <Routes>
//         <Route path="/" element={<Navigate to="Home" />} />
//         <Route path="Home" element={<h1>Home</h1>} />
//         <Route path="Modules" element={<h1>Modules</h1>} />
//         <Route path="Assignments" element={<h1>Assignments</h1>} />
//         <Route
//           path="Assignments/:assignmentId"
//           element={<h1>Assignment Editor</h1>}
//         />
//         <Route path="Grades" element={<h1>Grades</h1>} />
//       </Routes>
//     </div>
//   </div>
// </div>
