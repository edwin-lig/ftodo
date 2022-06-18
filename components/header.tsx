import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleBtn from './darkModeToggleBtn';
import LogoJuhwan from './assets/logoJuhwan';
import LogoPortfolio from './assets/logoPortfolio';

export default function Header() {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link href={'/'}>
            <a className='w-60 flex gap-2'>
              <LogoJuhwan />
              <LogoPortfolio />
            </a>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center gap-5'>
            <Link href={'/'}>
              <a className='hover:text-gray-900 mr-5'>首页</a>
            </Link>
          </nav>
          <DarkModeToggleBtn />
        </div>
      </header>
    </>
  );
}
