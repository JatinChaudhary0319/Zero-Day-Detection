import logo_darkBg from "../assets/logo.webp";
import left_arrow from "../assets/left-collapse.png";
import right_arrow from "../assets/right-collapse.png";
import info from "../assets/info.png";
import dashboard from "../assets/dashboard.png";
import siteInfo from "../assets/site-information.png";
import logs from "../assets/log.png";
import setings from "../assets/settings.png";
import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="main">
      <div className="header1">
        <div className="header2">
          <img src={logo_darkBg} alt="logo" className="logo object-contain"/>
          <div className="heading">ZDD</div>
        </div>
        <button className="left_arrow_btn">
          <img src={left_arrow} alt="arrow" className="left_arrow_img" />
        </button>
      </div>
      <div className="search">
        <input type="search" placeholder="Search..." className="search_input" />
      </div>

      <div className="about">
        <button className="about_btn">
          <img src={info} alt="abuot" className="about_img" />
          <div className="about_div">About ZDD</div>
        </button>
      </div>

      <div className="hr" />
      <div className="coming3">
        <div className="coming_div">
          <img src={dashboard} alt="dashboard" className="coming_img" />
          <div className="coming_div2">
            <NavLink to="/home">Dashboard</NavLink>
          </div>
        </div>
        <div className="coming_div">
          <img src={siteInfo} alt="site info" className="coming_img" />
          <div className="coming_div2">
            <NavLink to="/home/site-info">Site Information</NavLink>
          </div>
        </div>
        <div className="coming_div">
          <img src={logs} alt="logs" className="coming_img" />
          <div className="coming_div2">
            <NavLink to="/home/logs">Logs</NavLink>
          </div>
        </div>
        <div className="coming_div">
          <img src={setings} alt="settings" className="coming_img" />
          <div className="coming_div2">
            <NavLink to="">Settings</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
