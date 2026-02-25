import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const routes = [
  {
    id: "home",
    name: "Home",
    path: "/"
  },
  {
    id: "about",
    name: "About",
    path: "/about"
  },
  {
    id: "products",
    name: "Products",
    path: "/products"
  },
  {
    id: "blog-details",
    name: "Blog Details",
    path: "/blog/:id"
  },
  {
    id: "contact",
    name: "Contact",
    path: "/contact-us"
  }
];

// export default routes;
const NavBar = () => {

  const [open , setOpen]= useState(false)
  const links =  routes.map(link=> <li className='mr-10 '>
                    <a href={link.path} ></a>{link.name}
                    </li>)
    return (
        <nav className='flex justify-between shadow p-5 items-center'>
          <span className='flex'>
          {open ? 
          <X className='md:hidden'onClick={() =>setOpen(!open)}></X> : 
          <Menu className='md:hidden ' onClick={() =>setOpen(!open)}></Menu>}
            <ul className={`md:hidden absolute duration-1000 ${open?'top-40 left-8' : '-top-40 left-8'} bg-amber-100 p-4`}>
              {
                links
              }
            </ul>
            
          <h3 className='ml-2 font-bold '>My Nevbar</h3>
          </span>

            <ul className='md:flex hidden'>
               {
                links
               }

            </ul>
            <button className='btn'>Sign in</button>

            {/* <ul className='flex'>
                <li className='mr-10'><a href=""></a>Home</li>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
                <li className='mr-10'><a href="">Singne</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;