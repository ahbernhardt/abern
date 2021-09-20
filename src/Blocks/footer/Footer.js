import React from 'react';
import Copyright from './Copyright';
import FooterMenu from './FooterMenu';
import {MainFooter, FooterWrapper} from "../../Styles/Footer/Footer";

const Footer = () => {
    return (
        <MainFooter className="site-footer">
            <FooterWrapper className="wrapper no-space">
                    <div className="col-xl-4 col-lg-4 align-self-center">
                        <Copyright />
                    </div>

                    <div className="col-xl-8 col-lg-8 align-self-center">
                        <div className="menu float-xl-right float-lg-right">
                            <FooterMenu />
                        </div>
                    </div>
            </FooterWrapper>
        </MainFooter>
    );
};

export default Footer;