import React from 'react'

const AddJobs = () => {
    return (
        <div className="recruitersInfo" align="center">
        <h4 className="my-5">Hello Recruiters!! Add Job here..</h4>
        <h5 className="mb-5">Fill up the following details..</h5>
        <table>
            <tr>
                <td>Catagory</td>
                <td><input type="text" placeholder="Enter Catagory" /></td>
            </tr>
            <tr>
                <td>Job Role</td>
                <td><input type="text" placeholder="Enter Job Role" /></td>
            </tr>
            <tr>
                <td>Salary/Stipend</td>
                <td><input type="number" placeholder="Enter Salary/Stipend" /></td>
            </tr>
            <tr>
                <td>Duration </td>
                <td><input type="text" placeholder="Enter Duration" /></td>
            </tr>
            <tr>
                <td>Deadline </td>
                <td><input type="date" placeholder="Enter Date" /></td>
            </tr>
            <tr>
                <td>Skills </td>
                <td>
                    <select name="skills" id="skill" multiple>
                        <option value="c1">skill 1</option>
                        <option value="c2">skill 2</option>
                        <option value="c3">skill 3</option>
                        <option value="c4">skill 4</option>
                        <option value="c5">skill 5</option>
                    </select>
                </td>
            </tr>
        </table>
        <br />
        <button type="submit">Create Profile</button>
    </div>
    )
}

export default AddJobs
