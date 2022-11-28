import React, {useEffect} from 'react';
import photo from '../../../assets/images/photo.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div id="about" className=" pb-36 bg-slate-100 dark:bg-[#1c1c1c] text-zinc-800 dark:text-white ">
            <div className="container mx-auto">
                <h1 className=" pt-24 pb-5 text-4xl font-bold ">Sobre Mí</h1>
                <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto"/>
                <div data-aos="fade-up" data-aos-duration="800"
                     className=" flex items-center flex-col lg:flex-row w-11/12 mx-auto bg-slate-200 dark:bg-zinc-800 py-10 px-3 lg:p-16 rounded-box lg:border-l-8 border-slate-300 dark:border-zinc-600 ">
                    <div className="lg:w-1/3">
                        <img
                            className="transform transition duration-300 hover:scale-110 h-60 mb-10 mx-auto lg:h-80 border-8 border-slate-400 dark:border-zinc-500 rounded-full"
                            src={photo} alt=""/>
                        <a href="https://github.com/" target="_blank" rel="noreferrer"
                           className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 bg-slate-300 text-3xl py-2 dark:bg-zinc-700 dark:text-white rounded m-2"><i
                            className="fab fa-github text-slate-700 dark:text-slate-300 dark:hover:text-emerald-400 transition duration-300"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                           className="px-4 transform transition duration-300 hover:scale-110 border-bottom border-b-2 border-emerald-400 bg-slate-300 dark:bg-zinc-700 text-3xl py-2 dark:text-white rounded m-2"><i
                            className="fab fa-linkedin text-slate-700 dark:text-slate-300 dark:hover:text-emerald-400 transition duration-300"></i></a>
                    </div>
                    <div className="lg:w-2/3 text-center lg:text-left lg:pl-10">
                        <h1 className=" text-2xl lg:text-4xl text-slate-800  dark:text-emerald-400 pt-10 lg:pt-0">
                            Cesar Cacho</h1>
                        <p className=" italic font-extralight lg:text-xl text-gray-700 dark:text-gray-400 pt-2">
                            Apasionado por los datos</p><br/>
                        <p className="text-gray-600 dark:text-gray-400 lg:w-full ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p> <br/>
                        <h3 className="text-sm lg:text-lg mb-5   dark:text-gray-400">Tecnologías que estoy utilizando:
                        </h3>
                        <div className=" ">
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> Python
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> Colab
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> Flask
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> JavaScript
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> Html
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> TailwindCSS
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> React
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> Amazon EC2
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 dark:bg-zinc-700 dark:text-emerald-400 text-white rounded-full m-1"> Amazon Redshift
                            </button>
                        </div>
                        <br/>
                        <h3 className="text-sm lg:text-lg mb-5 text-gray-600  dark:text-gray-400">Técnicas que estoy utilizando:
                        </h3>
                        <div>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white dark:bg-zinc-700 dark:text-emerald-400 rounded-full m-1"> Exploración de datos
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white dark:bg-zinc-700 dark:text-emerald-400 rounded-full m-1"> Análisis exploratorio
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white dark:bg-zinc-700 dark:text-emerald-400 rounded-full m-1"> Correlación de datos
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white dark:bg-zinc-700 dark:text-emerald-400 rounded-full m-1"> Modelos predictivos
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white dark:bg-zinc-700 dark:text-emerald-400 rounded-full m-1"> Regresión logística
                            </button>
                            <button
                                className="px-3 transform transition cursor-default duration-300 hover:scale-110 font-light py-1 text-sm bg-emerald-500 text-white dark:bg-zinc-700 dark:text-emerald-400 rounded-full m-1"> Análisis de discriminante
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;