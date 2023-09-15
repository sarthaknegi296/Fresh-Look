import { Box } from '@chakra-ui/react';
import React from 'react'
import {Link, NavLink} from "react-router-dom"



function Header() {
    return (
        <Box fontFamily={"Syne"} className="shadow sticky z-50 top-0">
        <header >

            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">

                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center uppercase text-white text-xl font-semibold">
                        Shopkart
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white hover:bg-orange-700 focus:ring-1 focus:ring-orange-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in

                        </Link>

                        <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >

                            Sign Up

                        </Link>
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} uppercase border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >

                                    Home

                                </NavLink>
                            </li>

                           

                            <li>
                                <NavLink
                                    to="/products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} uppercase border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >

                                    Our products

                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} uppercase border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >

                                    About

                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} uppercase border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >

                                    Contact Us

                                </NavLink>
                            </li>
                    
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </Box>
    );
}

export default Header;