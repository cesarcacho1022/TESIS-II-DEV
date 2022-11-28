import React from 'react';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className=" dark:bg-[#212121] bg-slate-200 text-white pt-20 pb-10 mx-auto">
            <img className="mx-auto h-14 mb-3" src={logo} alt=""/>
            <div className="pt-7 pb-10">
                <a href="https://github.com/" target="_blank" rel="noreferrer"
                   className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 text-xl py-2 bg-slate-400 dark:bg-zinc-700 text-white rounded m-2"><i
                    className="fab fa-github hover:text-emerald-400 transition duration-300"></i></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                   className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 text-xl py-2  bg-slate-400 dark:bg-zinc-700 text-white rounded m-2"><i
                    className="fab fa-linkedin hover:text-emerald-400 transition duration-300"></i></a>
            </div>
            <p className="w-5/6 lg:w-full mx-auto text-sm text-gray-500 dark:text-gray-400">Ⓒ UNMSM | 2022</p>
        </div>
    );
};

export default Footer;