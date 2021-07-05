import React,{useEffect} from 'react'
import Header from './Header'
import Gradient from './Gradient'
import AllGradients from './AllGradients'
import Cards from './Cards'
import Colors from './Colors'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route, useLocation, withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    function _scroll(props){
        const {pathname} = useLocation()
        useEffect(() => {
          window.scrollTo(0,0)
        }, [pathname])
        return props.children
      }
  
      const ScrollToTop = withRouter(_scroll)
    return (
        <Router >
            <ScrollToTop>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <Gradient/>
                    <Cards/>
                </Route>
                <Route path='/gradients'>
                    <AllGradients/>
                </Route>
                <Route path='/colors'>
                    <Colors/>
                </Route>
            </Switch>
            <Footer/>
            </ScrollToTop>
        </Router>
    )
}

export default App
