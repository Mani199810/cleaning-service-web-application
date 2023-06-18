import React, { useEffect } from "react";
import Footer from "../Home/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';
import about from '../assets/images/pexels-tima-miroshnichenko-6197116 (1).jpg'

export default function About() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
        <div className="d-flex justify-content-between">
            <section data-aos="fade-up-right" className="me-4">
                <img src={about} alt="" />
            </section>
            <section data-aos="fade-up-left" className="content">
            <h2>   About Us</h2>
            Nakoda Urban Services was established in year 2020 with a promise to provide customers with a clean and safe environment in personal and commercial spaces. In our organization, we are equipped with advanced technology and all the right tools, equipment that helps us provide satisfactory results to the customers. We serve as your reliable partner for Professional Home and Commercial Deep Cleaning services, Paint services, Sanitization services, AC Services & Repair, Carpenters, Plumbing, Electricians and Pest Control Services. We also provide Packers & Movers if you plan to shift to a new place and you can avail all other services at new place. We specialise in making your windows shine with window cleaning services, sparkling up the corners of your home, up-keep the condition of your mattresses, carpets. We also offer kitchen cleaning services, chair cleaning, and sofa dry cleaning services, providing professional sanitization services. Now, revamp the overall look of your home with the help of a skilled house painting expert and carpenter in India by booking from us. 
            </section>
        </div>
      <Footer/>
    </div>
  );
}