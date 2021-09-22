import React, { Fragment } from 'react';
import Layout from "../Components/Layout";
import MetaTags from 'react-meta-tags';
import PageTitleHome from "../Blocks/page-title/PageTitleHome";

// import Loading from '../blocks/loading/Loading';
// import PageTitleHome from '../blocks/page-title/PageTitleHome';
// import Works from '../blocks/works/Works';
// import Journal from '../blocks/blog/Blog';
// import Contacts from '../blocks/contacts/Contacts';

const Home = () => {
    // document.body.classList.add( 'home' );
    // document.body.classList.add( 'bg-fixed' );
    // document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Anh Bernhardt - Software Engineering</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            {/*<Loading />*/}

            <Layout>
                <PageTitleHome />
            </Layout>
        </Fragment>
    );
};

export default Home;