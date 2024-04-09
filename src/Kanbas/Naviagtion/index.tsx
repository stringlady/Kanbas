import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaBars, FaArrowRight, FaQuestion, FaCheck } from "react-icons/fa";
import n from "../../Kanbas/Dasboard/images/n.webp"
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaEnvelope className="fs-2" /> },
    { label: "History",  icon: <FaBars className="fs-2" /> },
    { label: "Studio",  icon: <FaCheck className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowRight className="fs-2" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation" id="naver">
        <li><a href="http://northeastern.edu"><img src={n} className="card-img-top" style={{height: "50px"}}/></a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;