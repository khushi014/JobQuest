import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row extraMarginRemove">
        <div className="col-12 col-lg-2">
          <div className="nav flex-column sidebar">
            <li className="sidebar">
              <NavLink to="/profile-applicant/my-profile-applicant" className="nav-link text-dark" activeClassName="active">My Profile</NavLink>
            </li>
            <hr />
            <li className="sidebar">
              <NavLink to="/profile-applicant/applications" className="nav-link text-dark" activeClassName="active">Past Applications</NavLink>
            </li>
          </div>
          {/* sidebar */}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
