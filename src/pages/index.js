import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"
import Header from "../components/header"
import About from "../components/about"
import Experience from "../components/experience"
import Education from "../components/education"
// import Certification from "../components/certifications"
import Projects from "../components/projects" 
import Skills from "../components/skills"
//import Accomplishment from "../components/accomplishments"
import Contact from "../components/contact"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Profile />
    <About />
    <Experience />
    <Education />
   
    <Projects />
    <Skills />
    
    <Contact />
  </Layout>
)

export default IndexPage
