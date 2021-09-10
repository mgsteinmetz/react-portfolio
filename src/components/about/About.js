import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> Hi! I am Mike Steinmetz, and I am an entry level Full-Stack developer. I am currently studying at The University of Minnesota Coding Bootcamps, in hopes to recieve my certificate of completion!! I really enjoy programming because every day can be a new challenge, and you are always learning new skills as you move forward! :)  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I also like to stay on top of latest trends.</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;