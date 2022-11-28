import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {

    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="project" className=" dark:bg-[#1c1c1c] bg-slate-100 text-white pb-32">
            <h1 className=" pt-24 pb-5 text-4xl font-bold text-slate-700 dark:text-white">Proyecto</h1>
            <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto"/>
            <div data-aos="fade-up" data-aos-duration="800" className="dark:bg-zinc-800 bg-slate-300 w-11/12 lg:w-1/2 mx-auto py-5 lg:py-14 rounded-box">

                <form method="post" className="flex flex-col w-11/12 lg:w-5/6 mx-auto" action="">

                    <h3 className="text-slate-700 dark:text-white mt-2">AMT_INCOME_TOTAL</h3>
                    <input required className="rounded outline-none text-gray-900 px-5  py-4 my-4" type="number" step="0.01" name="AMT_INCOME_TOTAL" placeholder="AMT_INCOME_TOTAL"/>

                    <h3 className="text-slate-700 dark:text-white mt-2">AMT_CREDT</h3>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="number" step="0.01" name="AMT_CREDT" placeholder="AMT_CREDT"/>

                    <h3 className="text-slate-700 dark:text-white mt-2">NAME_INCOME</h3>
                    <select required className="rounded outline-none text-gray-900 px-5  py-4 my-4" name="NAME_INCOME" id="NAME_INCOME">
                        <option value="1">Businessman</option>
                        <option value="2">Commercial associate</option>
                        <option value="3">Maternity leave</option>
                        <option value="4">Pensioner</option>
                        <option value="5">State servant</option>
                        <option value="6">Student</option>
                        <option value="7">Unemployed</option>
                        <option value="8">Working</option>
                    </select>

                    <h3 className="text-slate-700 dark:text-white mt-2">NAME_EDUCATION</h3>
                    <select required className="rounded outline-none text-gray-900 px-5  py-4 my-4" name="NAME_EDUCATION" id="NAME_EDUCATION">
                        <option value="1">Academic degree</option>
                        <option value="2">Higher education</option>
                        <option value="3">Incomplete higher</option>
                        <option value="4">Lower secondary</option>
                        <option value="5">Secondary / secondary special</option>
                    </select>

                    <h3 className="text-slate-700 dark:text-white mt-2">TERM_MONTH</h3>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="number" name="TERM_MONTH" placeholder="TERM_MONTH"/>

                    <h3 className="text-slate-700 dark:text-white mt-2">CNT_CHILDRE</h3>
                    <input required className="rounded outline-none text-gray-900 px-5  py-4 my-4" type="number" name="CNT_CHILDRE" placeholder="CNT_CHILDRE"/>

                    <h3 className="text-slate-700 dark:text-white mt-2">AGE</h3>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="number" name="AGE" placeholder="AGE"/>

                    <input
                        className=" rounded text-white dark:text-gray-900 cursor-pointer bg-emerald-500 dark:bg-emerald-400 my-4 px-20 py-4"
                        type="submit" value="PREDECIR"/>
                </form>

                {
                    1 ? <h1 className=" pt-10 pb-5 text-4xl font-bold text-slate-700 dark:text-white">APLICA</h1> :
                        <h1 className=" pt-10 pb-5 text-4xl font-bold text-red-500 dark:text-red-400">NO APLICA</h1>
                }

            </div>
        </div>
    );
};

export default Project;