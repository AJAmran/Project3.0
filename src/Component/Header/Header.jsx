import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow">
      <nav className="navbar navbar-expand-lg bg-body-tertiary container">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none">
            <a className="navbar-brand" href="#">
              <span className="fs-3 fw-bold text-info">Job</span>
              <span className="fs-3 fw-bold">Sizzle</span>
            </a>
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div className="d-flex flex-column flex-md-row align-items-center me-3 gap-4">
              <div className="d-flex flex-column flex-md-row gap-3 fs-5">
                <Link className="text-decoration-none text-secondary" to="/">
                  Home
                </Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/statistics"
                >
                  Statistics
                </Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/apjob"
                >
                  Applied Jobs
                </Link>
                <Link
                  className="text-decoration-none text-secondary"
                  to="/blog"
                >
                  blog
                </Link>
              </div>
              <Link to="/">
                <button className="btn btn-info text-white fs-5 fw-semibold">
                  Start Applying
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <footer class="footer fixed-bottom shadow mt-5 bg-white">
        <div class="container text-center p-3">
          <span class="text-muted">All right Reserv © JobSizzle</span>
        </div>
      </footer>
    </div>
  );
};

export default Header;
