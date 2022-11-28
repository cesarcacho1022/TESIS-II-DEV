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

    const projectForm = (e) => {
        setProcessing(true);
        e.preventDefault();

        emailjs.sendForm("service_iqmhj5p",
            "template_p2zlpfe",
            e.target,
            "user_o3an5FHcGVWKryAWQOTFh"
        ).then(res => {
            console.log(res);
            if (res.status === 200) {
                Swal.fire(
                    'Message has been sent!',
                    'Please wait for a reply from me',
                    'success'
                )
                e.target.reset();
                setProcessing(false);
            } else {
                Swal.fire(
                    'Message could not be sent!',
                    'Please try again later',
                    'error'
                )
                e.target.reset();
                setProcessing(false);
            }
        }).catch(err => {
            console.log(err);
        });

    }


    return (
        <div id="project" className=" dark:bg-[#1c1c1c] bg-slate-100 text-white pb-32">
            <h1 className=" pt-24 pb-5 text-4xl font-bold text-slate-700 dark:text-white">Proyecto</h1>
            <hr className="py-1 bg-emerald-400 w-32 border-none rounded mb-20 mx-auto"/>
            <div data-aos="fade-up" data-aos-duration="800"
                 className="dark:bg-zinc-800 bg-slate-300 w-11/12 lg:w-1/2 mx-auto py-5 lg:py-14 rounded-box">
                <form onSubmit={projectForm} className="flex flex-col w-11/12 lg:w-5/6 mx-auto" action="">
                    <input required className="rounded outline-none text-gray-900 px-5  py-4 my-4" type="text"
                           name="user_name" id="" placeholder="Your Name"/>
                    <input required className=" rounded outline-none text-gray-900 px-5 py-4 my-4" type="email"
                           name="user_email" id="" placeholder="Email"/>
                    <textarea required className=" text-gray-900 outline-none px-5 pt-5 rounded my-4"
                              name="user_message" placeholder="Type your message" id="" cols="30" rows="5"></textarea>
                    {
                        processing ? <input
                                className=" rounded text-white dark:text-gray-900 cursor-pointer bg-emerald-500 dark:bg-emerald-400 my-4 px-20 py-4"
                                type="submit" value="Sending..."/> :
                            <input
                                className=" rounded text-white dark:text-gray-900 cursor-pointer bg-emerald-500 dark:bg-emerald-400 my-4 px-20 py-4"
                                type="submit" value="SEND"/>
                    }
                </form>
            </div>
        </div>
    );
};

export default Project;