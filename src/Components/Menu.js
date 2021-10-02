import React from 'react';
import FooterMenu from './../Blocks/footer/FooterMenu';
import Logo from "./Logo";
import {
    MenuButton,
    MenuClose,
    MenuContent, MenuFooter,
    MenuModal, MenuModalHead,
    MenuPrimary,
    MenuUl
} from "../Styles/Header/MenuStyle";
import Popup from 'reactjs-popup';

export const Menu = ({theme}) => {
    return (
        <Popup theme={theme}
               trigger={
                   <MenuButton>
                       <span className="align-middle">Menu</span>
                       <i className="fas fa-grip-lines"/>
                   </MenuButton>
               }
               modal
               // nested
        >
            {close => (
                <MenuModal >
                    <MenuModalHead>
                        <Logo theme={theme}/>
                        <MenuClose onClick={close} >
                          <span aria-hidden="true">
                               <span >Close</span>
                              <i className="fas fa-times"/>
                        </span>
                        </MenuClose>
                    </MenuModalHead>

                    <MenuContent>
                        <MenuPrimary>
                            <MenuUl className="clearfix list-unstyled">
                                <li className={"menu-item" + (window.location.pathname === '/' ? " current-menu-item" : "")}>
                                    <a title="Home" href={process.env.PUBLIC_URL + "/"}>Home</a>
                                </li>
                                <li className={"menu-item" + (window.location.pathname === '/about' ? " current-menu-item" : "")}>
                                    <a title="About" href={process.env.PUBLIC_URL + "/about"}>About</a>
                                </li>
                                <li className={"menu-item" + (window.location.pathname === '/works' ? " current-menu-item" : "")}>
                                    <a title="Works" href={process.env.PUBLIC_URL + "/works"}>Works</a>
                                </li>
                                <li className={"menu-item" + (window.location.pathname === '/contacts' ? " current-menu-item" : "")}>
                                    <a title="Contacts" href={process.env.PUBLIC_URL + "/contacts"}>Contacts</a>
                                </li>
                            </MenuUl>
                        </MenuPrimary>
                        <MenuFooter>
                            <FooterMenu/>
                        </MenuFooter>
                    </MenuContent>
                </MenuModal>
            )}
        </Popup>

    );
}

export default Menu;