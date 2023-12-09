import React from 'react'
import CompaniesHiringComponent from './CompaniesHiringComponent'
import { useNavigate } from 'react-router-dom'
import recruiter1 from '../../images/p1.jpg'
import recruiter2 from '../../images/p2.jpg'
import recruiter3 from '../../images/p3.jpg'
import recruiter4 from '../../images/p4.jpg'

const RecruitersHiring = () => {
    const recruitersData = [
        { image: recruiter1, name: 'recruiter 1' },
        { image: recruiter2, name: 'recruiter 2' },
        { image: recruiter3, name: 'recruiter 3' },
        { image: recruiter4, name: 'recruiter 4' },
    ];
    const navigate = useNavigate();
    const GoToJobs = () => {
        // Programmatically navigate to another component
        navigate('/jobs');
    };
    return (
    <div class="compHiring" align="center">
        <center><h4>Recruiters hiring now..</h4></center>
        <div class="row">
        {recruitersData.map((recruiter, index) => (
            <CompaniesHiringComponent
                key={index}
                companyImage={recruiter.image}
                companyName={recruiter.name} />
            ))}
        </div>
        <button onClick={GoToJobs}>View More</button>
        <br /><br />
    </div>
    )
}

export default RecruitersHiring
