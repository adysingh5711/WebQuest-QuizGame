import React, { Component } from 'react'
import testwebd1 from './testwebd1.png'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {

    return (
      <div className=''>
<nav className="bg-custom-black ">  
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src={testwebd1} alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          <Link
                    to="/"
                    className="text-white hover:bg-custom-red hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current
                  >
                    Home
                  </Link>
                  <Link
                    to="/quizzes"
                    className="text-white hover:bg-custom-red hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Quizzes
                  </Link>
                  <Link
                    to="/features"
                    className="text-white hover:bg-custom-red hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Features
                  </Link>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
    <Link
                    to="/"
                    className="text-white hover:bg-custom-red hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current
                  >
                    Home
                  </Link>
                  <Link
                    to="/quizzes"
                    className="text-white hover:bg-custom-red hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Quizzes
                  </Link>
                  <Link
                    to="/features"
                    className="text-white hover:bg-custom-red hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Features
                  </Link>

    </div>
  </div>
</nav>
      </div>
    )
  }
}
