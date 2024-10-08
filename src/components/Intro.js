import heroImg from "../assets/Visshwa PM.jpeg";
import {  AiOutlineLinkedin  , AiOutlineGithub , AiOutlineMail} from "react-icons/ai";

export default function Intro(){
    return (
        <section className = "flex flex-col md:flex-row justify-center px-5 py-32 bg-[#1B1F38] " id = "intro">
            <div className = "md:w-1/2 flex  flex-col">
           <h1 className = " text-[#7fe4e4] font-hero-font text-6xl">
            Hi,
            <br />
            I'm Visshwa <span className = "text-[#55e0e0]">PM</span><br/>
            <p className = "text-2xl">I'm Full Stack Developer</p>
           </h1>
            <div className = "flex py-10">
                <a href = "https://www.linkedin.com/in/visshwa-pm-a4437b255/" className = "mx-3 text-[#FF007F] hover:text-white">< AiOutlineLinkedin  size = {40}/></a>
                <a href = "https://github.com/Visshwa96" className = "mx-3 text-[#FF007F] hover:text-white"><AiOutlineGithub size = {40}/></a>
                <a href = "https://mail.google.com/mail/u/0/#inbox" className = "mx-3 text-[#FF007F] hover:text-white"><AiOutlineMail size = {40}/></a>
            </div>
           </div>
           <img src = {heroImg} className = "md:w-1/3 rounded"/>
        </section>
    );
}