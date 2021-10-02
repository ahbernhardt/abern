//=================================================
// Menu
//=================================================
import styled from "styled-components";
import {colors} from "../variables";

export const MenuModal = styled.div`
    background-color: ${({ theme }) => theme.menuBackground};
    width: 95vw;
    height: 100vh;
    display: block;
    padding: 2rem 2rem 0 2rem;
    // border: 1px solid red;
`;

export const MenuButton = styled.button`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.81rem;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.text};
    border: none;  
    background-color: transparent; 
    
    &:focus {
        outline: 0;
    }
    
    i{
        margin-left: 3px;
    }
   
   
`;
export const MenuModalHead = styled.div`
	display: flex;
	justify-content: space-between;
	// border: 1px solid green;
`
export const MenuClose = styled.button`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.81rem;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.text};
    border: none;  
    background-color: transparent; 
    top: 180%;
     
    &:focus {
        outline: 0;
    }
    
    i{
        margin-left: 3px;
    }
   
`;
export const MenuContent = styled.div`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 0.81rem;
    margin: 1.5rem 0;
    height: 85vh;
    color: ${({ theme }) => theme.text};
    border: none;  
    // border: 1px solid blue;
     
    &:focus {
        outline: 0;
    }
    
    i{
        margin-left: 3px;
    }
   
`;

export const MenuPrimary = styled.nav`
   padding-bottom: 1rem;
   margin-bottom: 230px;
   // border: 1px solid white;
`
export const MenuUl = styled.ul`
    display: block;
    list-style-type: none;
    justify-content: space-between;
    
    color: ${({ theme }) => theme.text};
        
        li {
            list-style: none;
                margin-bottom: 2rem;
                text-align: right;
            
            &:last-child {
                margin-right: 0;
            }
        }
        
        a {
            color: ${({ theme }) => theme.text};
            position: relative;
            z-index: 1;
            line-height: normal;
            padding-left: 0.63rem;
            padding-right: 0.63rem;
            font-size: 4.4rem;
            text-decoration: none;
        }
        
        a:before {
            content: "";
            background-color: ${colors.menu_primary_links_element_color};
            position: absolute;
            left: 0;
            right: 100%;
            bottom: 1.6rem;
            z-index: -1;
            height: 2.1rem;
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
    }
`;
export const MenuFooter = styled.div`
    font-size: 16px;
    margin-left: -50px;
   // border: 1px solid white;
`
