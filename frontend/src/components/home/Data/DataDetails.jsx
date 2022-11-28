/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BackToHome from '../BackToHome/BackToHome';


const DataDetails = () => {

    let { projectId } = useParams();

    const [projects, setProjects] = useState([]);
    const [singleProject, setSingleProject] = useState({});


    useEffect(() => {
        fetch('/projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])


    // FINDING MATCHING DATA
    useEffect(() => {
        const foundProject = projects.find(projects => projects.projectId === projectId);
        setSingleProject(foundProject);
    }, [projects]);



    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <BackToHome></BackToHome>
            <div className=" mt-10 pb-40 w-11/12 lg:6 mx-auto text-white">
                <div className="animate-bounceIn animate-animated bg-gray-500 dark:bg-slate-800 grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-full mx-auto rounded-box pt-5 pb-10 lg:py-10 lg:pl-10">
                    <div>
                        <img className="  mx-auto w-11/12 lg:w-full rounded-lg border-8 mb-5 lg:mb-0 border-gray-400 " src={singleProject?.projectIMG} alt="" />
                    </div>
                    <div>
                        <h2 className=" text-xl mb-2 font-semibold text-white">
                            <span className="text-emerald-400 dark:text-emerald-600"> {singleProject?.projectName} </span>
                        </h2>
                        <p className="text-sm mb-4 text-emerald-400 dark:text-gray-300">{singleProject?.projectType}</p>
                        <h3 className="text-gray-200 w-5/6 mx-auto mt-10">
                            {singleProject?.projectDescription}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDetails;