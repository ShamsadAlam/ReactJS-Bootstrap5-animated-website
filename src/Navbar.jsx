import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-transparent">
              <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">
                  NOBLE.
                </NavLink>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className={(navData) =>
                          location.pathname === "/"
                            ? "active-style nav-link"
                            : "nav-link"
                        }
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={(navData) =>
                          navData.isActive
                            ? "active-style nav-link"
                            : "nav-link"
                        }
                        to="/services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={(navData) =>
                          navData.isActive
                            ? "active-style nav-link"
                            : "nav-link"
                        }
                        to="/about"
                      >
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={(navData) =>
                          navData.isActive
                            ? "active-style nav-link"
                            : "nav-link"
                        }
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                  <form className="d-flex" role="search"></form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
