import React from 'react'
import './Preloader.css'
import { preloaderContext } from '../../../contexts/PreloaderContext.js';

const Preloader = () => {
    const isActive = React.useContext(preloaderContext);
    return (
        <div className={isActive ? "preloader preloader_active" : "preloader" }>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
