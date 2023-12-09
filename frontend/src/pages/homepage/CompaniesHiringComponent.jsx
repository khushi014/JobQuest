import React from 'react';

const CompaniesHiringComponent = (props) => {
    return (
    <div className="col-12 col-lg-3 col-md-6 col col-sm-12 remPadding">
        <div className="compImg">
            <img src={props.companyImage} alt="" /><br />
            <span>{props.companyName}</span>
        </div>
    </div>
    );
};

export default CompaniesHiringComponent;
