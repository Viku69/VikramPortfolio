import React from 'react'
import HomeAvatar from '../assets/images/HomeAvatar.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      
      <nav className='flex flex-row justify-between p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="h-20 w-20 bg-white rounded-full border-2 border-black overflow-hidden ">
          <Link to="/">
            <img src={HomeAvatar} alt="HomeAvatar" className='h-22 w-22  ' />
          </Link>
        </div>

        <ul className='flex  justify-center items-center gap-8'>
          <li className='text-lg hover:underline hover:decoration-4  '>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className='text-lg hover:underline hover:decoration-4  '>
            <Link to="/education">Education</Link>
          </li>
          <li className='text-lg hover:underline hover:decoration-4  '>
            <Link to="/skills">Skills</Link>
          </li>
          <li className='text-lg hover:underline hover:decoration-4  '>
            <Link to="/projects">Projects</Link>
          </li>
          <li className='text-lg hover:underline hover:decoration-4  '>
            <Link to="/experience">Experience</Link>
          </li>
          <li className='text-lg hover:underline hover:decoration-4  '>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li className=' bg-black text-white px-4 py-2 m-2 rounded-3xl'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button>Toggl</button>
      </nav>
    </div>
  )
}

export default Header;