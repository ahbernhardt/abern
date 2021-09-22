import styled, { createGlobalStyle} from "styled-components"
// import {mainVar} from "./variables";

export const GlobalStyles = createGlobalStyle `

body {
    display: block;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
}

/*=============================
// Paragraph
=============================*/
p {
    // line-height: 1.75;
    font-size: 1rem;
    margin-bottom: 0;
    
    &:last-child {
        @include lhCrop-a(1.75, 0.75);
                    
        &[class*="bg-"] {
            &:after {
                display: none;
            }
        }
    }

    &.p-small {
        font-size: 0.81rem;
    }
    
    &.p-large {
        font-size: 1.31rem;
    }
}

// Span size
span {
    &.s-small {
        font-size: 0.81rem;
    }
    
    &.p-large {
        font-size: 1.31rem;
    }
}

// Bold
strong, b {
    font-family: $font_primary_bold;
}


/*=============================
// Text format
=============================*/
.text-secondary {
    color: $body_text_secondary_color !important;
}

.text-primary, 
.text-secondary, 
.text-success,
.text-danger,
.text-warning, 
.text-info, 
.text-light, 
.text-dark,
.text-body,
.text-muted,
.text-white,
.text-black-50,
.text-white-50 {
    &.regular {
        font-family: $font_secondary; 
    }
    
    &.bold {
        font-family: $font_secondary_bold;
    }
}

/*=============================
// Hr
=============================*/
hr {
    margin-bottom: $space_sm;
                
    &:last-child {
        margin-bottom: 0;
    }
}

// Default
button {
    &:focus {
        outline: 0;
    }
}
`;

export const lightTheme = {
    body:'#eeeeee',
    menuBackground:'#eeeeee',
    text: '#28282a',
    link: '#4e4e4e',
    backText: '#f5f5f5',
    transitionTime: ".5s",
}

export const darkTheme = {
    body: '#28282a',
    menuBackground: '#28282a',
    text: '#F5F5F5',
    link: '#a7a7a7',
    backText: '#26262a',
    transitionTime: ".1s",
}

export const LayoutWrapper = styled.div`
    left: 0;
    display: block;
    width: 90%;
    padding: 0 0 0 2rem;
`