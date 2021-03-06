import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import {GoProject} from 'react-icons/go'
import Hello from '../images/Hello.jpg'
import laptop from '../images/laptop-coffee.jpg'

class CarouselImages extends Component {
    render(){
        return (
            <div className={classes.carousel_container} id="start">
                    {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                    <div  className={classes.image_container} >
                        <img className={classes.image} src={Hello}  alt="myImage"/>
                        <div  className={classes.h1}>
                            <h1 >I'm Mike!</h1>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={laptop} alt="myImage"/>
                        <div  className={classes.h2}> 
                        <h1>I love to code!</h1>
                        <h1> ....And watch youtube</h1>
                        <a href="https://github.com/mgsteinmetz" rel="opener noreferrer" target="blank">VIEW MY GITHUB   <GoProject/></a>
                        </div>
                    </div>
                    {/* <div className={classes.image_container}>
                        <img className={classes.image} src={laptop1} alt="myImage"/>
                        <div  className={classes.h1}> 
                        </div>
                    </div> */}
                </Carousel>
            {/* </ScrollAnimation> */}
            </div>
        )
    }
}
export default CarouselImages