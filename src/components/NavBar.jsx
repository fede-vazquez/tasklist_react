import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  function hideDropdownList() {
    const collapseNavBar = document.getElementById("taskListNavbarDropdown");
    collapseNavBar.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-dark bg-2 navbar-expand-sm">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#taskListNavbarDropdown"
          aria-controls="taskListNavbarDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="taskListNavbarDropdown">
          <ul className="navbar-nav">
            <li
              className="nav-item"
              onClick={() => {
                hideDropdownList();
              }}
            >
              <Link to={"/allTasks"} className="dropdown-item">
                Todas las tareas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
