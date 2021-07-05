import React, {useState} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navs = () => {
  const [expanded, setExpanded] = useState(false);

    return (
          <div className='d-flex link'>
        <Navbar expanded={expanded}  expand="lg">
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}  style={{color:'white', marginBottom:'1rem', marginLeft:'.5rem'}} ><span className='material-icons'>{expanded? 'close':'menu'}</span></Navbar.Toggle>
          <Navbar.Collapse className='out' onClick={() => setExpanded(expanded ? false : "expanded")}  >  
            <Nav >
              <Link className='linki d-flex' to='/' ><span className='material-icons'>home</span><span className='align-self-center px-2'>Home</span></Link>
              <Link className='linki d-flex' to='/gradients'><span className='material-icons'>invert_colors</span><span className='align-self-center px-2'>Gradients</span></Link>
              <Link className='linki d-flex' to='/colors'><span className='material-icons'>palette</span><span className='align-self-center px-2'>Colors</span></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
              </div>
    )
}

export default Navs
