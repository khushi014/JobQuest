import React from "react"
import JobsPostedComponent from "./JobsPostedComponent"
const JobsPosted = () => {
    return (
        <div>
            <h1>Jobs Posted</h1>
            <div className="row">
            <JobsPostedComponent/>
            <JobsPostedComponent/>
            <JobsPostedComponent/>
            </div>
        </div>
    )
}
export default JobsPosted