import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;

  return (
    <div className="d-flex flex-column" style={{ width: "100%" }}>
      <h1>Dashboard</h1>
      <hr />
      <div className="container-fluid">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="row">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CourseCard = ({ course }) => {
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
            {course.number} {course._id.substring(2)} {course.name}
          </Link>
          <h5 className="card-text" style={{ color: "grey" }}>
            {course.number}.{course._id.substring(2)}
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
