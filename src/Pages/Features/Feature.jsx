import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({url,title,description}) => {
    return (
        <div className="max-w-sm p-5 space-y-3 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-md ">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                
                <Link to={url} className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-gray-700 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative">Get Started</span>
                            </Link>
            </div>
    );
};

export default Feature;