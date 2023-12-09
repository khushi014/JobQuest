import React from "react"
import { useNavigate } from 'react-router-dom'

const FindJobsComponent = ( props ) => {
    const navigate = useNavigate();
    const handleClick = () => {
        // Programmatically navigate to another component
        navigate('/jobs');
    };
    return(
        <div className="col-12 col-lg-3 col-md-6 col col-sm-12 remPadding">
            <div>
                <button className="jobBox py-auto" onClick={handleClick}>{props.jobTexts}</button>
            </div>
        </div>
    )
}

export default FindJobsComponent