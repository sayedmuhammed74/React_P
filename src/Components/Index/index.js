import React, { Component } from 'react'
import About from './../About'
import Home from './../Home'
import Portfolio from './../Portfolio'
import Profile from './../Profile'
import SocialMedia from './../SocialMedia'
import Footer from './../Footer'
import Work from './../Work'

class Index extends Component{
  render(){
    return (
        <div>
          <Home />
          <Work/>
          <Portfolio/>
          <Profile/>
          <About />
          <SocialMedia/>
          <Footer/>
        </div>
    );
  }
}

export default Index;
