import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
      <div
        className="d-flex align-items-center"
        style={{ alignSelf: "flex-end", marginBottom: "20px" }}
      >
        <i
          className="fa fa-check-circle float-end"
          aria-hidden="true"
          style={{ color: "green" }}
        ></i>
        <a
          style={{
            color: "green",
            fontWeight: "bold",
            marginRight: "20px",
            marginLeft: "5px",
          }}
        >
          Published
        </a>
        <button type="button" className="btn btn-secondary">
          <i
            className="fa-solid fa-ellipsis-vertical float-end"
            style={{ height: "20px", marginTop: "3px" }}
          ></i>
        </button>
      </div>
      <hr />
      <div>
        <a style={{ marginTop: "10px" }}>Assignment Name</a>
        <input className="form-control" type="text" value={assignment.title} />
        <textarea
          rows="5"
          cols="50"
          style={{ marginTop: "20px" }}
          className="form-control"
        >
          This assignment describes how to install the development
          environment...
        </textarea>
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <label className="col-2 text-end">Points</label>
            <input
              placeholder="100"
              className="col-auto form-control"
              style={{ width: "400px" }}
            />
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <label className="col-2 text-end">Assignment Group</label>
            <select className="form-control" style={{ width: "400px" }}>
              <option>ASSIGNMENTS</option>
            </select>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <label className="col-2 text-end">Display Grade as</label>
            <select className="form-control" style={{ width: "400px" }}>
              <option>Percentage</option>
            </select>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <div
              className="d-flex col-2 justify-content-center"
              style={{ flexGrow: 1, marginLeft: "180px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label
                className="form-check-label"
                htmlFor="defaultCheck1"
                style={{ width: "400px", marginLeft: "10px" }}
              >
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <label className="col-2 text-end">Submission Type</label>
            <div
              className="form-control col-10 d-flex flex-column"
              style={{ width: "400px" }}
            >
              <select
                className="form-control"
                style={{ width: "250px", marginTop: "10px" }}
              >
                <option>Percentage</option>
              </select>
              <a
                style={{
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                Online Entry Options
              </a>
              <div className="form-check" style={{ marginBottom: "10px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Text Entry
                </label>
              </div>
              <div className="form-check" style={{ marginBottom: "10px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked1"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked1">
                  Website URL
                </label>
              </div>
              <div className="form-check" style={{ marginBottom: "10px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked2"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked2">
                  Media Recordings
                </label>
              </div>
              <div className="form-check" style={{ marginBottom: "10px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked3"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked3">
                  Student Annotation
                </label>
              </div>
              <div className="form-check" style={{ marginBottom: "10px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked4"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked4">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <label className="col-2 text-end">Assign</label>
            <div
              className="form-control col-10 d-flex flex-column"
              style={{ width: "400px" }}
            >
              <div>
                <a
                  style={{
                    fontWeight: "bold",
                    marginTop: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Assign To
                </a>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  placeholder="Everyone"
                />
                <a
                  style={{
                    fontWeight: "bold",
                    marginTop: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Due
                </a>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  placeholder="Sep 18, 2023, 11:59 PM"
                />
                <div className="d-flex">
                  <div className="d-flex flex-column">
                    <a
                      style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        marginBottom: "5px",
                      }}
                    >
                      Available from
                    </a>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                      placeholder="Sep 6, 2023, 12:00 PM"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <a
                      style={{
                        fontWeight: "bold",
                        marginTop: "15px",
                        marginBottom: "5px",
                      }}
                    >
                      Until
                    </a>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: "10px" }}
              >
                <i className="fa-solid fa-plus"></i>
                Add
              </button>
            </div>
          </div>
          <hr />
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div className="form-check" style={{ marginTop: "10px" }}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Notify users that this content has changed
              </label>
            </div>
            <div className="d-flex" style={{ gap: "5px" }}>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger"
              >
                Cancel
              </Link>
              <button onClick={handleSave} className="btn btn-success me-2">
                Save
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;

// <div>
// <h2>Assignment Name</h2>
// <input value={assignment.title} className="form-control mb-2" />
// <Link
//   to={`/Kanbas/Courses/${courseId}/Assignments`}
//   className="btn btn-danger"
// >
//   Cancel
// </Link>
// <button onClick={handleSave} className="btn btn-success me-2">
//   Save
// </button>
// </div>
