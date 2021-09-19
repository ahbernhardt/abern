import styled from "styled-components";

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
            // margin-bottom: 2rem;

        &:last-child {
                margin-right: 0;
            }
        }
        
        a {
            height: 10px;
            color: ${({ theme }) => theme.text};
            text-decoration: none;
            font-size: 16px;
        }
        a:hover {
            color: orange;
        }
`
export const SubMenu = styled.div`
    text-align: center;
`