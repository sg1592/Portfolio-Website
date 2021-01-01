import React, {useState} from "react"
import image from "../images/workexp.png"

const data = [
    {
        logo: image,
        profile: "Web Developer",
        company: "Ixia Solutions Pvt. Ltd.",
        year: "Nov 2018 - Present",
        location: "Ghansoli(New Mumbai), Maharashtra, India"
    }
];

export default function Experience(){
    const [open, setOpen] = useState(false)
    return (
        <div className="experience">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
            <p className="title">Experience</p>
            <button   className="toggle-btn" onClick={() => setOpen(!open)}>More</button>
            </div>
            <hr />
            <div  className={open ? "" : "close"}>
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
        </div>
    );
}