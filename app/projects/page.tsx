import { FC } from 'react';
import { projects } from "@/app/constants";
import Link from 'next/link';
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
        in them! Here are some of the projects I've made since I've started
        coding three years ago:
      </p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl row'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col h-[14vh]'>
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
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <h1>
        If you want to colaborate on a project you can contact me at <span className="blue-gradient_text">dburic717@outlook.com</span>
      </h1>
    </section>
  )
}

export default Projects;
