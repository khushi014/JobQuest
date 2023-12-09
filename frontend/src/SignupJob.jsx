import React from 'react'

const SignupJob = () => {
    return (
        <div>
            <div className="recruitersInfo" align="center">
        <h4 className="my-5">Hello Job Seekers!! Sign-Up here..</h4>
        <h5 className="mb-5">Fill up the following details..</h5>
        <table>
            <tr>
                <td>First Name</td>
                <td><input type="text" placeholder="Enter First Name" /></td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td><input type="text" placeholder="Enter Last Name" /></td>
            </tr>
            <tr>
                <td>Profile Image</td>
                <td><input type="file" className="nocss" /></td>
            </tr>
            <tr>
                <td>College</td>
                <td>
                    <select name="colleges" id="college">
                        <option value="c1">college 1</option>
                        <option value="c2">college 2</option>
                        <option value="c3">college 3</option>
                        <option value="c4">college 4</option>
                        <option value="c5">college 5</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>E-mail</td>
                <td><input type="email" placeholder="Enter your Email" /></td>
            </tr>
            <tr>
                <td>Contact</td>
                <td><input type="number" placeholder="Enter Contact Number" /></td>
            </tr>
            <tr>
                <td>Skills</td>
                <td>
                    <select name="skills" id="skill" multiple>
                        <option value="c1">company 1</option>
                        <option value="c2">company 2</option>
                        <option value="c3">company 3</option>
                        <option value="c4">company 4</option>
                        <option value="c5">company 5</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Resume</td>
                <td><input type="file" className="nocss" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" placeholder="Enter strong password" /></td>
            </tr>
            <tr>
                <td>Confirm Password</td>
                <td><input type="password" placeholder="re-enter your password" /></td>
            </tr>
        </table>
        <br />
        <button type="submit">Create Profile</button>
    </div>
        </div>
    )
}

export default SignupJob
