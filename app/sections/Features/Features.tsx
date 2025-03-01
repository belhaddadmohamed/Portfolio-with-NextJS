import React from 'react'
import Section from '@/app/components/Section/Section'
import Skill from '@/app/components/Skill/Skill'

const Features = () => {
    return (
        <Section className="bg-white dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fullstack Development Skills</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Explore a comprehensive set of skills essential for fullstack development, encompassing both frontend and backend technologies.</p>
                </div>
                <div className="space-y-8 grid cols-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    <Skill 
                        image="/images/icons/nextjs-svgrepo-com.svg"
                        title="Next.js"
                        description="Build server-side rendered React applications with Next.js, a powerful framework for production-ready web applications."
                    />
                    <Skill 
                        image="/images/icons/javascript-svgrepo-com.svg"
                        title="JavaScript"
                        description="Enhance web pages with dynamic content and interactive features using JavaScript."
                    />
                    <Skill 
                        image="/images/icons/react-svgrepo-com.svg"
                        title="React"
                        description="Build modern, scalable web applications using React, a popular JavaScript library for building user interfaces."
                    />
                    <Skill 
                        image="/images/icons/nodejs-icon-svgrepo-com.svg"
                        title="Node.js"
                        description="Develop server-side applications using Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine."
                    />
                    <Skill 
                        image="/images/icons/express-svgrepo-com.svg"
                        title="Express.js"
                        description="Create robust APIs and web applications using Express.js, a minimal and flexible Node.js web application framework."
                    />
                    <Skill 
                        image="/images/icons/database-svgrepo-com.svg"
                        title="Database Management"
                        description="Work with databases like MongoDB, MySQL, and PostgreSQL to store and manage data efficiently."
                    />
                    <Skill 
                        image="/images/icons/tailwind-svgrepo-com.svg"
                        title="Tailwind CSS"
                        description="Utilize Tailwind CSS to rapidly build custom designs without writing any CSS."
                    />
                    <Skill 
                        image="/images/icons/django-svgrepo-com.svg"
                        title="Django"
                        description="Develop robust backend applications using Django, a high-level Python web framework."
                    />
                    <Skill 
                        image="/images/icons/python-svgrepo-com.svg"
                        title="Python"
                        description="Utilize Python for data analysis, machine learning, and automation tasks."
                    />
                    <Skill 
                        image="/images/icons/pandas-svgrepo-com.svg"
                        title="Pandas"
                        description="Manipulate and analyze data using Pandas, a powerful data analysis library for Python."
                    />
                    <Skill 
                        image="/images/icons/numpy-svgrepo-com.svg"
                        title="NumPy"
                        description="Perform numerical computations using NumPy, a fundamental package for scientific computing with Python."
                    />
                    <Skill 
                        image="/images/icons/tensorflow-svgrepo-com.svg"
                        title="TensorFlow"
                        description="Implement machine learning algorithms and models using libraries like scikit-learn and TensorFlow."
                    />
                </div>
            </div>
        </Section>
    )
}

export default Features