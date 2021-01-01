import React, {useState} from "react"
import image from "../images/educationlogo.png"

const data = [
    {
        logo: image,
        HigherEducation: "BE Computer(First Class)",
        CollegeName: "SSJCET Asangaon.",
        HSC: "HSC Science(First Class)",
        SSC: "SSC(First Class)",
        location: " Mumbai, Maharashtra, India"
    }
];

export default function Education(){
    const [open, setOpen] = useState(false)
    return (
        <div className="education">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
            <p className="title">Education</p>
            <button   className="toggle-btn" onClick={() => setOpen(!open)}>More</button>
            <hr />
            </div>
            
            <div  className={open ? "" : "close"}>
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
        </div>
    );
}