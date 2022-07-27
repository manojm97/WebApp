import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
//import { HiMoon } from "react-icons/hi";
import { IoBulb } from "react-icons/io5";
import { IoBulbSharp } from "react-icons/io5";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "47px",
    width: "47px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#f6fff8" : "#022b3a",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `1px -5px 10px 5px ${
        props.theme.name === "light" ? "#ffc800" : "#eaf4f4"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <IoBulb
        strokeWidth={1}
        size={25}
        color={props.theme.name === "light" ? "#F9D784" : "#eaf4f4"}
      />
    ) : (
      <IoBulbSharp
        strokeWidth={1}
        size={25}
        color={props.theme.name === "light" ? "#ffc800" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#2ab0ee",
                  transform: "scale(1.3)",
                  transition: "all 0.3s ease-in-out 0.2s",
                }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#eb6559",
                  transform: "scale(1.3)",
                  transition: "all 0.3s ease-in-out 0.2s",
                }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#f7b908",
                  transform: "scale(1.3)",
                  transition: "all 0.3s ease-in-out 0.2s",
                }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projects"
                tag={Link}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#e44160",
                  transform: "scale(1.3)",
                  transition: "all 0.3s ease-in-out 0.2s",
                }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#47a148",
                  transform: "scale(1.2)",
                  transition: "all 0.3s ease-in-out 0.2s",
                }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Contact and Resume
              </NavLink>
            </li>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
        {/* <div style={{ bottom:"46px",right: "75px", position: "absolute"}}>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
        </div> */}
      </div>
    </Fade>
  );
}

export default Header;
