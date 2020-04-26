import React from "react"
import image from "../images/contact.png"

const data = [
    {
        logo: image,
        email: "Email:-sunil.gode007@gmail.com",
        mobile: "Mobile:-7972520834",
        git: "Github:-http://github.com/sg1592",
        linkdn: "LinkedIn:-https://www.linkedin.com/in/sunil-gode-736a3b1a6"
    }
];


export default function Contact(){
    return (
        <div className="contact">
            <p className="title">Contact Me</p>
            <hr />
            {
                data.map((d, i) => (
                    <div key={i} className="company">
                        <div className="c-image">
                            <img src={d.logo} alt="company" />
                        </div>
                        <div className="info">
                            <p className="c-name">{d.email}</p>
                            <p className="c-name">{d.mobile}</p>
                            <p className="c-name">{d.git}</p>
                            <p className="c-name">{d.linkdn}</p>
                        </div>
                    </div>
                ))
            }
       </div>
    );
}