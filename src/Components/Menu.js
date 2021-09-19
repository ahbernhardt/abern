import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import FooterMenu from './../Blocks/footer/FooterMenu';
import Logo from "./Logo";
import {MenuButton, MenuToggle} from "../Styles/Header/MenuStyle";

class Menu extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open  = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    doSomethingBeforeOpen() {
        this.open();
    }

    render() {
        return (
            <MenuToggle className="menu-toggle align-self-center no-space">
                <MenuButton onClick={ this.doSomethingBeforeOpen.bind( this ) } type="button" className="btn btn-link border-0 p-0 transform-scale-h" data-toggle="modal" data-target="#menu-modal">
                    <span className="align-middle">Menu</span>
                    <i className="fas fa-grip-lines"/>
                </MenuButton>

                <Modal className="modal modal-adv-1 modal-body-pr fade"
                       id="menu-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="menu-modal"
                       aria-hidden="true"
                       dialogClassName="modal-full wrapper h-100"
                       ref={ node => this.chart = node }
                >

                    <Modal.Header>
                        <Logo />
                        <MenuButton onClick={ this.close } type="button" className="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">
                                <span className="align-middle">Close</span>
                                <i className="fas fa-times"/>
                            </span>
                        </MenuButton>
                    </Modal.Header>

                    <Modal.Body className="d-flex justify-content-between">
                        <div className="align-self-end">
                            <FooterMenu />
                        </div>

                        <div className="align-self-center animated fadeinright w-100">
                            <nav className="menu-primary">
                                <ul className="clearfix list-unstyled">
                                    <li className={ "menu-item" + ( window.location.pathname === '/' ? " current-menu-item" : "" ) }>
                                        <a title="Home" href={ process.env.PUBLIC_URL + "/" }>Home</a>
                                    </li>

                                    <li className={ "menu-item" + ( window.location.pathname === '/about' ? " current-menu-item" : "" ) }>
                                        <a title="About" href={ process.env.PUBLIC_URL + "/about" }>About</a>
                                    </li>

                                    <li className={ "menu-item" + ( window.location.pathname === '/works' ? " current-menu-item" : "" ) }>
                                        <a title="Works" href={ process.env.PUBLIC_URL + "/works" }>Works</a>
                                    </li>

                                    <li className={ "menu-item" + ( window.location.pathname === '/journal' ? " current-menu-item" : "" ) }>
                                        <a title="Journal" href={ process.env.PUBLIC_URL + "/journal" }>Journal</a>
                                    </li>

                                    <li className={ "menu-item" + ( window.location.pathname === '/contacts' ? " current-menu-item" : "" ) }>
                                        <a title="Contacts" href={ process.env.PUBLIC_URL + "/contacts" }>Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Modal.Body>
                </Modal>
            </MenuToggle>
        );
    }
}

export default Menu;