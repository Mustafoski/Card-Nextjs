import Link from 'next/link';

export default function Header() {
  return (
    <header className='absolute top-0 right-0 z-20 p-6 text-white'>
      <nav className='flex items-center gap-6 text-sm font-medium'>
        <Link href='/' className='hover:opacity-80 transition-opacity'>
          Home
        </Link>
        <Link
          href='/performance'
          className='hover:opacity-80 transition-opacity'
        >
          Performance
        </Link>
        <Link
          href='/reliability'
          className='hover:opacity-80 transition-opacity'
        >
          Reliability
        </Link>
        <Link href='/scale' className='hover:opacity-80 transition-opacity'>
          Scale
        </Link>
      </nav>
    </header>
  );
}
