import React from "react"
import udgama from "../images/educationlogo.png"

const data = [
    {
        logo: udgama,
        HigherEducation: "BE Computer(First Class)",
        CollegeName: "SSJCET Asangaon.",
        HSC: "HSC Science(First Class)",
        SSC: "SSC(First Class)",
        location: " Mumbai, Maharashtra, India"
    }
];

export default function Education(){
    return (
        <div className="education">
            <p className="title">Education</p>
            <hr />
            {
                data.map((d, i) => (
                    <div key={i} className="company">
                        <div className="c-image">
                            <img src={d.logo} alt="company" />
                        </div>
                        <div className="info">
                            <p className="c-title">{d.HigherEducation}</p>
                            <p className="c-name">{d.CollegeName}</p>
                            <p className="c-year">{d.HSC}</p>
                            <p className="c-year">{d.SSC}</p>
                            <p className="c-location">{d.location}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}