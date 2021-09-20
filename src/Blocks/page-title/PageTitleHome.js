import React from 'react';
// import { Link } from 'react-scroll';
import {PageTitleHomeSection, HomeWrapper, Title} from "../../Styles/Page-Title/PageTitleHomeStyles";
// import Image from '../../Assets/image/anhbernhardt.jpeg';
const PageTitleHome = () => {
    return (
        <PageTitleHomeSection >
            <HomeWrapper >
                <div className="row">
                    {/*<div className="position-relative">*/}
                        <Title className="title">
                            <h1>Hello<span className="dot">.</span></h1>
                            {/*<div className="title-clone">Hello</div>*/}
                            <p>
                                My name is Anh Bernhardt. <br/>
                                I’m a software developer.<br/>
                                <br/>
                                <br/>
                                <span>Currently this website is still in process. <br/>
                                    You can check-out my other website at
                                <a
                                    href="https://anhnguyen.page"
                                    target="_blank" rel="noopener noreferrer"
                                > anhnguyen.page</a>
                                </span>
                            </p>
                        </Title>
                    {/*</div>*/}

                    {/*<div className="col col-2 d-none d-sm-block">*/}
                    {/*    <div className="d-flex">*/}
                    {/*        <div className="align-self-start w-100">*/}
                    {/*            <div className="img object-fit">*/}
                    {/*                <div className="object-fit-cover">*/}
                    {/*                    <img src={Image} className="img-fluid" alt="Anh Bernhardt" />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </HomeWrapper>
        </PageTitleHomeSection>
    );
};

export default PageTitleHome;
