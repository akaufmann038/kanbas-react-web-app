import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
  const { pathName } = useLocation();

  console.log(pathName);
  const links = [
    { iconClass: "fa-solid fa-n fa-2x", color: "red", href: null, text: null },
    {
      iconClass: "fa-regular fa-user fa-2x",
      color: "grey",
      href: "/kanbas/profile/index.html",
      text: "Account",
    },
    {
      iconClass: "fa-solid fa-gauge fa-2x",
      color: "red",
      href: "./dashboard.html",
      text: "Dashboard",
    },
    {
      iconClass: "fa-solid fa-book fa-2x",
      color: "red",
      href: "./courses.html",
      text: "Courses",
    },
    {
      iconClass: "fa-regular fa-calendar fa-2x",
      color: "red",
      href: "#",
      text: "Calendar",
    },
    {
      iconClass: "fa-solid fa-inbox fa-2x",
      color: "red",
      href: "#",
      text: "Inbox",
    },
    {
      iconClass: "fa-regular fa-clock fa-2x",
      color: "red",
      href: "#",
      text: "History",
    },
    {
      iconClass: "fa-brands fa-youtube fa-2x",
      color: "red",
      href: "#",
      text: "Studio",
    },
    {
      iconClass: "fa-solid fa-right-to-bracket fa-2x",
      color: "red",
      href: "#",
      text: "Commons",
    },
    {
      iconClass: "fa-solid fa-question fa-2x",
      color: "red",
      href: "#",
      text: "Help",
    },
  ];

  return (
    <ul className="list-group" style={{ width: "100px" }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.text}`}
          className="list-group-item kanbas-nav d-flex flex-column justify-content-center align-items-center"
        >
          <i className={link.iconClass} style={{ color: link.color }}></i>
          {link.text && (
            <span className="kanbas-nav-a" href={link.href}>
              {link.text}
            </span>
          )}
        </Link>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
