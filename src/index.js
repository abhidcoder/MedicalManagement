import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Appointment} from "./appointment/Context"


ReactDom.render(<BrowserRouter><Appointment><App /></Appointment></BrowserRouter>, document.querySelector('#root'));


