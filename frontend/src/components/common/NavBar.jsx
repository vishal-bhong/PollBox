import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return (
         <div style={{marginBottom : "8%"}}>
            <nav class="navbar fixed-top navbar-light bg-light rounded-pill">
              <div class="container-fluid">
                 <div role='button' className="d-flex text-dark text-decoration-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                    <i className="bi bi-list h3 ms-3" ></i> &nbsp;
                 </div>

                <Link to="/dashboard" class="navbar-brand" id='brandname'>Poll Box</Link>
                <div className="d-flex align-items-center">
                  <div className="me-5 position-relative">
                    <span className="badge rounded-pill bg-primary position-absolute top-0 start-100 translate-middle">2</span>
                    <Link className="nav-link fw-semibold" href="notifications">Notifications &nbsp;</Link>
                  </div>
                  <button className="btn btn-sm btn-outline-danger" type="submit">Logout</button>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default NavBar;