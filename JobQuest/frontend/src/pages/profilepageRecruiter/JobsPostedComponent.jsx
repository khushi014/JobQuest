import React from "react";

const JobsPostedComponent = () => {
    return (
    <div className="col-12 col-lg-5 extraPaddingRemove jobposted">
        <table align='center'>
            <tr>
                <td><span>Catagory</span></td>
                <td>Summer Internship</td>
            </tr>
            <tr>
                <td><span>Job Role</span></td>
                <td>SWE</td>
            </tr>
            <tr>
                <td><span>Salary/Stipend</span></td>
                <td>50000</td>
            </tr>
            <tr>
                <td><span>Duration </span></td>
                <td>6 months</td>
            </tr>
            <tr>
                <td><span>Deadline</span> </td>
                <td>12-12-2023</td>
            </tr>
            <tr>
                <td><span>Skills</span> </td>
                <td>skill 1, skill2</td>
            </tr>
        </table>
    </div>
    );
}
export default JobsPostedComponent;