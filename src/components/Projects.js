import websiteImg1 from '../assets/movie.png';
import websiteImg2 from '../assets/cashflowmin.png';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Movie Theater App using React Js and API Integration.',
                link: 'https://github.com/Visshwa96/Movie_Search_app'
            },
            {
                image: websiteImg2,
                description: 'CashFlow Minimization using HTML and CSS and DSA Integration',
                link: 'https://github.com/Visshwa96/CashFlowMin/tree/main/CBFriendsCost-master/CBFriendsCost-master'
            },
            // {
            //     image: websiteImg3,
            //     description: 'Basic Blog Website . Built with Next JS and MongoDB',
            //     link: 'https://github.com/jvlcode/blog'
            // }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-[#1B1F38]  text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-hero-font">Projects</h1>
                <p>These are some of my projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-60'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[300px] w-[500px]' src={project.image} alt = ""/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}