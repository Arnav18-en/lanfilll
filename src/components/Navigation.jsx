import React from "react";
import { NavLink } from "react-router-dom";
import './css/nav.css'

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <img src="https://cdn-icons.flaticon.com/png/512/4465/premium/4465669.png?token=exp=1658318592~hmac=541a45d416ff3950fdb202048d457e41" width="60" height="50" class="d-inline-block align-top " alt=""/>
            Landfill Emmisions
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Abstract
                </NavLink>
              </li>

              

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
