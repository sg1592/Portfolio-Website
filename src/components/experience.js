import React from "react"
import udgama from "../images/profile.png"

const data = [
    {
        logo: udgama,
        profile: "Full Stack Developer",
        company: "Udgama Software Pvt. Ltd.",
        year: "Aug 2018 - Present",
        location: "Thane, Maharashtra, India"
    }
];

export default function Experience(){
    return (
        <div className="experience">
            <p className="title">Experience</p>
            <hr />
            {
                data.map((d, i) => (
                    <div key={i} className="company">
                        <div className="c-image">
                            <img src={d.logo} alt="company" />
                        </div>
                        <div className="info">
                            <p className="c-title">{d.profile}</p>
                            <p className="c-name">{d.company}</p>
                            <p className="c-year">{d.year}</p>
                            <p className="c-location">{d.location}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}