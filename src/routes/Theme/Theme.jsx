import React, { useEffect, useState } from 'react';
import '../../styles/Theme/Theme.scss';
import { THEME_COLORS } from '../../utils/constants';

const Theme = () => {
    const themeColor = localStorage.getItem("theme")

    const handleThemeChange = (theme) => {
        localStorage.setItem("theme", `theme-${theme}`)
        document.body.className = `theme-${theme}`
    };

    return (
        <div className='Theme'>
            <h1 className='Theme__Title'>Change Theme</h1>
            <div className='Theme__Container'>
                {THEME_COLORS?.map(theme => (
                    <span
                        onClick={() => handleThemeChange(theme.name)}
                        className='Theme__Container__Select'
                        key={theme.id}
                        style={{ backgroundColor: theme.color, border: theme.name === themeColor ? `5px solid ${themeColor}` : '1px solid white' }}
                    >
                        {theme.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Theme;
