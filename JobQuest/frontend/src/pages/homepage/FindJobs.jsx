import React from 'react'
import FindJobsComponent from './FindJobsComponent'

const FindJobs = () => {
    const jobTexts = ["Summer Internship", "Winter Internship", "Part-Time Jobs", "Full-Time Jobs"];
    return (
        <div>
            <div className="findJobs" align="center">
                <center><h4>Find Jobs..</h4></center>
                <div className="row">
                {jobTexts.map((text, index) => (
                <FindJobsComponent key={index} jobTexts={text} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default FindJobs
