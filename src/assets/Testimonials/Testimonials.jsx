import React from 'react'
import './Testimonial.css'
import{testimonialsData} from "../../data/testimonialsData"
const Testimonials = () => {
  return (
    <div className="Testimonials">
         <div className="left-t">
         <span>Testimonials</span>
         <span className="stroke-text">What they</span>
         <span>say about us</span>
         <span>
           {testimonialsData[0].review}
         </span>
         </div>
         <div className="right-t">

         </div>
    </div>
  )
}

export default Testimonials