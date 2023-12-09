import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/homepage/Home';
import LoginRecruiters from './LoginRecruiters';
import SignupRecruiters from './SignupRecruiters';
import LoginJob from './LoginJob';
import SignupJob from './SignupJob';
import AddJobs from './pages/profilepageRecruiter/AddJobs';
import Jobs from './pages/jobspage/Jobs';
import Sidebar from './pages/profilepage/Sidebar';
import SidebarR from './pages/profilepageRecruiter/SidebarR';
import NotFound from './pages/NotFound';
import MyProfile from './pages/profilepage/MyProfile';
import MyProfileR from './pages/profilepageRecruiter/MyProfileR';
import JobsPosted from './pages/profilepageRecruiter/JobsPosted';
import Applications from './pages/profilepage/Applications';    

const Routing = () => {
return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/profile-recruiter' element={<SidebarR/>}>
            <Route path="my-profile-recruiter" element={<MyProfileR />} />
            <Route path="add-jobs" element={<AddJobs />} />
            <Route path="jobs-posted" element={<JobsPosted />} />
        </Route>
        <Route path='/profile-applicant' element={<Sidebar/>}>
            <Route path="my-profile-applicant" element={<MyProfile />} />
            <Route path="applications" element={<Applications />} />
        </Route>
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/login-recruiters' element={<LoginRecruiters />} />
        <Route path='/signup-recruiters' element={<SignupRecruiters />} />
        <Route path='/login-job-seekers' element={<LoginJob />} />
        <Route path='/signup-job-seekers' element={<SignupJob />} />
        {/* Add the catch-all route for 404 error page */}
        <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
)
};

export default Routing;
