import React from 'react';
import dataFooterMenu from '../../Data/footerMenu.json';
import {FooterMenuSecondary, FooterMenuUl} from "../../Styles/Footer/FooterMenu";

const FooterMenu = () => {
    return (
        <FooterMenuSecondary>
            <FooterMenuUl className="clearfix list-unstyled">
                { dataFooterMenu && dataFooterMenu.map( ( item, key ) => {
                    return (
                        <li key={ key }>
                            <a
                                title={ item.title }
                                className="btn btn-link transform-scale-h border-0 p-0"
                                href={ item.link }
                                target="_blank" rel="noopener noreferrer"
                            >
                                { item.title }
                            </a>
                        </li>
                    );
                } ) }
            </FooterMenuUl>
        </FooterMenuSecondary>
    );
};

export default FooterMenu;