import React from 'react';
import { createGlobalStyle } from "styled-components"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Main from './pages/Main';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Index from './Components/Index';
import Footer from './Components/Footer';


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  position: relative;

}

body{
  background-color: #2d2d30;
  color:white;
}

a{
  text-decoration:none;
  color: white;
}
`;


const App = ()=> {
  return (
    <>
    <GlobalStyle/>
      
      <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Footer/>
      <Index/>
      <Route exact path="/" exact>
        <Main/>
      </Route>
      <Route path="/contact" exact>
        <Contact/>
      </Route>
    </Router>
    
    </>
  );
}

export default App;
