import React from "react"

const data1 = [
    'JAVA', 
    'C', 
    'HTML', 
    'SQL', 
    'CSS',
    'Javascript(Programming Language)',
];

const data2 = [
    'Gatsby JS',
    'Material UI',
    'Express',
    'Github',
    'unit testing',
    'Integration testing', 
];

export default function Skills(){
    return (
        <div className="skills">
            <p className="title">Skills & Endorsements</p>
            <hr />
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
    );
}