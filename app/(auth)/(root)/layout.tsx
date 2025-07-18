import React, { ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='root-layout'>
        <header className="fixed top-4 left-4 right-0">
        <nav>
            <Link href="/" className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="Logo" width={32} height={38} />
            <h2 className='text-primary-100'>InterviewPrep</h2>
            </Link>
        </nav>
        </header>
        {children}
    </div>
  )
}

export default Layout;