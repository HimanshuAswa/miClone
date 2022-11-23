import  Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import { CarouselItem } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

function Slider({start}) {
    return (
        <Carousel fade>
           {
           start.map((item,index)=>(
            <Carousel.Item>
            <img 
            className="d-block w-100"
            src={item} alt="image"
            />
           
         </Carousel.Item>
           ))
           }
        </Carousel>
    )
}

export default Slider;
