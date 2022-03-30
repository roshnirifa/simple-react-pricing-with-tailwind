import React, { useState } from 'react';
import NavLink from './NavLink/NavLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    // using state for navbar
    const [open, setOpen] = useState(false);
    // dynamic data nav er jnno pailam
    const routes = [
        { id: 1, name: 'Home', link: "/Home" },
        { id: 1, name: 'Shop', link: "/Shop" },
        { id: 1, name: 'Deals', link: "/Deals" },
        { id: 1, name: 'Coupons', link: "/Coupons" },
        { id: 1, name: 'Contacts', link: "/Contacts" },
    ]
    return (
        <nav className='bg-indigo-200  '>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon ></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-indigo-200 duration-500 w-full ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <NavLink key={route.id}
                        route={route}
                    ></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default Header;