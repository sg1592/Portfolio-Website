import React, {useState} from "react"


const data = [
    {
        
        title:"",
       
        abc: "",
        location: ""
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
            <p className="title">Projects</p>
            <span   className="text" onClick={() => setOpen(!open)}><button class="btn"><i class="arrow down"></i></button></span>
           
            </div>
            
            <div  className={open ? "" : "close"}>
            <hr />
            {
                data.map((d, i) => (
                    <div key={i} className="company">
                        <div className="c-image">
                           {/* <img src={d.logo} alt="company" />  */}
                        </div>
                        <div className="info">
                        <p className="c-title">{d.title}</p>
                        <table><tr><td class="v-top"><ol><li>Flinn</li></ol></td><td><p><strong>Description:</strong></p><ul> <li>Creating Responsive website interface by using standard HTML5, CSS3, JavaScript, Bootstrap practices.</li> <li>Designing, coding and modifying websites, from layout to function according to a client's specifications using .net technology.</li> <li>Creating JSON files to load the data on the browser.</li> <li>Key code generation of teacher and student version for activation of courses using database server</li> <li>Handling UI Design of web pages Compatible to every Device Browsers likes e.g. Chrome, Safari, and Mozilla etc.</li> </ul><p><strong>Website:</strong></p> <ol > <li><a href='http://www.flinnprep.com' target='_blank' rel="noopener noreferrer">www.flinnprep.com</a></li> <li><a href='http://www.flinn360science.com' target='_blank' rel="noopener noreferrer">www.flinn360science.com</a></li> <li><a href='http://www.gettingnerdyscience.com' target='_blank' rel="noopener noreferrer">www.gettingnerdyscience.com</a></li> <li><a href='http://www.flinnpogo.com' target='_blank' rel="noopener noreferrer">www.flinnpogo.com</a></li> <li><a href='http://www.flinnscience2go.com' target='_blank' rel="noopener noreferrer">www.flinnscience2go.com</a></li> <li><a href='http://www.flinnlabkits.com' target='_blank' rel="noopener noreferrer">www.flinnlabkits.com</a></li> </ol><p><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript, jQuery, MySQL, Bootstrap.</p></td></tr><tr><td class="v-top"><ol start='2'><li>CompTIA Games</li></ol></td><td><p><strong>Description:</strong></p><ul> <li>Creating Web version of Android games by using standard HTML5, CSS3, JavaScript, XML technology and modifying them according to Client Specification.</li> <li>Build using Jenkins</li>  </ul><p><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript, Bootstrap.</p></td></tr><tr><td class="v-top"><ol start='3'><li>CTE Electives</li></ol></td><td><p><strong>Description:</strong></p><ul> <li>Creating Responsive website interface by using standard HTML5, CSS3, Bootstrap practices.</li> <li>Creating JSON files to load the data on the browser.</li><li>Build using Jenkins</li>  </ul><p><strong>Technologies Used:</strong> HTML5, CSS3, JSON, JavaScript, Bootstrap.</p></td></tr></table>
                        
                        
                            <p className="c-location">{d.location}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}