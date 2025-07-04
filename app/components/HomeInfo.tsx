import Link from 'next/link';
import Image from 'next/image';
import Flag from 'react-world-flags';

const HomeInfo = ({ currentStage }: { currentStage: number }) => {
  if (currentStage === 1) {
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I&apos;m
        <span className='font-semibold mx-2 text-white'>Dragan</span>
        👋
        <br />
        <span className='row-v gap-2.5'>A Full Stack Web Developer from Serbia <Flag code="RS" style={{ width: '1.75rem', height: 'auto' }} /></span>
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        <p className='font-medium sm:text-xl text-center'>
          I&apos;m a self taught developer <br /> with passion for learning new technologies.
        </p>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          I always want to learn new things <br /> and enjoy making new projects for fun.
        </p>
        <Link href='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src='/assets/icons/arrow.svg' alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Do you want to get to know me better? <br />
        </p>
        <Link href='/contact' className='neo-brutalism-white neo-btn'>
          About me
          <Image height={16} width={16} src='/assets/icons/arrow.svg' className='object-contain' sizes='100vw' alt='learn-more-arrow-right' />
        </Link>
      </div>
    );
  }

  return <></>
};

export default HomeInfo;
