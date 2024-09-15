import React from 'react'
import AboutImg from "../assets/about.png";
const About = () => {
  return (
    <section className = "flex flex-col md:flex-row bg-[#1B1F38]" id = "about">
        <div className = "py-5   md:w-1/2">
        <img src = {AboutImg}/>
        </div>
        <div className = "flex justify-center ml-3 md:w-1/2">
        <div className = "justify-center flex flex-col text-[#EDEDED]  w-[500px]">
            <h1 className = "text-4xl text-#F5F5F5 mb-5 border-b-4 border-primary w-[270px] font-hero-font">Get to Know Me</h1>
            <p className = "text-justify text-[17px] text-#F5F5F5">I am a versatile web developer with strong skills in both frontend and backend development. On the frontend, I specialize in creating responsive, user-friendly interfaces using technologies like HTML, CSS, JavaScript, React, and Tailwind CSS.</p>
            </div>
        </div>
    </section>
  )
}

export default About
