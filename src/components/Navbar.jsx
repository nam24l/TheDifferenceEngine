import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <>
    <nav className="bg-yellow-400 shadow-md">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
         
          <Link className="flex flex-shrink-0 items-center mr-4" href="/index.html">
            <img
              className="w-22 h-22 bg-black rounded-full h-12 w-auto"
              src={logo}
              alt="React Jobs"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              The Difference Engine
            </span>
          </Link>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <Link
                to="/"
                className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Home
              </Link>
              <Link
                to="/blog"
                className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar