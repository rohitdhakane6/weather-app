import React from 'react'

export default function Navbar() {
  return (
    <div>
        <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='/'>
    <img src="https://img.icons8.com/ios/50/null/partly-cloudy-day--v1.png" alt='/'/>
      <span className="ml-3 text-xl">Today's Weather</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white" href='/'>Pune</a>
      <a className="mr-5 hover:text-white" href='/'>Mumbai</a>
      <a className="mr-5 hover:text-white" href='/'>Hyderabad</a>
      <a className="mr-5 hover:text-white" href='/'>Bangalore</a>
    </nav>
    
<form>   
    <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <input class="block w-full p-1.5 pl- text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
</form>

    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ml-2">Search
    </button>
  </div>
</header>
    </div>
  )
}
