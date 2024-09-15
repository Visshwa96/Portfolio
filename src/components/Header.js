import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header(){
    const [toggleview ,setToggleView ] = useState(false);
    return (
        
        <header className="flex fixed w-full z-50 justify-between py-2 bg-[#2E3A59] ">
            <a href = "/" className = "text-white font-bold text-[20px] "> Visshwa PM</a>
            <nav className = "hidden md:block"> {/* hidden - mobile view this means "mobile view la theriyathu md:block desktop view la theriyum*/ }
            <ul className = "flex text-white">
                <li><a href = "/">Home</a></li>
                <li><a href = "#about">About Me</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#resume">Resume</a></li>
                <li><a href = "#contact">Contact Me</a></li>
            </ul>
            </nav>
            {toggleview && <nav className = "block md:hidden "> {/* block - mobile view this means "mobile view la theriyum md:hidden desktop view la theriyathu*/ }
            <ul className = "flex flex-col text-white mobile-nav">
                <li><a href = "/">Home</a></li>
                <li><a href = "#about">About Me</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#contact">Contact Me</a></li>
            </ul>
            </nav>}
            <button onClick = {() => setToggleView(!toggleview)} className = "block md:hidden"><Bars3Icon className='text-white h-5'/></button> {/* block - mobile view this means "mobile view la theriyum md:hidden desktop view la theriyathu*/ }
        </header>
    );
}