"use client";

// import { useState } from "react";
import Image from "next/image";

interface ModalProps {
    imageUrl: string;
    title: string;
    description: string;
    projectLink: string;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ imageUrl, title, description, projectLink, isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <>
            <div
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden"
                onClick={onClose}
            >
                <div
                    className="relative p-4 w-full max-w-2xl max-h-full"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                >
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">
                            <div className="w-full">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto rounded-lg object-cover max-h-96"
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                onClick={onClose}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Close
                            </button>
                            {projectLink && (
                                <a
                                    href={projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;