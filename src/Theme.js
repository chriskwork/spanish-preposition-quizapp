import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "./themeStyles/ThemeContainer"

const themes = {
  dark: {
    background: "#101010",
    title: "#5CBDE8",
    text: "#f1f1f1",
    nav: "#126A91",
    graySection: "#484848"
  },
  light: {
    background: "#fff",
    title: "#126A91",
    text: "#101010",
    nav: "#126A91",
    graySection: "#f1f1f1"
  },
}

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  )
}

export default Theme