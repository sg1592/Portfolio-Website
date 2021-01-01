import React, {useState} from "react"

const data1 = [
    'JAVA', 
    'C', 
    'HTML', 
    'SQL', 
    'CSS',
    
];

const data2 = [
    'Javascript(Programming Language)',
    'Gatsby JS',
    'Material UI',
    'Github',
    'unit testing',
];

export default function Skills(){
    const [open, setOpen] = useState(false)
    return (
        <div className="skills">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
            <p className="title">Skills & Endorsements</p>
            <button   className="toggle-btn" onClick={() => setOpen(!open)}>More</button>
            <hr />
            </div>
           
            <div  className={open ? "" : "close"}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', height: 'auto'}}>
                <div style={{ width: '45%', height: 'auto'}}>
                    {
                        data1.map((d, i) => (<p style={{ color: 'grey'}} key={i}>{d}</p>))
                    }
                </div>
                <div style={{ width: '45%', height: 'auto'}}>
                    {
                        data2.map((d, i) => (<p style={{ color: 'grey'}} key={i}>{d}</p>))
                    }
                </div>
            </div>
            </div>
        </div>
    );
}