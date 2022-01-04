import React from 'react'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
} from '@heroicons/react/outline'

function Sidebar() {
    return (
        <div className='text-gray-500 p-5 text-sm'>
            <button className='flex items-center space-x-2 hover:text-white'>
                <HomeIcon className='h-5 w-5' />
                <span> Home </span>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <SearchIcon className='h-5 w-5' />
                <span> Seacrh </span>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <LibraryIcon className='h-5 w-5' />
                <span>Your Library </span>
            </button>
            <button className='flex items-center space-x-2 hover:text-white'>
                <PlusCircleIcon className='h-5 w-5' />
                <span> Create Playlist </span>
             </button>
        </div>
    )
}

export default Sidebar
