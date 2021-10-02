import styled from "styled-components";
import {colors, fonts} from "../variables";

export const PageTitleHomeSection = styled.div`
     display: block;
     // margin-top: 200px;
     // @media {$media.media_lg} {
     //    width: 100%;
     // }
`;

export const HomeWrapper = styled.div`
    padding-left: 6.88rem;
    padding-right: 6.88rem;
    
     // @media {$media.media_lg} {
     //    // width: 100%;
     // }
`;

export const Title = styled.div`
    margin-top: -50px;
    
    h1 {
        font-size: 15rem;
        line-height: 1.25;
    }
    
    .dot {
        color: ${colors.body_main_element_color};
    }
    
    .title-clone {
        font-family: ${fonts.font_secondary_bold};
        color: ${({theme}) => theme.backText};
        position: absolute;
        right: 22px;
        bottom: 95px;
        z-index: -1;
        line-height: 45%;
        font-size: 28rem;
                
        &.left {
            left: 0;
            right: 0;
        }
    }
    
    p {
        max-width: 70%;
        font-size: 1.85rem;
        margin-top: -150px;
        
        span{
            font-size: 1.2rem;
            a {
                color: ${({theme}) => theme.link};
                text-decoration: none;
                font-size: 1.2rem;
            }
            a:hover {
                color: orange;
            }
        }
    }
    
    // @media {$media.media_lg} {
    //     h1 {
    //         font-size: 10rem;
    //         line-height: 1.25;
    //     }
    //    
    //     p {
    //         max-width: 70%;
    //         font-size: 1.5rem;
    //         margin-top: -100px;
    //    
    //     span{
    //         font-size: 1rem;
    //         a {
    //             font-size: 1.2rem;
    //         }
    //
    //     }
    // }
`;
