import styled from "styled-components";
import {colors} from "../variables";

export const FooterMenuSecondary = styled.nav`
   display: flex;
   text-align: left;
`
export const FooterMenuUl = styled.ul`
    display: inline-flex;
    list-style-type: none;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
    
        li {
            padding-right: 15px;
            padding-left: 2rem;
            list-style-type: none;
            &:last-child {
                margin-right: 0;
            }
        }
       
        a {
            color: ${({ theme }) => theme.text};
            text-decoration: none;
            position: relative;
            z-index: 1;
            line-height: normal;
            padding-left: 0.63rem;
            padding-right: 0.63rem;
            font-size: 20px;
        }
        
        a:before {
            content: "";
            background-color: ${colors.menu_primary_links_element_color};
            position: absolute;
            left: 0;
            right: 100%;
            bottom: .5rem;
            z-index: -1;
            height: .5rem;
            transition-property: right;
            transition-duration: .4s;
            transition-timing-function: ease-out;
        }
                    
        a:hover {
            opacity: 1;
            @extend .transition-all;
            
            &:before {
                right: 0;
            }        
        }
`
export const SubMenu = styled.div`
    text-align: left;
`