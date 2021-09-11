import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';
// import logo from '../images'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                {/* <img src={logo} /> */}
                <h1><Link smooth to="/#start" className="h1_links">Mike Steinmetz</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> mikesteinmetz00@gmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About Me</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Portfolio</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interests</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#resume" className="links">Resume</Link></li>
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://www.linkedin.com/in/mike-steinmetz-9a989320a/" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/mgsteinmetz" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://twitter.com/mikesteinmetz20" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/_msteinz_/" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:mikesteinmetz00@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar