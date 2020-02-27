import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
<<<<<<< HEAD
import { ThemeProvider } from './components/context/ThemeContext';
=======
import { ThemeProvider } from './context/ThemeContext';

>>>>>>> ad17399a6715572ad0e96aa95c7d731daa6714a0
ReactDOM.render(
<ThemeProvider>
<App />
</ThemeProvider>
,document.getElementById('root'));