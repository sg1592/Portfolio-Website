import React from 'react'
import profile from "../images/profile1.jpg"
// import Img from "gatsby-image"
// import {
//     useStaticQuery,
//     graphql
// } from "gatsby"

export default function Profile(){
//     const data = useStaticQuery(graphql `
//     query {
//       file(relativePath: { eq: "profile.png" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
    return (
        <div className="profile">
            <img src={profile} alt="profile" className="profile-img" />
            <p className="title">Sunil Pundlik Gode</p>
            <p className="subtitle">Web Developer</p>
            <p className="address">Ixia Solutions</p>
        </div>
    );
}