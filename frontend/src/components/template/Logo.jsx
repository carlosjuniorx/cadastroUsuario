import Logo from'../../assets/imgs/LaFugazzaLogotipo2.png'

import './Logo.css'
import React from 'react'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="Logo"/>
        </a>
    </aside>