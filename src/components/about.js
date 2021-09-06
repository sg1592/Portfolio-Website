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
            <p className="c-year">Seeking a challenging and rewarding position as Software Developer, with a strong will to prosper in any assigned duties. Passion to quickly learn adjusts to new environments and technologies.</p>
            </div>
        </div>
        
    );
}