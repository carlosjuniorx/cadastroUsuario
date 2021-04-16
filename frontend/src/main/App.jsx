import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import {HashRouter} from 'react-router-dom'

import Routes from './Routes'

import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </HashRouter>