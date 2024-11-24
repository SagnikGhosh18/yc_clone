import NavBar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='font-work-sans'>
            <NavBar />
            {children}
        </main>
    )
}

export default layout