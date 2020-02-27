import React, { useContext } from 'react';
import './Style/menu.css'
import ThemeContext from './context/ThemeContext';
export default function Switch () {
  const {toggle } = useContext(ThemeContext);
  
  return (
    <button 
      className='switch'
      onClick={() => toggle()}
    >
      change
    </button>
  );
}