import React from 'react';
// import { Link } from 'react-scroll';
import {PageTitleHomeSection, HomeWrapper, Title} from "../../Styles/Page-Title/PageTitleHomeStyles";

const PageTitleHome = () => {
    return (
        <PageTitleHomeSection id="page-title" className="block">
            <HomeWrapper >
                <div className="row">
                    <div className="col col-1 position-relative">
                        <Title className="title">
                            {/*<h1 className="h">Hello<span className="dot">.</span></h1>*/}
                            <div className="title-clone">Hello</div>
                        </Title>

                        {/*<div className="spacer p-top-lg">*/}
                        {/*    <p className="p-large w-75">My name is Anh Bernhardt. I’m a software developer with and heres is my portfolio. Have a look.</p>*/}
                        {/*</div>*/}
                    </div>

                    {/*<div className="col col-2 d-none d-sm-block">*/}
                    {/*    <div className="d-flex">*/}
                    {/*        <div className="align-self-start w-100">*/}
                    {/*            <div className="img object-fit">*/}
                    {/*                <div className="object-fit-cover">*/}
                    {/*                    <img src="assets/img/placeholder/527x600.jpg" className="img-fluid" alt="Luca Reynolds" />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="align-self-end p-left-scroll">*/}
                    {/*            <Link to="my-works"*/}
                    {/*                  title="Scroll"*/}
                    {/*                  spy={ true }*/}
                    {/*                  smooth={ true }*/}
                    {/*                  duration={ 900 }*/}
                    {/*                  className="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex"*/}
                    {/*                  href="#my-works"*/}
                    {/*            >*/}
                    {/*                <span className="vertical-text">*/}
                    {/*                    <span>S</span>*/}
                    {/*                    <span>c</span>*/}
                    {/*                    <span>r</span>*/}
                    {/*                    <span>o</span>*/}
                    {/*                    <span>l</span>*/}
                    {/*                    <span>l</span>*/}
                    {/*                </span>*/}

                    {/*                <span className="align-self-end">*/}
                    {/*                    <i className="icon-c icon-arrow-down" />*/}
                    {/*                </span>*/}
                    {/*            </Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </HomeWrapper>
        </PageTitleHomeSection>
    );
};

export default PageTitleHome;
