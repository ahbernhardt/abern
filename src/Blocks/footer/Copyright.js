import React from 'react';
import {CopyrightStyle} from "../../Styles/Footer/Copyright";

export const getCurrentYear = () => {
    const d = new Date()
    return d.getFullYear()
}

const Copyright = () => {
    return (
        <CopyrightStyle >
            <p>{getCurrentYear()} <span>©</span> Anh Bernhardt</p>
        </CopyrightStyle>
    );
};

export default Copyright;