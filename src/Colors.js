import React,{useState, useEffect} from 'react'
import {Card, Row, Col, Alert} from 'react-bootstrap'
import colors from './DataC'

const Colors = () => {
  const [alert, setAlert] = useState(false)

  const copy = (color) => {
    setAlert(true)
    navigator.clipboard.writeText(color)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
        setAlert(false)
    },[900])

    return () => clearTimeout(timeout)
  },[alert])

    return (
        <>
        {alert&&<div className='d-flex justify-content-center copy'>Copied!</div>}
        <div className='text-center pt-4 mt-4'><h1>Colors</h1></div>
          <Alert variant='info' className='d-flex text-center flex-column my-4'>Click the Color Code to Copy<h1>{colors.length} Colors</h1></Alert>
        <div className='d-flex justify-content-center'>
        <Row xs={1} sm={2} md={2} lg={3} className='w-100 '>
          {colors.map((color) => (
            <React.Fragment key={color.hex}>
            <Col >
        <Card className='card' >
            <div style={{width:'100%', border:'1px solid white', borderRadius:'1%',height:'5rem', backgroundColor:color.hex}}/>:
          
          <Card.Body >
            <Card.Title title='Copy' style={{cursor:'pointer'}} className='d-flex colors justify-content-between text-white'>
              <div onClick = {() => copy(color.hex)}>
                {color.name}
              </div>
              <div onClick = {() => copy(color.hex)}>
                {color.hex.toUpperCase()}
              </div>
            </Card.Title>
            
          </Card.Body>
        </Card>
        </Col>
        </React.Fragment>
        ))}
        </Row>
        </div>
      </>
    )
}

export default Colors
