import { Link, useParams, useLocation } from "react-router-dom";

function CourseNavigation() {
  const { courseId } = useParams();
  const { pathname } = useLocation();

  const urlIncludes = (text) => {
    const split = text.split(" ");
    if (split.length === 2) {
      return pathname.includes(split[0]) && pathname.includes(split[1]);
    } else {
      return pathname.includes(text);
    }
  };

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  return (
    <ul className="list-group d-none d-xl-block" style={{ width: "180px" }}>
      <li className="list-group-item">
        <p style={{ color: "grey", fontSize: "0.9em", margin: "0px" }}>
          202410_1 Fall Semester
        </p>
      </li>
      {links.map((text, index) => (
        <Link
          className="list-group-item"
          key={index}
          to={`/Kanbas/Courses/${courseId}/${text}`}
        >
          {urlIncludes(text) && (
            <svg
              width="10"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "-10px" }}
            >
              <line x1="5" y1="0" x2="5" y2="100" stroke="black" />
            </svg>
          )}
          <a
            className="account-nav-a"
            style={{ color: urlIncludes(text) ? "black" : "red" }}
          >
            {text}
          </a>
        </Link>
      ))}
    </ul>
  );
}

export default CourseNavigation;
