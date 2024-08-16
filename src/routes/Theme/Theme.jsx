import React, { useEffect, useState } from 'react';
import '../../styles/Theme/Theme.scss';
import { THEME_COLORS } from '../../utils/constants';

const Theme = () => {
    const themeColor = localStorage.getItem("theme")

    const [currentTheme, setCurrentTheme] = useState({
        color: themeColor.replace("theme-","") || "",
        name: themeColor.replace("theme-","") || ""
    })


    const handleThemeChange = (theme) => {
        localStorage.setItem("theme", `theme-${theme.name}`)
        setCurrentTheme({
            color: theme.color,
            name: theme.name
        })
        document.body.className = `theme-${theme.name}`
    };

    return (
        <div className='Theme'>
            <h1 className='Theme__Title'>Change Theme</h1>
            <span className='Theme__Current'>
                <p className='Theme__Current__Label'>Current Theme</p>
                <p className='Theme__Current__Color' style={{ backgroundColor: currentTheme.color }}>{currentTheme.name}</p>
            </span>
            <div className='Theme__Container'>
                {THEME_COLORS?.map(theme => (
                    <span
                        onClick={() => handleThemeChange(theme)}
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
