import React, {useEffect, useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './Data.css';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Data = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/projectData.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    useEffect(() => {
        AOS.init();
    }, []);

    if (data.length === 0) {
        return (
            <div className="bg-zinc-800 text-white py-5">
                <h1 className=" py-24 text-4xl font-bold">Datos</h1>
                <h2 className="text-xl my-7">Cargando información..</h2>
                <div className="flex justify-center items-center">
                    <div
                        className="
            loader
            ease-linear
            rounded-full
            border-8 border-t-8 border-gray-200
            h-32
            w-32"
                    ></div>
                </div>
            </div>
        )
    }


    return (
        <div id="data" className="bg-slate-100 dark:bg-[#1c1c1c] text-slate-700 dark:text-white pb-20 pt-10">
            <div className="container mx-auto">
                <h1 className=" pt-24 pb-5 text-4xl font-bold ">Datos</h1>
                <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto"/>
                <Tabs>
                    <TabList className="w-11/12 lg:w-full mx-auto">
                        <Tab>Exploración</Tab>
                        <Tab>Javascript</Tab>
                        <Tab>React</Tab>
                        <Tab>Fullstack</Tab>
                        <Tab>All Data</Tab>
                    </TabList>

                    <TabPanel id="html">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold">Exploración de datos</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(explorationProjects => explorationProjects.projectCategory === "Exploración").map(myExplorationProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myExplorationProjects.projectId}
                                         className="animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-slate-200 dark:bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className=" transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 dark:border-gray-400 border-slate-300 h-96"
                                                src={myExplorationProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className=" text-xl mb-2 font-semibold">
                                                <span className="dark:text-emerald-400 text-emerald-500"> {myExplorationProjects.projectName}</span>
                                            </h2>
                                            <p className="text-sm mb-4 dark:text-emerald-400 text-slate-800 font-light">{myExplorationProjects.projectType}</p>
                                            <h3 className="dark:text-gray-300 text-slate-700 w-5/6 mx-auto mt-10">
                                                {myExplorationProjects.projectDetails}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myExplorationProjects.projectId}`}
                                                         className="px-5 mx-2 bg-emerald-500 text-white dark:text-gray-900 py-2 rounded dark:bg-emerald-400 dark:hover:bg-zinc-700 hover:bg-slate-300 dark:hover:text-white hover:text-slate-700 transition duration-300 animate-infinite ">Ver detalles
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </TabPanel>


                    <TabPanel id="Javascript">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold w-11/12 mx-auto">Data using
                            html, css & Javascript</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(javascriptProjects => javascriptProjects.projectCategory === "Javascript").map(myJavascriptProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myJavascriptProjects.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myJavascriptProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myJavascriptProjects.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myJavascriptProjects.projectType}</p>
                                            <h2 className='text-white'>
                                                Technology Used:
                                            </h2>
                                            <div className="mt-5">
                                                <button
                                                    className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">html
                                                </button>
                                                <button
                                                    className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">css
                                                </button>
                                                <button
                                                    className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Javascript
                                                </button>
                                            </div>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myJavascriptProjects.projectDescription}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myJavascriptProjects.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </TabPanel>


                    <TabPanel id="React">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold">Data using React</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(reactProjects => reactProjects.projectCategory === "React" || reactProjects.projectCategory === "Fullstack").map(myReactProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myReactProjects.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myReactProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myReactProjects.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myReactProjects.projectType}</p>
                                            <h2 className='text-white'>
                                                Technology Used:
                                            </h2>
                                            <div className="mt-5">
                                                <button
                                                    className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">JSX
                                                </button>
                                                <button
                                                    className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Javascript
                                                </button>
                                                <button
                                                    className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">React
                                                </button>
                                            </div>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myReactProjects.projectDescription}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myReactProjects.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </TabPanel>


                    <TabPanel id="Fullstack">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold w-5/6 mx-auto">Fullstack Data
                            using MERN stack & also Next JS</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(fullstackProjects => fullstackProjects.projectCategory === "Fullstack").map(myFullstackProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myFullstackProjects.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myFullstackProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myFullstackProjects.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myFullstackProjects.projectType}</p>
                                            <h2 className='text-white'>
                                                Technology Used:
                                            </h2>
                                            <div className="mt-5">
                                                {
                                                    myFullstackProjects.next === true ? <>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Next
                                                                JS
                                                            </button>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Mongoose
                                                            </button>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">SSR
                                                            </button>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Redux
                                                            </button>
                                                        </>

                                                        :

                                                        <>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">React
                                                            </button>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Node.js
                                                            </button>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Express
                                                            </button>
                                                            <button
                                                                className=" transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Mongodb
                                                            </button>
                                                        </>
                                                }
                                            </div>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myFullstackProjects.projectDescription}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myFullstackProjects.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </TabPanel>


                    <TabPanel id="All Projects">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold">All noteworthy projects</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.map(myAllData =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myAllData.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myAllData.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myAllData.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myAllData.projectType}</p>
                                            <h2 className='text-white'>
                                                Technology Used:
                                            </h2>
                                            <div className="mt-5">
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">html
                                                </button>
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">css
                                                </button>
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Javascript
                                                </button>
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">React
                                                </button>
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Node.js
                                                </button>
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Express
                                                </button>
                                                <button
                                                    className="transform transition cursor-default duration-300 hover:scale-125 px-3 font-light py-1 text-sm bg-zinc-700 text-emerald-400 rounded-full m-1">Mongodb
                                                </button>
                                            </div>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myAllData.projectDescription}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myAllData.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Data;