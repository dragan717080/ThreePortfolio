'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar: FC = () => {

  const router = useRouter();
  const [activePath, setActivePath] = useState('');
  const pathname = usePathname();
  const isActive = (path: string) => activePath === path;

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

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
        <Link href='/about' className={isActive('/about') ? 'text-primary' : 'text-black'}>
          About
        </Link>
        <Link href='/projects' className={isActive('/projects') ? 'text-primary' : 'text-black'}>
          Projects
        </Link>
      </nav>
    </header>
  )
}

export default Navbar;
