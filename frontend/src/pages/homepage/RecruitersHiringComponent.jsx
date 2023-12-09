import React from "react"

const RecruitersHiringComponent = (props) => {
    return (
        <div class="col-12 col-lg-3 col-md-6 col col-sm-12 remPadding">
            <div class="compImg">
                <img src={props.recruiterImage} alt="" /><br />
                <span>{props.recruiterName}</span>
            </div>
        </div>
    );
};

export default CompaniesHiringComponent;
