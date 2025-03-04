"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/app/components/Modal/Modal'

interface ProjectProps {
    image: string;
    tag: string;
    date: string;
    title: string;
    description: string;
    readTime: string;
}


const Project = (props: ProjectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Modal imageUrl={props.image}
                title={props.title}
                description={props.description}
                projectLink={"link"}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)} />



            <div className="rounded overflow-hidden shadow-lg" onClick={() => setIsOpen(true)}>
                <a href="#"></a>
                <div className="relative">
                    <a href="#">
                        <Image className="w-full"
                            src={props.image}
                            alt="Sunset in the mountains"
                            width={100}
                            height={50} />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                    <a href="#">
                        <div
                            className="absolute bottom-0 left-0 bg-blue-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
                            {props.tag}
                        </div>
                    </a>
                    {/* <a href="!#">
                        <div
                            className="text-sm absolute top-0 right-0 bg-blue-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
                            <span className="font-bold">{props.date.split(' ')[0]}</span>
                            <small>{props.date.split(' ')[1]}</small>
                        </div>
                    </a> */}
                </div>


                <div className="px-6 py-4">
                    <a href="#"
                        className="font-semibold text-lg inline-block hover:text-blue-600 transition duration-500 ease-in-out">
                        {props.title}</a>
                    <p className="text-gray-500 text-sm">
                        {props.description}
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
                        <span className="ml-1 text-gray-400 text-sm italic">{props.readTime} read</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Project