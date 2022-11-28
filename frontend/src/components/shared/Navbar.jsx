import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/images/logo.png'
import {useDarkMode} from '../../hooks/useDarkMode';

const Navbar = () => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();


    return (
        <>
            <nav className="sticky top-0 w-full z-50">
                <div className="navbar bg-white text-zinc-800 dark:bg-zinc-800 dark:text-white h-16 lg:h-20">
                    <div className="flex-1 px-2 mx-2">
                        <AnchorLink href="#home">
                            <img className="inline xl:pl-32 h-12" src={logo} alt=""/>
                        </AnchorLink>
                        <AnchorLink href="#home"><span className="hidden md:inline font-bold pl-2 text-lg md:text-2xl ">
                            Proyecto Tesis II
                        </span></AnchorLink>
                    </div>
                    <div className="flex-none hidden px-2 mx-2 lg:flex">
                        <div className="flex items-center">
                            <AnchorLink href="#home"
                                        className="btn hover:bg-slate-200 dark:hover:bg-zinc-700 btn-ghost rounded-btn mx-2">
                                INICIO
                            </AnchorLink>
                            <AnchorLink href="#about"
                                        className="btn hover:bg-slate-200 dark:hover:bg-zinc-700 btn-ghost rounded-btn mx-3">
                                SOBRE MÍ
                            </AnchorLink>
                            <AnchorLink href="#data"
                                        className="btn hover:bg-slate-200 dark:hover:bg-zinc-700 btn-ghost rounded-btn mx-3">
                                DATOS
                            </AnchorLink>
                            <AnchorLink href="#project"
                                        className="btn border-none px-7 py-2 rounded hover:bg-slate-200 dark:hover:bg-zinc-700 bg-emerald-400 text-white hover:text-slate-800 dark:text-zinc-900 dark:hover:text-white transition duration-500 ml-3">
                                PROYECTO
                            </AnchorLink>
                        </div>
                    </div>
                    <div className='items-center flex '>
                        <span className='px-2'><i
                            className="fas fa-moon text-lg text-slate-500 dark:text-white"></i></span>
                        {
                            isDarkMode ? <input data-tip="Cambiar tema" type="checkbox"
                                                className="toggle tooltip bg-emerald-400" onChange={toggleDarkMode}/> :
                                <input data-tip="Cambiar tema" type="checkbox"
                                       className="toggle tooltip bg-emerald-400" defaultChecked
                                       onChange={toggleDarkMode}/>
                        }
                        <span className='px-2'><i
                            className="fas fa-sun text-xl xl:pr-28  text-slate-500 dark:text-white"></i></span>
                    </div>
                    <div className="flex-none md:hidden dropdown dropdown-end">
                        <button tabIndex="0" className="btn hover:bg-zinc-700 btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0"
                            className="py-7 shadow-lg mt-96 menu dropdown-content text-gray-900  bg-emerald-400 rounded-lg w-52">
                            <li>
                                <AnchorLink href="#home"
                                            className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    INICIO
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#about"
                                            className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    SOBRE MÍ
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#data"
                                            className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    DATOS
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href="#project"
                                            className="btn hover:text-white bg-emerald-300 border-0 rounded-btn mx-3 my-1">
                                    PROYECTO
                                </AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;