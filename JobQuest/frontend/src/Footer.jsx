import React from 'react'
import { Link } from 'react-router-dom'
import facebook from './images/facebook.svg'
import linkdin from './images/linkedin.svg'
import instagram from './images/instagram.svg'
import gmail from './images/gmail.svg'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 my-auto">
            <Link class="navbar-brand" href="#">JobQuest</Link><br />
            <small>connect with us</small><br /><br />
            <img src={facebook} alt="facebook" />
            <img src={linkdin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
            <img src={gmail} alt="gmail" />
          </div>
          <div class="col-12 col-lg-4 col-md-12 col-sm-12 mx-auto">
            <label>Job Seekers</label>
            <ul>
                <li>Register</li>
                <li>Login</li>
                <li>Search Job</li>
            </ul>
            <label>Recruiters</label>
            <ul>
                <li>Register</li>
                <li>Login</li>
                <li>Create Job</li>
            </ul>
        </div>
        <div class="col-12 col-lg-4 col-md-12 col-sm-12 mx-auto">
            <span>Privacy Policy</span><br />
            <span>Terms & Conditions</span><br />
            <span>Trust & Safety</span><br />
            <span>Help Center</span><br />
            <span>Summons/Notices</span><br />
            <span>Grievances</span><br />
            <span>Report issue</span><br />
        </div>
        </div>
      </footer>
      <div align="center" class="copyRights py-1">
        <span>@ 2023 JobQuest | All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer
