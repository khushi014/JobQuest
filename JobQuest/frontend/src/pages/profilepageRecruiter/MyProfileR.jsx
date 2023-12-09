import React from 'react'
import profile from '../../images/p1.jpg'

const MyProfileR = () => {
  
  return (
    <div className="col-12 col-lg-10 extraPaddingRemove myprofile">
      <h2>My Profile</h2>
      <table align='center'>
        <tr>
          <td colSpan={2}><img src={profile} style={{height: '150px', width:'150px'}} /><br/></td>
        </tr>
        <tr>
            <td><span>First Name</span></td>
            <td>abc</td>
        </tr>
        <tr>
            <td><span>Last Name</span></td>
            <td>abc</td>
        </tr>
        <tr>
            <td><span>Company</span></td>
            <td>abc</td>
        </tr>
        <tr>
            <td><span>E-mail</span></td>
            <td>abc</td>
        </tr>
        <tr>
            <td><span>Contact</span></td>
            <td>abc</td>
        </tr>
      </table>
    </div>
  )
}

export default MyProfileR
