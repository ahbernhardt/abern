//=================================================
// Footer
//=================================================
import styled from "styled-components";
import { footerVar} from '../variables'
export const MainFooter = styled.footer`
   width: 98%;
   position: absolute;
   bottom: 50px;
`
export const FooterWrapper = styled.div`
     padding-top: ${footerVar.footer_padding_t};
     height: 0.5rem;
     display: flex;
     justify-content: space-between;
     width: 100%;
     
      @media {$media.media_lg} {
        margin-left: 30px;
        width: 95%;
      }
`

export const Menu = styled.div`
    margin-bottom: -0.88rem;
`
