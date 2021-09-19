import React from 'react'
import { ThemeProvider } from 'styled-components'
// import styled from "styled-components"
import { GlobalStyles, lightTheme, darkTheme } from '../Styles/globalStyles'
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
            <Header>
                <Menu/>
                <Logo theme={theme} />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </Header>
            {children}
            <Footer />
        </ThemeProvider>
    )
}
export default Layout;
