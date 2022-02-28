import React from 'react'
import './style.js';
import './style.css';
import { NavLink } from 'react-router-dom';
import {NavbarSection, Logo, UlList, ListItem, Anchor} from './style.js'

const Navbar = () => {

    return (
      <NavbarSection>         
          <div className="container">             
              <Logo>
                  <h2 className="logo-text">Ultra Profile</h2>
              </Logo>                       
              <UlList>
                  <ListItem><NavLink className='NavLinkStyle' to='/'>Home</NavLink></ListItem>
                  <ListItem><Anchor href="#work">Work</Anchor></ListItem>
                  <ListItem><Anchor href="#portfolio">Portfolio</Anchor></ListItem>
                  <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                  <ListItem><Anchor href="#">About</Anchor></ListItem>
                  <ListItem><NavLink className='NavLinkStyle' to='/contact'>Contact</NavLink></ListItem>
              </UlList>        
          </div>
      </NavbarSection>
    );
}


export default Navbar;
