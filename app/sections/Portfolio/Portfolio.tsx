import React from 'react'
import Section from '@/app/components/Section/Section'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <Section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our work
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>


      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            
            <div className="rounded overflow-hidden shadow-lg">
                <a href="#"></a>
                <div className="relative">
                    <a href="#">
                        <Image className="w-full"
                            src="https://picsum.photos/200"
                            alt="Sunset in the mountains"
                            width={100}
                            height={50} />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                    <a href="#!">
                        <div
                            className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            Photos
                        </div>
                    </a>

                    <a href="!#">
                        <div
                            className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            <span className="font-bold">20</span>
                            <small>March</small>
                        </div>
                    </a>
                </div>
                <div className="px-6 py-4">

                    <a href="#"
                        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                        Pizza in Town</a>
                    <p className="text-gray-500 text-sm">
                        The collection of best pizza images in Newyork city
                    </p>
                </div>
                <div className="px-6 py-4 flex flex-row items-center">
                    <span 
                        className="py-1 text-sm font-regular text-gray-500 mr-1 flex flex-row justify-between items-center">
                        <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            enableBackground="new 0 0 512 512" xmlSpace="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span className="ml-1 text-gray-400 text-sm">3 mins read</span></span>
                </div>
            </div>
            
        </div>
      </div>
      {/* <div classNameName="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-16">
        <div classNameName="max-w-2xl mx-auto text-center">
          <h2 classNameName="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our work
          </h2>
          <p classNameName="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div classNameName="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div classNameName="space-y-4">
            <span
              classNameName="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Alphabet Inc.
            </span>
            <h3 classNameName="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Official website
            </h3>
            <p classNameName="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
            <a href="#" title=""
              classNameName="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              role="button">
              View case study
              <svg aria-hidden="true" classNameName="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          <div classNameName="space-y-4">
            <span
              classNameName="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Microsoft Corp.
            </span>
            <h3 classNameName="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Management system
            </h3>
            <p classNameName="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
            <a href="#" title=""
              classNameName="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              role="button">
              View case study
              <svg aria-hidden="true" classNameName="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          <div classNameName="space-y-4">
            <span
              classNameName="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Adobe Inc.
            </span>
            <h3 classNameName="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Logo design
            </h3>
            <p classNameName="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
            <a href="#" title=""
              classNameName="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              role="button">
              View case study
              <svg aria-hidden="true" classNameName="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div> */}
    </Section>
  )
}

export default Portfolio