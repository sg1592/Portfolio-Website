import React, {useState} from "react"
import image from "../images/certification.jpg"

const data = [
    {
        logo: image,
        abc: "Technical Training (Core Java, Oracle, MySql)",
        location: " Mumbai, Maharashtra, India"
    }
];

export default function Certification(){
    const [open, setOpen] = useState(false)
    return (
        
        <div className="certification">
            <div style={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            <p className="title">Certifications</p>
            <span   className="text" onClick={() => setOpen(!open)}><button class="btn"><i class="arrow down"></i></button></span>
           
            </div>
            
            <div  className={open ? "" : "close"}>
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
        </div>
    );
}