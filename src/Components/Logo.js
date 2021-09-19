import {LogoLink, LogoLight, LogoDark} from "../Styles/Header/LogoStyles";
import React from "react";

export const Logo = ({theme}) => {
    return (
        <LogoLink>
            {theme === "light" ?
                <LogoDark xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 180 180">
                    <circle cx="42.22" cy="118.72" r="35.28" fill="none" stroke="#212121"
                            strokeWidth="7"/>
                    <path
                        d="M26.75,46.12c2.8-4.4,7-9.3,15.12-9.12A15.79,15.79,0,1,1,26.09,52.79a17,17,0,0,1,.19-3.24h0c0-13.86,9.48-25.68,33.34-25.09h48.21a32.38,32.38,0,0,1,32.38,32.38h0a32.39,32.39,0,0,1-32.38,32.39h31a32.38,32.38,0,0,1,32.38,32.38h0A32.39,32.39,0,0,1,138.87,154H116.75L66.9,24.46h0"
                        fill="none" stroke="#212121" strokeWidth="7"/>
                </LogoDark>
                :
                <LogoLight xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 180 180">
                    <circle cx="42.22" cy="118.72" r="35.28" fill="none" stroke="#f5f5f5"
                            strokeWidth="7"/>
                    <path
                        d="M26.75,46.12c2.8-4.4,7-9.3,15.12-9.12A15.79,15.79,0,1,1,26.09,52.79a17,17,0,0,1,.19-3.24h0c0-13.86,9.48-25.68,33.34-25.09h48.21a32.38,32.38,0,0,1,32.38,32.38h0a32.39,32.39,0,0,1-32.38,32.39h31a32.38,32.38,0,0,1,32.38,32.38h0A32.39,32.39,0,0,1,138.87,154H116.75L66.9,24.46h0"
                        fill="none" stroke="#f5f5f5"  strokeWidth="7"/>
                </LogoLight>}
        </LogoLink>
    )
}

export default Logo;