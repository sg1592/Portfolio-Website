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
            <span  className="text"  onClick={() => setOpen(!open)}><button class="btn"><i class="arrow down"></i></button></span>
            
            </div>
            
            <div  className={open ? "" : "close"}>
            <hr />
            <p className="c-year">I caught fire coding.</p>
            <p className="c-year">I always want to become as software developer. I like listening to music,teaching and playing cricket.</p>
            </div>
        </div>
        
    );
}