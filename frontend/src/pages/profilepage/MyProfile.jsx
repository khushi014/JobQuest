import React from 'react'
import profile from '../../images/p1.jpg'

const MyProfile = () => {
  const handleDownload = () => {
    // Replace 'path-to-your-file/file.txt' with the actual path to your file
    const filePath = './Profile.jsx';

    // Create a link element
    const link = document.createElement('a');

    // Set the href and download attributes
    link.href = filePath;
    link.download = 'downloaded-file.txt'; // Set the default name for the downloaded file

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
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
            <td><span>College</span></td>
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
        <tr>
            <td><span>Skills</span></td>
            <td>abc</td>
        </tr>
        <tr>
            <td><span>Resume</span></td>
            <td><button onClick={handleDownload}>Download File</button></td>
        </tr>
      </table>
    </div>
  )
}

export default MyProfile
