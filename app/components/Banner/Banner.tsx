import React from 'react'

const Banner = () => {
  return (
            

        

    <div id="banner" tabIndex={-1} className="z-50 flex justify-center w-full px-4 py-3 border border-b border-gray-200 bg-gray-50 dark:border-gray-600 lg:py-4 dark:bg-gray-700">
      <div className="items-center md:flex">
        <p className="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline">New</span>
              We have launched the new Flowbite Dashboard featuring over 60+ pages!
            <a href="https://flowbite.com/application-ui/preview/" className="inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline">
              Check it out
              <svg className="w-3 h-3 ml-1.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </a>
        </p>
      </div>
      <div className="flex items-center shrink-0 ml-auto">
            {/* <a href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a> */}
            <button data-dismiss-target="#marketing-banner" type="button" className="shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close banner</span>
            </button>
        </div>
    </div>      




  )
}

export default Banner