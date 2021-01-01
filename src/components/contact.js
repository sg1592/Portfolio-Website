import React, {useState} from "react"
import { Grid } from "@material-ui/core"

export default function Contact(){
    const [open, setOpen] = useState(false)
    return (
        <div className="contact">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
            <p className="title">Contact Me</p>
            <button   className="toggle-btn" onClick={() => setOpen(!open)}>More</button>
            <hr />
            </div>
            
            <div  className={open ? "" : "close"}>
            <Grid container spacing={1}>
                <Grid item xs={4} sm={4} md={2} className="label">Email:- </Grid>
                <Grid item xs={8} sm={8} md={10}><a className="field" target="blank" href="mailto:sunil.gode007@gmail.com">sunil.gode007@gmail.com</a></Grid>
                <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'right'}}>Mobile:-</Grid>
                <Grid item xs={8} sm={8} md={10}><span style={{ color: 'grey',marginLeft: '5px' }}>7972520834</span></Grid>
                <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'right'}}>Github:-</Grid>
                <Grid item xs={8} sm={8} md={10}><a style={{ textDecoration: 'none', color: 'grey', marginLeft: '5px'}} target="blank" href="http://github.com/sg1592">http://github.com/sg1592</a></Grid>
                <Grid item xs={4} sm={4} md={2} style={{ textAlign: 'right'}}>LinkedIn:-</Grid>
                <Grid item xs={8} sm={8} md={10}><a style={{ textDecoration: 'none', color: 'grey', marginLeft: '5px'}} target="blank" href="https://www.linkedin.com/in/sunil-gode-736a3b1a6">https://www.linkedin.com/in/sunil-gode-736a3b1a6</a></Grid>
            </Grid>
            </div>
       </div>
    );
}















// import React from "react"
// import image from "../images/contact.png"

// const data = [
//     {
//         logo: image,
//         email: "Email:-sunil.gode007@gmail.com",
//         mobile: "Mobile:-7972520834",
//         git: "Github:-http://github.com/sg1592",
//         linkdn: "LinkedIn:-https://www.linkedin.com/in/sunil-gode-736a3b1a6"
//     }
// ];


// export default function Contact(){
//     return (
//         <div className="contact">
//             <p className="title">Contact Me</p>
//             <hr />
//             {
//                 data.map((d, i) => (
//                     <div key={i} className="company">
//                         <div className="c-image">
//                             <img src={d.logo} alt="company" />
//                         </div>
//                         <div className="info">
//                             <p className="c-name">{d.email}</p>
//                             <p className="c-name">{d.mobile}</p>
//                             <p className="c-name">{d.git}</p>
//                             <p className="c-name">{d.linkdn}</p>
//                         </div>
//                     </div>
//                 ))
//             }
//        </div>
//     );
// }