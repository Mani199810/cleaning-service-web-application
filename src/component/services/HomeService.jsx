import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from '../assets/images/pexels-tima-miroshnichenko-6197116 (1).jpg'
import services from "./apiservices";
import ServicesTemplate from "./serviceTemplates/ServicesTemplate";
export default function HomeService() {

    useEffect(() => {
      
      }, [])
  return (
    <div >
            <div className="row">
                <div className="col-md-12 text-center">
                  {
                    services.map((item)=>{
                     return <ServicesTemplate name={item.name} video={item.video} rating={item.rating} images={item.images} imagedesc={item.imagedesc}/>
                    })
                  }
                </div>
            </div>
            
    </div>
  );
}