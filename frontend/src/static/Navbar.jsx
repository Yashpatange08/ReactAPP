import React from 'react'


function Navbar(props) {
  const {
    title = 'name',
    Dropdowntext = '',
    option1 = 'Option 1',
    option2 = 'Option 2',
 
  } = props;
  let HeadingStyle ={
      color:"red",
      backgroundColor:"darkgreen"
      ,border:'1px solid bold',

    };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" style={HeadingStyle} href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {Dropdowntext}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">{option1}</a></li>
            <li><a className="dropdown-item" href="/">{option2}</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}
export default Navbar;