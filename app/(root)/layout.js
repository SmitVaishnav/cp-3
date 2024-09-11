import Sidebar from '@/components/shared/Sidebar'
import { Divide } from 'lucide-react'
import React from 'react'

const Layout = ({ children }) => {
    return (

        <main className='root'>
            <Sidebar />
            <div className='root-container'>
                <div className='wrapper'> {children}</div>
            </div>
        </main>
    )
}

export default Layout