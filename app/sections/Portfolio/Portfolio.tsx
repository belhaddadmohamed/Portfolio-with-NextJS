import React from 'react'
import Section from '@/app/components/Section/Section'
import Project from '@/app/components/Project/Project'
// import Modal from '@/app/components/Modal/Modal'

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
          <Project
            image="/images/projects/prj_ecom.jpg"
            tag="E-commerce"
            date="20 March"
            title="Ecommerce Application"
            description="A robust ecommerce application built with Django."
            readTime="3 mins"
          />
          <Project
            image="/images/projects/prj_studybud.png"
            tag="Forum"
            date="20 March"
            title="Study Rooms"
            description="A robust ecommerce application built with Django, featuring user authentication, product management, and a seamless checkout process."
            readTime="3 mins"
          />
          <Project
            image="/images/projects/prj_insoovision.png"
            tag="Education"
            date="20 March"
            title="Insoovsision.dz"
            description="An innovative college application platform built with Django, providing students a collaborative environment."
            readTime="3 mins"
          />
          <Project
            image="/images/projects/prj_elearning.png"
            tag="Education"
            date="20 March"
            title="E-learning Platform"
            description="A comprehensive e-learning system built with LMS, offering a variety of courses and interactive learning tools."
            readTime="4 mins"
          />
          <Project
            image="/images/projects/prj_chat.avif"
            tag="Communication"
            date="20 March"
            title="Chat Application"
            description="A real-time chat application built with Django and WebSockets, providing seamless communication."
            readTime="5 mins"
          />
          <Project
            image="/images/projects/prj_crc.jpg"
            tag="Healthcare"
            date="20 March"
            title="Deep Learning Models for CRC Detection and Classification"
            description="A cutting-edge project utilizing deep learning models to detect and classify colorectal cancer from medical images."
            readTime="6 mins"
          />
        </div>
      </div>
      
      {/* <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our work
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <span
              className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Alphabet Inc.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Official website
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
            <a href="#" title=""
              className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              role="button">
              View case study
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            <span
              className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Microsoft Corp.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Management system
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
            <a href="#" title=""
              className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              role="button">
              View case study
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            <span
              className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Adobe Inc.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Logo design
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of people who share your interests.
            </p>
            <a href="#" title=""
              className="text-white bg-blue-700 justify-center hover:bg-blue-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              role="button">
              View case study
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
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