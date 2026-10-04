import React from "react";

function Navbar(props) {
  const {
    title = "name",
    Dropdowntext = "",
    option1 = "Option 1",
    option2 = "Option 2",
  } = props;
  let HeadingStyle = {
    border: "1px solid bold",
  };
  let DropdownStyle = {
    border: "1px solid bold",
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand rounded-top" style={HeadingStyle} href="/">
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={DropdownStyle}
                >
                  {Dropdowntext}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      {option1}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      {option2}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode ==="light"?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
