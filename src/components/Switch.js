import React, { useContext } from 'react';
import './menu.css'

import ThemeContext from '../context/ThemeContext';

export default function Switch () {
  const {toggle } = useContext(ThemeContext);
  
  return (
    <button 
      classNameName='switch'
      onClick={() => toggle()}
    >
      change
    </button>
  );
} 