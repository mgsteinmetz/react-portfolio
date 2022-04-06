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
                        <p> Hi! I am Mike Steinmetz, and I am an entry level Full-Stack developer. I studied, and recieved my full stack development certificate at The University of Minnesota Coding Bootcamps. I really enjoy programming because every day can be a new challenge, and you are always learning new skills as you move forward!  </p>
                        <p className={classes.br}>Outside of being at my computer creating things, I love to do outdoor activities! I really enjoy going fishing, hunting, and exploring. Some of my other hobbies include watching, and somtimes playing sports, as well as playing video games! And when I'm not doing any of the things listed above, you will most likely find me watching shows on netflix or watching youtube videos.</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;