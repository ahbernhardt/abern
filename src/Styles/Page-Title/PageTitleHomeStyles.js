import styled from "styled-components";
import {colors, fonts, spacing, wrapper} from "../variables";

export const PageTitleHomeSection = styled.section`
     h2 {
        padding-bottom: ${spacing.space_lg};
        margin-bottom: 0;
        @include lhCrop-a(1.11, 0.75);
    }
`;

export const HomeWrapper = styled.div`
    max-width: ${wrapper};
    margin: auto;
    padding-left: 6.88rem;
    padding-right: 6.88rem;
`;

export const Title = styled.div`
    h1 {
        font-size: 18.75rem;
        word-break: break-all;
        word-break: break-word;
        hyphens: auto;
        line-height: 1.15;
        @include lhCrop-b(1.15, 0.645);
    
        &:last-child, &.after {
            @include lhCrop-a(1.15, 0.75);
        }

    &.small {
        font-size: 3.88rem;
        margin-bottom: 1.49rem;
        line-height: 1.21;
        @include lhCrop-b(1.21, 0.75);
        
        &:last-child, &.after {
            @include lhCrop-a(1.21, 0.75);
            margin-bottom: 0;
        }
    }
    
    &.h, &.H {
        margin-left: -0.069em;
    }
    
    &.c, &.C {
        margin-left: -0.038em;
    }
    }
        
    .dot {
        color: ${colors.body_main_element_color};
    }
    
    
    .title-clone {
        font-family: ${fonts.font_secondary_bold};
        color: ${colors.body_text_clone_color};
        position: absolute;
        right: -22px;
        bottom: -95px;
        z-index: -1;
        line-height: 77%;
        font-size: 31.25rem;
                
        &.left {
            left: 0;
            right: 0;
        }
    }
`;