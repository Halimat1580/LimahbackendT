import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../Assets/WhatsApp Image 2023-11-22 at 12.23.17_db117590.jpg'
import navImg from '../Assets/WhatsApp Image 2023-11-22 at 12.23.18_eb5e5597.jpg'
const Navbar = () => {
  return (
    <nav className='border-bottom border-2 border-primary'>
        <div className='container d-flex justify-content-between align-items-center'>
            <div className=''> 
                <Link to="/" className='text-decoration-none'>
                    <img src={navLogo} alt="navLogo" className='img-fluid w-75' />
                
                </Link>
                </div>
                <div>
        
        <ul className='d-flex align-item-center gap-5 list-unstyled'>
            {/* <li >
                <Link to='/'>home</Link>
            </li> */}

            <li>
                <Link to='/AllUsers' className='text-decoration-none'>All Users</Link>
            </li>

            <li>
               <Link to='/NewUser' className='text-decoration-none'>New User</Link>
            </li>

            <li>
                <img src={navImg} alt="navImg" className='d-none d-lg-block img-fluid' />
            </li>
        </ul>
        </div>
        </div>
        
    </nav>
  )
}

export default Navbar