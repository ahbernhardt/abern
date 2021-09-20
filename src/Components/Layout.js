import React from 'react'
import { ThemeProvider } from 'styled-components'
// import styled from "styled-components"
import {GlobalStyles, lightTheme, darkTheme, LayoutWrapper} from '../Styles/globalStyles'
import Logo from "./Logo";
import Toggle from "./Toggle";
import {useDarkMode} from "./useDarkMode";
import {Header} from "../Styles/Header/HeaderStyles";
import Footer from "../Blocks/footer/Footer";
import Menu from "./Menu";



export const Layout = ({ children}) => {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <LayoutWrapper>
                <Header>
                    <Menu/>
                    <Logo theme={theme} />
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </Header>

                    {children}

                <Footer />
            </LayoutWrapper>

        </ThemeProvider>
    )
}
export default Layout;
