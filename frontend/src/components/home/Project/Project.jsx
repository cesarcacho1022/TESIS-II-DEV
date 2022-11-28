import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {

    const [AMT_INCOME_TOTAL, setAMT_INCOME_TOTAL] = useState('');
    const [AMT_CREDT, setAMT_CREDT] = useState('');
    const [NAME_INCOME, setNAME_INCOME] = useState('');
    const [NAME_EDUCATION, setNAME_EDUCATION] = useState('');
    const [TERM_MONTH, setTERM_MONTH] = useState('');
    const [CNT_CHILDRE, setCNT_CHILDRE] = useState('');
    const [AGE, setAGE] = useState('');

    const [predictData, setPredictData] = useState([]);
    const [isPredict, setIsPredicct] = useState(false);

    const onAMT_INCOME_TOTAL = e => setAMT_INCOME_TOTAL(e.target.value);
    const onAMT_CREDT = e => setAMT_CREDT(e.target.value);
    const onNAME_INCOME = e => setNAME_INCOME(e.target.value);
    const onNAME_EDUCATION = e => setNAME_EDUCATION(e.target.value);
    const onTERM_MONTH = e => setTERM_MONTH(e.target.value);
    const onCNT_CHILDRE = e => setCNT_CHILDRE(e.target.value);
    const onAGE = e => setAGE(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        const data = {AMT_INCOME_TOTAL, AMT_CREDT, NAME_INCOME, NAME_EDUCATION, TERM_MONTH, CNT_CHILDRE, AGE};
        const requestOptions = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST"
            },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:8080/predict', {method: "POST", body: JSON.stringify(data)})
            .then(response => response.json())
            .then(data => setPredictData(data));

        setIsPredicct(true);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="project" className=" dark:bg-[#1c1c1c] bg-slate-100 text-white pb-32">
            <h1 className=" pt-24 pb-5 text-4xl font-bold text-slate-700 dark:text-white">Proyecto</h1>
            <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto"/>
            <div data-aos="fade-up" data-aos-duration="800"
                 className="dark:bg-zinc-800 bg-slate-300 w-11/12 lg:w-1/2 mx-auto py-5 lg:py-14 rounded-box">

                <form method="post" className="flex flex-col w-11/12 lg:w-5/6 mx-auto" action="">

                    <h3 className="text-slate-700 dark:text-white mt-2">AMT_INCOME_TOTAL</h3>
                    <input required className="rounded outline-none text-gray-900 px-5  py-4 my-4" type="number"
                           step="0.01" name="AMT_INCOME_TOTAL" placeholder="AMT_INCOME_TOTAL"
                           onChange={onAMT_INCOME_TOTAL}/>

                    <h3 className="text-slate-700 dark:text-white mt-2">AMT_CREDT</h3>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="number"
                           step="0.01" name="AMT_CREDT" placeholder="AMT_CREDT" onChange={onAMT_CREDT}/>

                    <h3 className="text-slate-700 dark:text-white mt-2">NAME_INCOME</h3>
                    <select required className="rounded outline-none text-gray-900 px-5  py-4 my-4"
                            name="NAME_EDUCATION" id="NAME_INCOME" onChange={onNAME_INCOME}>
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
                    <select required className="rounded outline-none text-gray-900 px-5  py-4 my-4"
                            name="NAME_EDUCATION" id="NAME_EDUCATION" onChange={onNAME_EDUCATION}>
                        <option value="1">Academic degree</option>
                        <option value="2">Higher education</option>
                        <option value="3">Incomplete higher</option>
                        <option value="4">Lower secondary</option>
                        <option value="5">Secondary / secondary special</option>
                    </select>

                    <h3 className="text-slate-700 dark:text-white mt-2">TERM_MONTH</h3>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="number"
                           name="TERM_MONTH" placeholder="TERM_MONTH" onChange={onTERM_MONTH}/>

                    <h3 className="text-slate-700 dark:text-white mt-2">CNT_CHILDRE</h3>
                    <input required className="rounded outline-none text-gray-900 px-5  py-4 my-4" type="number"
                           name="CNT_CHILDRE" placeholder="CNT_CHILDRE" onChange={onCNT_CHILDRE}/>

                    <h3 className="text-slate-700 dark:text-white mt-2">AGE</h3>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="number"
                           name="AGE" placeholder="AGE" onChange={onAGE}/>

                    <input
                        className=" rounded text-white dark:text-gray-900 cursor-pointer bg-emerald-500 dark:bg-emerald-400 my-4 px-20 py-4"
                        type="submit" value="PREDECIR" onClick={handleSubmit}/>
                </form>

                {
                    isPredict ? <h1 className=" pt-10 pb-5 text-4xl font-bold text-slate-700 dark:text-white">predictData</h1> :
                        <h1 className=" pt-10 pb-5 text-4xl font-bold text-red-500 dark:text-red-400">predictData</h1>
                }

            </div>
        </div>
    );
};

export default Project;