import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <>
      <nav className='flex justify-between items-center shadow h-16'>
        <div className='px-2 pt-1 mx-3 cursor-pointer'>
          <a href='/'>
            <img
              src='/md-logo.png'
              alt='logo'
              width={200}
              height={100}
            />
          </a>
        </div>
        <div className='mx-3 sm:hidden'>
          <MenuIcon
            className='h-7 w-7 text-black-400 cursor-pointer'
            onClick={handleClick}
          />
        </div>
        <ul className='hidden sm:flex mx-3'>
          <li className='mx-3'>
            <a href='https://courses.microdegree.work/pages/premium-courses' className='text-black-300'>
              <a style={{color:"#062A42"}}> Courses</a>
            </a>
          </li>
          <li className='mx-3'>
            <a href='https://pages.microdegree.work/review.html' style={{color:"#062A42"}}>Reviews</a>
          </li>
          <li className='mx-3'>
            <a href='https://blog.microdegree.work/' style={{color:"#062A42"}}>Blog</a>
          </li>
          <li className='mx-3'>
            <a href='https://t.me/microdegreekannada ' style={{color:"#062A42"}}>Community</a>
          </li>
          <li className='mx-3'>
            <a href='https://pages.microdegree.work/scholarship.html' style={{color:"#062A42"}}>Scholarship</a>
          </li>
          <li className='mx-3'>
            <a href='https://courses.microdegree.work/users/sign_in'>
              <a className=' font-bold uppercase px-4 py-1 rounded border shadow-xl' style={{color:"#EB5C74",borderColor:"#EB5C74"}}>
                Login
              </a>
            </a>
          </li>
          <li className='mx-3'>
            <a href='tel:+91 83108 82795'>
              <a className=' font-bold uppercase px-4 py-1 mx-1 rounded border  shadow-xl' style={{color:"#ffff",backgroundColor:"#623F99",borderColor:"#623F99"}}>
              83108 82795
              </a>
            </a>
          </li>
        </ul>
      </nav>
      {show && (
        <ul className='w-full flex flex-col  items-center bg-gray-100 h-h-nav pt-5 sm:hidden'>
          <li className='mt-3'>
            <a href='https://courses.microdegree.work/pages/premium-courses'>
              <a className='p-1 text-xl'>Courses</a>
            </a>
          </li>
          <li className='mt-3'>
            <a href='https://pages.microdegree.work/review.html'>
              <a className='p-1 text-xl'>Reviews</a>
            </a>
          </li>
          <li className='mt-3'>
            <a href='https://blog.microdegree.work/'>
              <a className='p-1 text-xl'>Blog</a>
            </a>
          </li>
          <li className='mt-3'>
            <a href='https://t.me/microdegreekannada '>
              <a className='p-1 text-xl'>Community</a>
            </a>
          </li>
          <li className='mt-5'>
            <a href='https://courses.microdegree.work/users/sign_in'>
              <a className='text-regal-red font-bold uppercase px-4 py-1 rounded border border-regal-red'>
                Login
              </a>
            </a>
          </li>
          <li className='mt-5'>
            <a href='tel:+91 83108 82795'>
              <a className=' text-gray-100 font-bold uppercase px-4 py-1 mx-1 rounded border border-regal-red hover:bg-red-700 ' style={{color:"#EB5C74"}}>
              83108 82795
              </a>
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
