import React from 'react';
import './style.css';

const Navbar = () =>
{
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="#" className="navbar-brand text text-light">
          <h3>Chris Mikstas</h3>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text text-light" href="../Bootstap-Portfolio/assets/resume/Resume - Chris Mikstas.pdf">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text text-light" href="../Bootstap-Portfolio/portfolio.html">Return to Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

