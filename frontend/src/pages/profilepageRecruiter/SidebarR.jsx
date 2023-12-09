import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SidebarR = () => {
  return (
    <div className="container-fluid">
      <div className="row extraMarginRemove">
        <div className="col-12 col-lg-2">
          <div className="nav flex-column sidebar">
            <li className="sidebar">
              <NavLink to="/profile-recruiter/my-profile-recruiter" className="nav-link text-dark" activeClassName="active">My Profile</NavLink>
            </li>
            <hr />
            <li className="sidebar">
              <NavLink to="/profile-recruiter/add-jobs" className="nav-link text-dark" activeClassName="active">Add Jobs</NavLink>
            </li>
            <hr />
            <li className="sidebar">
              <NavLink to="/profile-recruiter/jobs-posted" className="nav-link text-dark" activeClassName="active">Jobs Posted</NavLink>
            </li>
          </div>
          {/* sidebar */}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarR;
