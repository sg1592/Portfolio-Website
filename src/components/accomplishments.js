import React from "react"
import udgama from "../images/certification.jpg"

const data = [
    {
        logo: udgama,
        Accom: "Teaching maths to engineering students from last 5 years",
        location: " Mumbai, Maharashtra, India"
    }
];

export default function Accomplishments(){
    return (
        <div className="accomplishments">
            <p className="title">Accomplishments</p>
            <hr />
            {
                data.map((d, i) => (
                    <div key={i} className="company">
                        <div className="c-image">
                            <img src={d.logo} alt="company" />
                        </div>
                        <div className="info">
                            <p className="c-title">{d.Accom}</p>
                            <p className="c-location">{d.location}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}