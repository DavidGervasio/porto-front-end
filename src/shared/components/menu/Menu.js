import React from "react";
import "./Menu.css";

export default function Submenu({
  pathName1,
  name1,
  pathName2,
  name2,
  pathName3,
  name3,
  history,
}) {
  function goToPathName1(e) {
    e.preventDefault();
    history.push({
      pathname: pathName1,
      state: {},
    });
  }

  function goToPathName2(e) {
    e.preventDefault();
    history.push({
      pathname: pathName2,
      state: {},
    });
  }

  function goToPathName3(e) {
    e.preventDefault();
    history.push({
      pathname: pathName3,
      state: {},
    });
  }

  return (
    <nav className="menu-content" id="menu">
      <a href="#" onClick={goToPathName1}>
        {name1}
      </a>
      <a href="#" onClick={goToPathName2}>
        {name2}
      </a>
      <a href="#" onClick={goToPathName3}>
        {name3}
      </a>
    </nav>
  );
}
