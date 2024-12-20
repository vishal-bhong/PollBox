import React from 'react'
import { Link } from 'react-router-dom'

import './SideDrawer.css'

const SideDrawer = () => {
    return(
        <>
        <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvas" data-bs-keyboard="true">
           <div className="offcanvas-header d-flex justify-content-end">
             <div type="button" className="text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close">
                <div className="fs-3 bg-dark text-white">
                    <i class ="bi bi-chevron-double-left"></i>
                </div>
             </div>                
           </div>

            <hr className="text-white fw-bold" />

           <div className="offcanvas-body px-0">
               <ul className="nav nav-pills flex-column mb-sm-auto mb-0" id="menu">

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                      <Link to="/dashboard" className="nav-link text-truncate"  id="nav-item-name">
                        <i class="bi bi-house-door h4"></i><span className="ms-3 d-none d-sm-inline h5">Home</span>
                      </Link>
                   </li>

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                      <Link to="/dashboard" className="nav-link text-truncate"  id="nav-item-name">
                        <i class="bi bi-bell h4"></i><span className="ms-3 d-none d-sm-inline h5">Notifications</span>
                      </Link>
                   </li>

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                      <Link to="/createpoll" className="nav-link text-truncate"  id="nav-item-name">
                        <i class="bi bi-plus-square h4"></i><span className="ms-3 d-none d-sm-inline h5">Create Poll</span>
                      </Link>
                   </li>
                   
                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to="/myPolls" className="nav-link text-truncate"  id="nav-item-name">
                        <i class="bi bi-send-arrow-down h4"></i><span className="ms-3 d-none d-sm-inline h5">My Poll</span>
                     </Link>
                   </li>   

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to="/allResults" className="nav-link text-truncate"  id="nav-item-name">
                        <i class="bi bi-mailbox h4"></i><span className="ms-3 d-none d-sm-inline h5">All Poll Results</span>
                     </Link>
                   </li>  

               </ul>
           </div>
           
        </div>
     </>
    )
}

export default SideDrawer