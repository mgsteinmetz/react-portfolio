import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {GoProject} from 'react-icons/go'


class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY PROJECTS</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
              {/* <img className={classes.image} src={}  alt="myImage"/> */}
                <h3>Paws and Pals</h3>
                <ul style={{ textAlign:'match-parent'}}>A pet shelter application built using:
                  <li>Node.js and Express.js to create a RESTful API.</li>
                  <li>Handlebars.js as the template engine.</li>
                  <li>MySQL and the Sequelize ORM for the database.</li>
                  <li>bcrypt, dotenv, RESTful Routes, ESLint.</li>
                  <li>Multer to upload images.</li>
                </ul>
                <a href="https://sleepy-cove-71764.herokuapp.com/" target="blank"> View App! <GoProject/></a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3> Blitz and Chaos</h3>
                <ul style={{ textAlign:'match-parent'}}>An interactive story application built using:
                  <li>Bulma for CSS styling.</li>
                  <li>Freesound.org for background music.</li>
                  <li>Pexels and Art Intstitute of Chicago for background images.</li>
                </ul>
                <a href="https://mgsteinmetz.github.io/BlitzandChaos/" target="blank">View App!<GoProject/></a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>KiddoCarLine</h3>
                <ul style={{ textAlign:'match-parent'}}>An application built to assist teachers keep track of students using:
                  <li>React</li>
                  <li>Database Storage</li>
                  <li>JWT Authentication</li>
                </ul>
                <a href="https://mgsteinmetz.github.io/kiddocarline" target="blank">View App!<GoProject/></a>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;