import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
export default function Card (props) {

  const { dark } = useContext(ThemeContext);

  return (
    <div classNameName='Card'>
        <button>{!dark ? 'Light theme' : 'Dark Theme'}</button>
    </div>
  );
}