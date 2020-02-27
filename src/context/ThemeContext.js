import React, { useState, useLayoutEffect } from 'react';
import App from '../components/App'
const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider (props) {
  // keeps state of the current theme
  const [dark, setDark] = useState(false);
  
  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');
    
    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(darkTheme);
    } else {
      setDark(false);
      applyTheme(lightTheme);
    } 
  // if state changes, repaints the app
  }, [dark]);

  // rewrites set of css variablels/colors
  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  }

  const toggle = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';

    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  };

  return (
    <ThemeContext.Provider value={{
      dark,
      toggle,
    }}>
      <App/>
    </ThemeContext.Provider>
  )
}


// styles
const lightTheme = [
  '--background: white',
  '--color:black',
  '--hovelink:#ffae89ab',
  '--hove:#ffae893b',
  '--border-color: 1px solid red',
  '--headerbordercolor:#cdcdcd',
];

const darkTheme = [
  '--headerbordercolor:#f6feff59',
  '--background: black',
  '--color:white',
  '--hovelink:#562fd4fa',
  '--hove:#562fd4ad',
  '--border-color: 1px solid red',
];