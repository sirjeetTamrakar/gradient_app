import React from 'react'
import Navs from './Navs'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <div className='header p-4'>
            <Link className='linkh' to='/'><h1>GALERIE DE GRADIENT </h1></Link>
            <span style={{fontSize:'2.5rem'}} className="material-icons">palette</span>
        </div>
        <Navs/>
        </>
    )
}

export default Header
