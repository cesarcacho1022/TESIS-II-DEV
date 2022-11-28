import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDarkMode} from "../../../hooks/useDarkMode";

const BackToHome = () => {

    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <div className="bg-gray-200 dark:bg-gray-900 pt-10">
            {
                isDarkMode ? <input data-tip="Cambiar tema" type="checkbox"
                                    className="toggle tooltip bg-emerald-400" onChange={toggleDarkMode}/> :
                    <input data-tip="Cambiar tema" type="checkbox"
                           className="toggle tooltip bg-emerald-400" defaultChecked
                           onChange={toggleDarkMode}/>
            }
            <div className="pt-10">
                <NavLink to="/" className="px-5 py-3 bg-emerald-400 rounded">Regresar al inicio</NavLink>
            </div>

        </div>
    );
};

export default BackToHome;