import React from "react"
import udgama from "../images/workexp.png"

const data = [
    {
        logo: udgama,
        profile: "Web Developer",
        company: "Ixia Solutions Pvt. Ltd.",
        year: "Nov 2018 - Present",
        location: "Ghansoli(New Mumbai), Maharashtra, India"
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