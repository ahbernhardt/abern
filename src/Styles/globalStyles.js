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
// Blockquote
=============================*/
blockquote, .blockquote {
    font-style: italic;
    font-weight: bold;
    border-left: 2px solid $body_main_element_color;
    padding-left: 1rem;
    line-height: 1.75;
    @include lhCrop-b(1.75, 0.75);
    margin-bottom: $space_sm;
    
    &:last-child {
        margin-bottom: 0;
        @include lhCrop-a(1.75, 0.75);
    }
    
    p {
        &:after, &:before {
            display: none;
        }
        
        &:last-child {
            &:after {
                display: none;
            }
        }
    }
}

/*=============================
// Lists
=============================*/
ul {
    list-style: none;
    margin-left: 1.3rem;
    padding: 0;

    li {
        font-family: $font_primary;
        line-height: 1.23;
        margin-bottom: 1.39rem;
        @include lhCrop-b(1.23, 0.75);
        

        &:last-child {
            @include lhCrop-a(1.23, 0.75); 
            margin-bottom: 0;
        }
        
        &:before {
            content: "\\2022";
            color: $body_main_element_color;
            font-weight: 700;
            width: 1rem;
            margin-left: -1.3rem;
        }
    }
    
    ol, ul {
        margin-top: 1.39rem;
    }
}

ol {
    margin-left: 1.3rem;
    padding: 0;

    li {
        line-height: 1.23;
        margin-bottom: 1.39rem;
        @include lhCrop-b(1.23, 0.75);
        margin-bottom: 1.39rem;
        
        &:last-child {
            @include lhCrop-a(1.23, 0.75); 
            margin-bottom: 0;
        }
        
        ul {
            > li {
                &:before {
                    content: "\\2022";
                }
            }
        }
        
        ol {
            > li {
                &:before {
                    content: "";
                }
            }
        }
        
        strong, p {
            line-height: 1.23;
        }
        
        p {
            @include lhCrop-b(1.23, 0.75);
            margin-top: 1.39rem;
            margin-bottom: 1.39rem;
            
            &:first-child {
                margin-top: 0;
            }
            
            &:last-child {
                @include lhCrop-a(1.23, 0.75);
                margin-bottom: 0;
            }
        }
    }
    
    ol, ul {
        margin-top: 1.39rem;
    }
}

// List unstyled
.list-unstyled {
    margin-left: 0;
        
    li {
        @include lhCrop-a(1.23, 0.75); 
        
        &:before {
            content: "";
        }
    }
}

// List group item unstyled
.list-group-item, [class*="icon-list-item"] {
    &:before {
        display: none;
    }
}

address, dl, ol, ul, pre {
    margin-bottom: $space_sm;
                
    &:last-child {
        margin-bottom: 0;
    }
}

address, dl {
    line-height: 1.75;
    @include lhCrop-b(1.75, 0.75);
    
    &:last-child {
        @include lhCrop-a(1.75, 0.75);
    }
}

pre {
    line-height: 1.75;
}

/*=============================
// Emphasis
=============================*/
mark, .mark {
    background-color: $body_mark_background;
}

/*=============================
// Date
=============================*/
p.date {
    font-family: $font_secondary;
    font-size: 0.81rem;
    color: $body_date_color;
    @include lhCrop-b(1.75, -0.25);
    margin-bottom: 0.82rem;
    
    &:last-child {
        @include lhCrop-a(1.75, -0.25);
    }
    
    .large {
        font-family: $font_secondary_bold;
        font-size: 1.56rem;
        margin-right: 0.38rem;
    }
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

/*=============================
// Pullquote
=============================*/
[class*="pullquote"] {
    border-top: 2px solid;
    border-bottom: 2px solid;
    
    .blockquote, blockquote {
        font-style: normal;
        border: 0;
        padding-left: 0;
        
        cite {
            font-style: normal;
        }
    }
}

/*=============================
// Caption
=============================*/
caption {
    padding-top: 0;
    padding-bottom: 0;
}

caption, figcaption {
    font-size: 0.88rem;
}

`;

export const lightTheme = {
    body:'#eeeeee',
    text: '#28282a',
    link: '#4e4e4e',
    backText: '#f5f5f5',
    transitionTime: ".5s",
}

export const darkTheme = {
    body: '#28282a',
    text: '#F5F5F5',
    link: '#a7a7a7',
    backText: '#26262a',
    transitionTime: ".1s",
}

export const LayoutWrapper = styled.div`
    display: block;
`