import React, { useState } from "react"

const ThemeContext = React.createContext()
const ThemeSwitch = React.createContext()

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const switchTheme = () => setTheme(
    theme => theme === "dark" ? theme = "light" : theme = "dark"
  )

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeSwitch.Provider value={ switchTheme }>
        {children}
      </ThemeSwitch.Provider>
    </ThemeContext.Provider>
  )
}

export { ThemeStore, ThemeContext, ThemeSwitch }