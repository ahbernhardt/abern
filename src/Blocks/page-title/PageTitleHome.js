import React from 'react';
// import { Link } from 'react-scroll';
import {PageTitleHomeSection, HomeWrapper, Title} from "../../Styles/Page-Title/PageTitleHomeStyles";
// import Image from '../../Assets/image/anhbernhardt.jpeg';
const PageTitleHome = () => {
    return (
        <PageTitleHomeSection >
            <HomeWrapper >
                <div className="row">
                    <Title className="title">
                        <h1>Hello<span className="dot">.</span></h1>
                        {/*<div className="title-clone">Hello</div>*/}
                        <p>
                            My name is Anh Bernhardt. <br/>
                            I’m a software developer.<br/>
                            <br/>
                            <br/>
                            <span>Currently this website is still in process. You can check-out my other website at
                                <a
                                href="https://anhnguyen.page"
                                target="_blank" rel="noopener noreferrer"
                            > anhnguyen.page</a>
                            </span>
                        </p>
                    </Title>
                </div>
            </HomeWrapper>
        </PageTitleHomeSection>
    );
};

export default PageTitleHome;
