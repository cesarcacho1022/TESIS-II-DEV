import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Typewriter} from 'react-simple-typewriter'
import bgBanner from '../../../assets/images/wallpaper.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bgBanner})`, backgroundSize: "cover"}} id="home"
             className="h-screen bg-gray-900 text-white text-center lg:text-left ">
            <div className=" pt-52 lg:pt-72 lg:w-2/3 mx-auto">
                <h1 className="text-xl lg:text-3xl pb-5 font-thin">¡BIENVENIDOS! </h1>
                <h1 className="text-2xl lg:text-6xl font-bold">Proyecto de <span
                    className="text-emerald-400">Tesis II</span>
                </h1>
                <h2 className="text-2xl  lg:text-5xl font-bold pt-5 mb-16"><span>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed="90"
                        deleteSpeed="50"
                        delaySpeed="1000"
                        words={['Análisis exploratorio', 'Regresión logística', 'Análisis de discriminante']}
                    />
                </span>
                </h2>
                <div className="pb-14">
                    <a href="https://github.com/" target="_blank" rel="noreferrer"
                       className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 text-xl py-2 bg-zinc-700 text-white rounded m-2"><i
                        className="fab fa-github hover:text-emerald-400 transition duration-300"></i></a>
                    <a href="https://www.linkedin.com//" target="_blank" rel="noreferrer"
                       className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 text-xl py-2  bg-zinc-700 text-white rounded m-2"><i
                        className="fab fa-linkedin hover:text-emerald-400 transition duration-300"></i></a>

                </div>
                <AnchorLink href="#project"
                            className="hover:bg-zinc-800 hover:text-white shadow-emerald-400/30 shadow-lg transition duration-500 mx-auto px-10 py-4  lg:px-12 lg:py-4  bg-emerald-400 rounded-full text-zinc-800 font-semibold">
                    Implementación
                </AnchorLink>
            </div>
        </div>
    );
};

export default Banner;
