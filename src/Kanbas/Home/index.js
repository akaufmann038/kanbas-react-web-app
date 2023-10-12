import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="row">
      <div className="d-flex flex-column col-8" style={{ flexGrow: 1 }}>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div
        className="col-4 d-none d-xxl-block"
        style={{ padding: "0", width: "250px", marginLeft: "40px" }}
      >
        <p>Course Status</p>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: "120px" }}
          >
            Unpublish
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={{ width: "120px" }}
          >
            Published
          </button>
        </div>
        <ul className="list-group">
          {[
            "Import Existing Content",
            "Import from Commons",
            "Choose Home Page",
            "View Course Stream",
            "New Announcement",
            "New Analytics",
            "View Course Notifications",
          ].map((item) => (
            <li
              key={item}
              className="list-group-item list-group-item-courses list-group-item-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold" }}>To Do</p>
        <hr />
        <div className="d-flex justify-content-between">
          <i
            className="fa-solid fa-1"
            style={{ marginTop: "4px", marginLeft: "20px" }}
          ></i>
          <div className="d-flex flex-column">
            <a
              href="#"
              style={{
                marginBottom: "0px",
                color: "red",
                textDecoration: "none",
              }}
            >
              Grade A1 - ENV + HTML
            </a>
            <p style={{ fontSize: "0.7em" }}>100 points * Sep 18 at 11:59pm</p>
          </div>
          <i
            className="fa-solid fa-x fa-xs"
            style={{ marginTop: "8px", marginRight: "3px" }}
          ></i>
        </div>
        <div className="d-flex justify-content-between">
          <p style={{ fontWeight: "bold" }}>Coming Up</p>
          <div className="d-flex">
            <i
              className="fa-regular fa-calendar"
              style={{ marginRight: "5px", marginTop: "4px" }}
            ></i>
            <a href="#" style={{ color: "red", textDecoration: "none" }}>
              View Calendar
            </a>
          </div>
        </div>
        <hr />
        {[1, 2, 3].map((item) => (
          <div key={item} className="d-flex" style={{ marginBottom: "8px" }}>
            <i
              className="fa-regular fa-calendar"
              style={{ marginRight: "5px", marginTop: "4px" }}
            ></i>
            <div className="d-flex flex-column" style={{ marginLeft: "5px" }}>
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                Lecture
              </a>
              <p style={{ fontSize: "0.7em", color: "grey", margin: "0" }}>
                CS4550.12611.202410
              </p>
              <p style={{ fontSize: "0.7em", color: "darkgrey", margin: "0" }}>
                Sep 11 at 11:45am
              </p>
            </div>
          </div>
        ))}
        <a
          href="#"
          style={{ color: "red", textDecoration: "none", fontSize: "0.7em" }}
        >
          12 more in the next week...
        </a>
      </div>
    </div>
  );
}
export default Home;
