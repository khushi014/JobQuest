import React from 'react'
import CompaniesHiringComponent from './CompaniesHiringComponent'
import { useNavigate } from 'react-router-dom'

import company1 from '../../images/c2.jpg'
import company2 from '../../images/c3.jpg'
import company3 from '../../images/c4.jpg'
import company4 from '../../images/c5.jpg'

const CompaniesHiring = () => {
    const companyData = [
        { image: company1, name: 'Company 1' },
        { image: company2, name: 'Company 2' },
        { image: company3, name: 'Company 3' },
        { image: company4, name: 'Company 4' },
    ];
    const navigate = useNavigate();
    const GoToJobs = () => {
        // Programmatically navigate to another component
        navigate('/jobs');
    };
    return (
        <div className="compHiring" align="center">
            <center><h4>Companies hiring now..</h4></center>
            <div className="row">
            {companyData.map((company, index) => (
            <CompaniesHiringComponent
                key={index}
                companyImage={company.image}
                companyName={company.name} />
            ))}
            </div>
        <button onClick={GoToJobs}>View More</button>
        <br /><br />
    </div>
    )
}

export default CompaniesHiring
