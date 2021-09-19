//=================================================
// Footer
//=================================================
import styled from "styled-components";
import {colors, footerVar} from '../variables'


export const mainFooter = styled.footer`
   background-color: ${colors.body_background_color};
   width: 98%;
`
export const FooterWrapper = styled.div`
     padding-top: ${footerVar.footer_padding_t};
     padding-bottom: ${footerVar.footer_padding_b};
     position: absolute;
     bottom: 0;
     height: 0.5rem;
     display: flex;
     justify-content: space-between;
     width: 98%;
`

export const Menu = styled.div`
    // margin-bottom: -0.88rem;
`
