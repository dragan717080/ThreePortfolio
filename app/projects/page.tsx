import { FC } from 'react';
import { projects } from "@/app/constants";
import Link from 'next/link';
import Image from 'next/image';
import { arrow } from "@/public/assets/icons";

const Projects: FC = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>
      <p className='text-slate-500 mt-2 leading-relaxed'>
        I think that the best way to learn technologies is to dive in and make apps
        in them! Here are some of the projects I&apos;ve made since I&apos;ve started
        coding three years ago:
      </p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl row'>
                <Image
                  height={48}
                  width={48}
                  src={project.iconUrl}
                  alt='threads'
                  className='w-auto object-contain'
                  sizes='100vw'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col h-[14vh] min-h-fit'>
              <h4 className='text-2xl font-poppins semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='row-v gap-2 font-poppins mt-auto'>
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='semibold text-blue-600'
                >
                  Link to project
                </Link>
                <Image
                  height={16}
                  width={16}
                  src={arrow}
                  alt='arrow'
                  className='w-auto object-contain'
                  sizes='100vw'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <h1>
        If you want to colaborate on a project you can contact me at <a href="mailto:dburic717@outlook.com?subject=Hello%20Dragan&body=Hello%20Dragan!%0A%0AI%20would%20like%20to%20colaborate%20with%20you!"><span className="blue-gradient_text">dburic717@outlook.com</span></a>
      </h1>
    </section>
  )
}

export default Projects;
