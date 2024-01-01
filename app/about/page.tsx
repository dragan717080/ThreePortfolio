'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills } from "@/app/constants";

import "react-vertical-timeline-component/style.min.css";
import { AvatarPointerCanvas } from "../components";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m{" "}
        <span className='blue-gradient_text semibold drop-shadow'>
          {" "}
          Dragan
        </span>{" "}
        👋
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Serbia, specializing in building
          modern and highly optimized full stack applications.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl row'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                  title={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I&apos;ve worked in several companies, leveling up my skills and
            teaming up with smart people. Here&apos;s the rundown:
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                visible={true}
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='row w-full h-full'>
                    <img
                      src={experience.icon.src}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  marginInline: "0.75rem",
                }}
              >
                <div className="-mt-2">
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-500 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className='pb-16'>
        <h3 className='subhead-text'>Languages</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            When it comes to coding I&apos;m self taught, but I have strong background
            in linguistics so I am quite fast with learning new languages. Here&apos;s what I&apos;ve learned so far:
          </p>
          <ul className='my-5 list-disc ml-5 space-y-2'>
            {['English', 'Spanish', 'Italian', 'Russian', 'Ukrainian'].map((point, index) => (
              <li
                key={index}
                className='text-slate-500 font-normal pl-1 text-sm'
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='pb-10'>
        <h3 className='subhead-text'>Achievements</h3>
        <div className='mt-5 flex text-slate-500 max-w-20'>
          <p>
            Global rank 1 on HackerRank in Python
          </p>
          <div className="hidden md:block -my-[2rem]">
            <AvatarPointerCanvas />
          </div>
        </div>
      </div>
      <hr className='border-slate-200' />
      <h1>
        You can contact me at <span className="blue-gradient_text">dburic717@outlook.com</span>
      </h1>
    </section>
  );
};

export default About;
