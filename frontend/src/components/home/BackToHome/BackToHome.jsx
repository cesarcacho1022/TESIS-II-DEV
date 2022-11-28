import React from 'react';
import {NavLink} from 'react-router-dom';

const BackToHome = () => {
    return (
        <div className=" bg-1 pt-10">
            <NavLink to="/" className="px-5 py-3 bg-emerald-400 rounded">Regresar al inicio</NavLink>
        </div>
    );
};

export default BackToHome;