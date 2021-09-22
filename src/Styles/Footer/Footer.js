//=================================================
// Footer
//=================================================
import styled from "styled-components";
import { footerVar} from '../variables'
export const MainFooter = styled.footer`
   width: 95%;
   position: absolute;
   bottom: 50px;
`
export const FooterWrapper = styled.div`
     padding-top: ${footerVar.footer_padding_t};
     height: 0.5rem;
     display: flex;
     justify-content: space-between;
     
      // @media {$media.media_lg} {
      //   padding-left: 30px;
      //   width: 95%;
      // }
`

export const Menu = styled.div`
    margin-bottom: -0.88rem;
`
