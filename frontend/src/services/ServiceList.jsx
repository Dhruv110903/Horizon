import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData =[
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc:"Enjoy the tour with best Tour Guide and leave all the worries with us!",
  },
  {
  imgUrl: weatherImg,
  title: "Weather conditions",
  desc:"Everybody talks about the weather, but nobody does anything about it",
},
{
  imgUrl: customizationImg,
  title: "Customization",
  desc:"Everybody talks about the weather, but nobody does anything about it",
},
]
const ServiceList = () => {
    return <>
   {
      servicesData.map((item,index) => (
        <Col lg="3" key={index} >
         <ServiceCard item={item} />
        </Col>
      ))
    }
  </>
    
}

export default ServiceList
