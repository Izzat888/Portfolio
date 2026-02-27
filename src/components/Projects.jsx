import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'Luxury Line',
            desc: 'Luxury Line Perfumes is a harmony of elegance, quality, and perfection. Each fragrance is crafted from the finest ingredients to create a unique scent and leave a lasting impression. Luxury Line Perfumes is not just a fragrance — it is an expression of style and refined taste.',
            image: project1,
            tags: ['React', 'CSS', 'JavaScript', 'Responsive Web Design'],
            url: 'https://luxury-xi-blue.vercel.app/',
            github:'https://github.com/Izzat888/Luxury'
        },
        {
            id: 2,
            title: 'Zamon Bussines Tour',
            desc: 'Zamon Business Tour is a modern travel platform designed to make business and leisure trips easier and more efficient. The website offers carefully selected destinations, transportation options, and seamless booking experiences, combining clean design with user-friendly functionality to ensure comfort and reliability for every journey.',
            image: project2,
            tags: ['React', 'HTML', 'CSS', 'Responsive Web Design'],
            url:'https://zamontour.uz/',
            github:'https://github.com/Izzat888/Zamon-Business-Tour'
        },
        {
            id: 3,
            title: 'AQVO',
            desc: 'AQVO is a food brand built on quality, honesty, and trust. Its products are made from high-quality ingredients, standing out for their natural taste and purity. AQVO represents a reliable choice for everyday nutrition.',
            image: project3,
            tags: ['React', 'JavaScript', 'CSS', 'Responsive Web Design'],
            url:'https://aqvo.uz/',
            github:'https://github.com/Izzat888/Taqvo'
        },
    ];
    const githubRepositories = 'https://github.com/Izzat888?tab=repositories';
    return (
        <section
            id='projects'
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos='fade-up'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{
                            color: darkMode ? 'white' : '#1f2937'
                        }}>
                        My <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            projects
                        </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto'
                        style={{
                            color: darkMode ? '#d1d5db' : '#6b7280'
                        }}>
                        A showcase of my recent work
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient (to right, #1f2937, #111827)'
                                    : 'linear-gradient (to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border duration-300
                     hover:border-orange-500/50 transition-all'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}>
                            <div className='h-65 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover
                            group-hover:scale-110 transition-transform
                            duration-500' />
                            </div>
                            <div className='py-4 p-2'>
                                <h3
                                    className='text-lg font-bold mb-2'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}>
                                    {project.title}
                                </h3>
                                <p
                                    className='text-sm mb-3'
                                    style={{
                                        color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? 'white' : '#374151'
                                        }}
                                        className='flex-1 flex items-center justify-center cursor-pointer
                                gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                                transition-colors'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'
                                    >
                                        <FaGithub className='text-sm' />
                                        <span>Code</span>
                                    </a>

                                    {/* Demo */}
                                    <a
                                        href={project.url}
                                        target='_blank'
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)'

                                        }}
                                        className='flex-1 flex items-center justify-center cursor-pointer
                                gap-1.5 px-3 py-2 text-white text-sm 
                                rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'
                                    >
                                        <FaExternalLinkAlt className='text-sm' />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className='text-center mt-10'>
                    <a
                        href={githubRepositories}
                        target='_blank'
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)'

                        }}
                        className='inline-flex items-center font-semibold
                                gap-2 px-7 py-4 text-white text-sm 
                                rounded-full hover:shadow-lg cursor-pointer hover:shadow-orange-500/25 transition-all'
                        data-aos='zoom-in'
                        data-aos-delay='300'
                    >
                        <FaGithub />
                        <span> View All Projects</span>
                        <FaExternalLinkAlt className='text-sm' />
                        <span>Demo</span>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Projects