import websiteImg1 from '../assets/LEETCODE.png';
import websiteImg2 from '../assets/skillrack.png';
import websiteImg3 from '../assets/gfg.jpg';
import websiteImg4 from '../assets/hackerank.png'

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Leetcode Platform Done 200 Problems',
                link: 'https://leetcode.com/u/visshwapm/'
            },
            {
                image: websiteImg2,
                description: 'SkillRack Platform Solved More than 1200 problems',
                link: 'https://www.skillrack.com/faces/resume.xhtml?id=408027&key=462891f98b281d50fbfe77c34fc44d4d33b38ec4'
            },
            {
                image: websiteImg3,
                description: 'Geeks for Geeks Started to Solve for 21 Days to complete the POTD Challenge',
                link: 'https://www.geeksforgeeks.org/user/visshi8zt/'
            },
        ]
    }
    const config1 = {
        projects : [
            {
                image: websiteImg4,
                description: 'Hackkerank Platform to maintain my problem solving up to the level',
                link: 'https://www.hackerrank.com/profile/visshwapm'
            },
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-[#1B1F38]  text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-primary mb-5 w-[300px] font-hero-font">Coding Platforms</h1>
                <p>These are some of coding platforms that i pratice my DSA Problem Solving Skills.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image} alt = ""/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Progress</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
            <div className = "flex flex-col md:flex-row gap-5 my-10 mx-10">
            {config1.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image} alt = ""/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Progress</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}