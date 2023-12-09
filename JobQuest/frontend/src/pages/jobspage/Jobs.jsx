import React from 'react'
import JobComponent from './JobComponent'

const Jobs = () => {
    return (
        <div>
            <h1 className='mt-5'>Jobs</h1>
            <form className="searchJob d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn " type="submit">Search</button>
            </form>
            <div className='row d-flex justify-content-evenly remMargin'>
            <JobComponent />
            <JobComponent />
            <JobComponent />
            <JobComponent />
            </div>
        </div>
    )
}

export default Jobs
