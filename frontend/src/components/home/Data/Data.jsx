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
                <h2 className="text-xl my-7">Cargando información...</h2>
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
                        <Tab>Preparación</Tab>
                        <Tab>Análisis</Tab>
                        <Tab>Modelado</Tab>
                        <Tab>Todo</Tab>
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


                    <TabPanel id="Preparación">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold w-11/12 mx-auto">Preparación de datos</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(preparationProjects => preparationProjects.projectCategory === "Preparación").map(myPreparationProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myPreparationProjects.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myPreparationProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myPreparationProjects.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myPreparationProjects.projectType}</p>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myPreparationProjects.projectDetails}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myPreparationProjects.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </TabPanel>


                    <TabPanel id="Análisis">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold">Análisis de datos</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(analysisProjects => analysisProjects.projectCategory === "Análisis").map(myAnalysisProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myAnalysisProjects.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myAnalysisProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myAnalysisProjects.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myAnalysisProjects.projectType}</p>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myAnalysisProjects.projectDetails}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myAnalysisProjects.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </TabPanel>


                    <TabPanel id="Modelado">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold w-5/6 mx-auto">Modelado de datos</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                            {
                                data.filter(fullstackProjects => fullstackProjects.projectCategory === "Modelado").map(myModelingProjects =>
                                    <div data-aos="fade-up" data-aos-duration="800" key={myModelingProjects.projectId}
                                         className=" animate-bounceIn animate-animated grid grid-cols-1 lg:grid-cols-2 bg-zinc-800 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                                        <div>
                                            <img
                                                className="transform transition duration-300 hover:scale-125 mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 h-96"
                                                src={myModelingProjects.projectIMG} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-white text-xl mb-2 font-semibold">
                                                Project: <span
                                                className="text-emerald-400"> {myModelingProjects.projectName} </span>
                                            </h2>
                                            <p className="text-sm mb-4 text-emerald-400 font-light">{myModelingProjects.projectType}</p>
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myModelingProjects.projectDetails}
                                            </h3>
                                            <div className=" mt-16">
                                                <NavLink to={`/data/${myModelingProjects.projectId}`}
                                                         className="px-5 mx-2 text-gray-900 py-2 rounded bg-emerald-400 hover:bg-zinc-700 hover:text-white transition duration-300">View
                                                    Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </TabPanel>


                    <TabPanel id="Todo">
                        <h2 className="mt-10 mb-10 text-emerald-400 text-2xl font-semibold">Todo el proceso de datos</h2>
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
                                            <h3 className="text-gray-300 w-5/6 mx-auto mt-10">
                                                {myAllData.projectDetails}
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