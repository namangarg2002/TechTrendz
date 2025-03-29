import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact" ,
    link: "/#contact" ,
  },
  {
    title: "Blog" ,
    link: "/#blog" ,
  },
];
const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className='py-8 px-4'>
            <a href='#'
            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              TechTrendz
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3
            '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque quae voluptatibus porro veritatis!
            </p>
            <p className='text-gray-500 mt-4'>Made With ❣️ by Naman Garg</p>
          </div>
          {/* footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                      className='text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black
                      duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* second col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                      className='text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black
                      duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* company Address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow/>
                  <p>Hathras, Uttar Pradesh, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt/>
                  <p>+91 7599181179</p>
                </div>
                {/* social Links */}
                <div className='flex items-center gap-3 mt-6'>
                  <a href="#">
                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                  </a>
                  <a href="#">
                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                  </a>
                  <a href="#">
                    <FaXTwitter className='text-3xl hover:text-primary duration-300'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer