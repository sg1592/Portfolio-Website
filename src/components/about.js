import React, {useState} from "react"


export default function About(){
    const [open, setOpen] = useState(false)
    return (
        <div  className="about">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
            <p className="title">About</p>
            <button   className="toggle-btn" onClick={() => setOpen(!open)}>More</button>
            <hr />
            </div>
            
            <div  className={open ? "" : "close"}>
            <p className="c-year">I caught fire coding.</p>
            <p className="c-year">I always want to become as software developer. I like listening to music,teaching and playing cricket.</p>
            </div>
        </div>
        
    );
}