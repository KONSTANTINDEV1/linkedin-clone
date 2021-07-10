import { Avatar } from "@material-ui/core";
import "./Sidebar.scss";

function Sidebar() {
  const recentSkills = (skill) => (
    <div className="sidebar__skills">
      <span className="sidebar__hash">#</span>
      <p>{skill}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D16AQGzUAltU65ufQ/profile-displaybackgroundimage-shrink_350_1400/0/1612440065385?e=1631145600&v=beta&t=cUW4xJaQkjQaL_tClhvvsLEgI6ivuHnflYmn_typc2E"
          alt="Cover Image"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Konstantin Taylor</h2>
        <h4>Konstantintaylor@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">4,000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2,340</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentSkills("reactjs")}
        {recentSkills("es6")}
        {recentSkills("redux")}
        {recentSkills("styledcomponents")}
      </div>
    </div>
  );
}

export default Sidebar;
