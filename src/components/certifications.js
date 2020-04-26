import React from "react"
import udgama from "../images/certification.jpg"

const data = [
    {
        logo: udgama,
        abc: "Technical Training (Core Java, Oracle, MySql)",
        location: " Mumbai, Maharashtra, India"
    }
];

export default function Certification(){
    return (
        <div className="certification">
            <p className="title">Certifications</p>
            <hr />
            {
                data.map((d, i) => (
                    <div key={i} className="company">
                        <div className="c-image">
                            <img src={d.logo} alt="company" />
                        </div>
                        <div className="info">
                            <p className="c-title">{d.abc}</p>
                            <p className="c-location">{d.location}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}