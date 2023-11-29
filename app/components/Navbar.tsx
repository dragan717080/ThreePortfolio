'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar: FC = () => {

  const router = useRouter();

  return (
    <header className='header'>
      <div
        onClick={() => router.push('/')}
        className="row"
      >
        <div className='relative row-v pointer'>
          <Image
            height={40}
            width={40}
            src='/assets/images/logo.webp'
            objectPosition='left'
            alt='logo'
            sizes='100vw'
          />
        </div>
        <Link href="/">
          <h1 className="text-xl md:text-2xl bold -mt-1.5 ml-2.5 pt-0.5">
            Dragan<span className="t-primary hidden md:contents">Websites</span>
          </h1>
        </Link>
      </div>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/about' className={"text-black"}>
          About
        </Link>
        <Link href='/projects' className={"text-black"}>
          Projects
        </Link>
      </nav>
    </header>
  )
}

export default Navbar;
