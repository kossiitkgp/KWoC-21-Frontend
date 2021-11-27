import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import {
  MENTOR_REGISTRATION_LINK,
  STUDENT_REGISTRATION_LINK,
} from "../constants";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [mentorLoggedIn, setMentorLoggedIn] = useState(false);
  const [studentLoggedIn, setStudentLoggedIn] = useState(false);
  const [isDown_1, setIsDown_1] = useState(false);
  const [isDown_2, setIsDown_2] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("mentor_jwt")) {
      setMentorLoggedIn(true);
    }

    if (localStorage.getItem("student_jwt")) {
      setStudentLoggedIn(true);
    }
  }, []);

  const navbarNikal = () => {
    setIsActive(!isActive);
  };

  const dropdownNikal = (n) => {
    switch (n) {
      case 1:
        setIsDown_1(!isDown_1);
        break;
      case 2:
        setIsDown_2(!isDown_2);
        break;
    }
  };

  // TODO(@sahil-shubham): make custom auth hooks for user operations
  const logoutMentor = () => {
    localStorage.removeItem("mentor_jwt");
    localStorage.removeItem("mentor_username");
    window.location.pathname = "";
  };

  const logoutStudent = () => {
    localStorage.removeItem("student_jwt");
    localStorage.removeItem("student_username");
    window.location.pathname = "";
  };

  return (
    <>
      <nav className="menu">
        <div className="wrapper">
          <ul>
            {window.location.pathname !== "/" ? (
              <li>
                <a href="/">Home</a>
              </li>
            ) : (
              ""
            )}
            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/projects">Projects</a>
            </li>

            <li>
              <a href="/FAQ">FAQs</a>
            </li>

            <li>
              <a href="/#tline">Timeline</a>
            </li>

            <li>
              <a href="/testimonial">Testimonials</a>
            </li>

            <li
              className={isDown_1 ? "isDown" : ""}
              onClick={() => dropdownNikal(1)}
            >
              Stats
              {isDown_1 ? <Icon.ChevronUp /> : <Icon.ChevronDown />}
              <ul>
                <li>
                  <a href="/stats/students">
                    <div className="icon">
                      <Icon.User />
                    </div>
                    <div>
                      Students <p>See student contributions </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/stats/projects">
                    <div className="icon">
                      <Icon.Tool />
                    </div>
                    <div>
                      Projects
                      <p>See what projects are getting contributed to</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <a
                href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon.Slack />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/kossiitkgp/kwoc-bugs"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bug Report
              </a>
            </li>

            <li
              className={isDown_2 ? "isDown" : ""}
              onClick={() => dropdownNikal(2)}
            >
              {mentorLoggedIn === true || studentLoggedIn === true
                ? "Manage Account"
                : "Sign Up"}
              {isDown_2 ? <Icon.ChevronUp /> : <Icon.ChevronDown />}

              {/* TODO: This can be done better */}
              <ul>
                {mentorLoggedIn !== true ? (
                  <li>
                    <a className="navbar-item" href={MENTOR_REGISTRATION_LINK}>
                      <div className="icon">
                        <Icon.User />
                      </div>
                      <div>
                        Mentor Login <p>Login to see your mentor dashboard</p>
                      </div>
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/mentor">
                        <div className="icon">
                          <Icon.Columns />
                        </div>
                        <div>
                          Mentor Dashboard{" "}
                          <p>See your projects, contibutors and annoucements</p>
                        </div>
                      </a>
                    </li>

                    <li className="button" onClick={logoutMentor}>
                      Logout(Mentor)
                    </li>
                  </>
                )}

                {studentLoggedIn !== true ? (
                  <li>
                    <a className="navbar-item" href={STUDENT_REGISTRATION_LINK}>
                      <div className="icon">
                        <Icon.User />
                      </div>
                      <div>
                        Student Login <p>Login to see your mentor dashboard</p>
                      </div>
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/student">
                        <div className="icon">
                          <Icon.Columns />
                        </div>
                        <div>
                          Student Dashboard{" "}
                          <p>See your projects, mentors and annoucements</p>
                        </div>
                      </a>
                    </li>
                    <li className="button" onClick={logoutStudent}>
                      Logout(Student)
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-navbar">
        <div
          className={`mobile-navbar-icon ${isActive ? "out" : "nope"}`}
          onClick={navbarNikal}
        >
          <span></span>
          <span></span>
        </div>

        <div className={`wrapper ${isActive ? "active" : ""}`}>
          <ul>
            {window.location.pathname !== "/" ? (
              <li>
                <a href="/">Home</a>
              </li>
            ) : (
              ""
            )}

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/projects">Projects</a>
            </li>

            <li>
              <a href="/FAQ">FAQs</a>
            </li>

            <li>
              <a href="/#tline">Timeline</a>
            </li>

            <li>
              <a href="/testimonial">Testimonials</a>
            </li>

            <li>
              <a
                href="https://github.com/kossiitkgp/kwoc-bugs"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bug Report
              </a>
            </li>

            <li
              className={`dropdown-title ${isDown_1 ? "down" : ""}`}
              onClick={() => dropdownNikal(1)}
            >
              Stats
              <ul className="dropdown-content">
                <li>
                  <a href="/stats/students">Students</a>
                </li>
                <li>
                  <a href="/stats/projects">Projects</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                target="_blank"
                rel="noreferrer noopener"
              >
                Join our Slack <Icon.Slack />
              </a>
            </li>

            <li
              className={`dropdown-title ${isDown_2 ? "down" : ""}`}
              onClick={() => dropdownNikal(2)}
            >
              {mentorLoggedIn === true || studentLoggedIn === true
                ? "Manage Account"
                : "Login"}

              <ul className="dropdown-content">
                {mentorLoggedIn !== true ? (
                  <li>
                    <a className="navbar-item" href={MENTOR_REGISTRATION_LINK}>
                      Mentor Login
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/mentor">
                        Mentor Dashboard
                      </a>
                    </li>

                    <li onClick={logoutMentor}>Logout(Mentor)</li>
                  </>
                )}

                {studentLoggedIn !== true ? (
                  <li>
                    <a
                      className="navbar-item"
                      id="mentee-login"
                      href={STUDENT_REGISTRATION_LINK}
                    >
                      Student Login
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <a className="navbar-item" href="/dashboard/student">
                        Student Dashboard
                      </a>
                    </li>
                    <li onClick={logoutStudent}>Logout(Student)</li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
