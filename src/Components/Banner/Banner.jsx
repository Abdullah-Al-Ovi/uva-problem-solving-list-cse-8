import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Why here in

                            <span className="sm:block"> this website?</span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">

                            <ul className="space-y-4 text-left">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>You can convert your UVA user name to UVA user id</span>
                                </li>



                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>You can see your UVA submission list</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Contest ranking of BSUCSE-8</span>
                                </li>
                            </ul>
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">

                            <Link to='/features' className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-gray-300 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative">Get Started</span>
                            </Link>
                            
                        </div>
                        <div className="mt-16 flex flex-col md:flex- gap-5 w-full">
                            <p className={`text-sm text-gray-500`}>
                                © Copyright 2024. All rights reserved.
                            </p>
                            <p className={`text-sm text-gray-500`}>Designed & Developed by Abdullah Al Ovi</p>
                            <p className={`text-sm text-gray-500`}>Co-operated by Md Emon Howlader</p>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Banner;