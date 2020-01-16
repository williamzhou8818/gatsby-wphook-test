/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from './MainMenu';
import styled, { createGlobalStyle } from 'styled-components';

const ClobalSytles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0 !important;
      padding: 0 !important;
    }
`
const LayoutWarapper = styled.div`
  width: 960px;
  margin: 0 auto;
`





const Layout = ({ children }) => {

  return (
    <div>
      <ClobalSytles/>
      <MainMenu />
      <LayoutWarapper >
       {children}
      </LayoutWarapper>
    </div>
  )
}



export default Layout
