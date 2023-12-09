import React from "react"
import JobComponent from "../jobspage/JobComponent"

const Applications = () => {
    return (
        <div>
            <br /><br />
            <h1>Applications</h1>
            <div className='row d-flex justify-content-evenly remMargin'>
            <JobComponent />
            <JobComponent />
            <JobComponent />
            <JobComponent />
            </div>
        </div>
    )
}

export default Applications