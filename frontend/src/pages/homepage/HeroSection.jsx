import React from 'react'
import backgroundImg from '../../images/heroImage.jpg'


const HeroSection = () => {
    return (
        <div className="herosection">
            <img src={backgroundImg} alt="" />
            <div className="row">
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 remMargin">
                    <span>Unlock Opportunities, <br /> Unleash Potential.</span>
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 remPadding remMargin">
                    <input type="text" placeholder="Search Job" /><br />
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
