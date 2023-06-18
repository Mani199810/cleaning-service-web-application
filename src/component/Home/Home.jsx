import React from "react";
import "./Home.css";
import carService from "../assets/images/carservice.jpg";
import homeservice from "../assets/images/Homeservice.jpg";
import random from "../assets/images/pexels-pixabay-434163.jpg";
import constservice1 from "../assets/images/download.jpg";
import constservice2 from "../assets/images/12.jpg";
import constservice3 from "../assets/images/8t.jpg";
import basic from "../assets/images/basic service.jpg";
import pro from "../assets/images/procarwash.jpeg";
import proPlus from "../assets/images/proPlus.jpeg";
import Footer from "./Footer";
import gofunme from "../assets/images/kisspng-gofundme-crowdfunding-donation-fundraising-social-donate-5acbd699243323.6905681015233081851483.png";
import handtool from "../assets/images/kisspng-hand-tool-wrench-fist-icon-decoration-company-logo-5a921131d603c9.1217807615195220978766.png";
import hyundai from "../assets/images/kisspng-hyundai-motor-company-hyundai-accent-car-hyundai-e-logo-design-5ac0b7e5e98f30.2036571715225794299567.png";
import united from "../assets/images/kisspng-car-yokohama-rubber-company-logo-alliance-tire-com-5b0ac752318043.5921887215274330422028.png";
import Chatboot from "./chatBoot";
import ChatbotComponent from "./chatBoot";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner carousel">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={carService} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-white">Car service</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={homeservice} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-white">Home service</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src={random} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-white">All services</h5>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>


            <div className=" book">
            <div class="bookservice shadow p-3 mb-5 bg-body rounded" >
              
              <ul className=" items d-flex   list-unstyled">
                  <li><NavLink to={'/homeservice'}><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-01.jpg"/></NavLink></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-02.jpg"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-03.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-04.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-05.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-06.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-16.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-17.png"/></a></li>
                  
              </ul>
              <ul className="items d-flex   list-unstyled" >
              <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-09.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-10.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-11.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-12.png"/></a></li>
                  
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-13.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-14.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-18.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-07.png"/></a></li>
                  <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-08.png"/></a></li>
              <li><a href="https://www.noduster.com/home-deep-cleaning-2/"><img decoding="async" src="https://www.noduster.com/wp-content/uploads/2023/03/icon-15.png"/></a></li>
                  
              </ul>

              

              
            </div>
            </div>
        </div>

         <div className="serv shadow-sm p-3 mb-5 bg-body rounded">

            <ul className="item d-flex   list-unstyled" >
                <li><img src={carService} alt="" /></li>
                <li><img src={homeservice} alt="" /></li>
                <li><img src={random} alt="" /></li>

            </ul>

        </div>

        
        <div className="serv shadow-sm p-3 mb-5 bg-body rounded">

        <h1 className="category">New Category Launches</h1>

        <ul className="item d-flex   list-unstyled new"  >
            <li><img src={constservice1} alt="" /></li>
            <li><img src={constservice2} alt="" /></li>
            <li><img src={constservice3} alt="" /></li>

        </ul>

        </div>

        <div className="serv shadow-sm p-3 mb-5 bg-body rounded">

        <h1 className="category">Our Car Clean Services </h1>


        <ul className="item d-flex   list-unstyled" id="SERVICES" >
       
            <li className="text-center"><h3 className="plan">Basic Wash</h3><img src={basic} alt="" />
            <ul className="text-start list ">
              <li >
              
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        HAND WATER WASH 
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                   
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  SHAMPOO WASH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  INTERIOR POLISH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>

              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  FLOOR MAT POLISH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>

              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  TYRE WASH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>

              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  INTERIOR VACCUM
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>
              </li>

              </ul>
            
            <button className="btn btn-primary float-end">Book now</button>
            
            </li>
            
            <li className="text-center"><h3 className="plan">Pro Wash</h3><img src={pro} alt="" />
            <ul className="text-start list ">
              <li >
              
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        HAND WATER WASH 
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                   
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  SHAMPOO WASH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  INTERIOR POLISH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  FLOOR MAT POLISH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  TYRE WASH
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>  

              </li>
              <li >
                  <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  INTERIOR VACCUM
                  </button>  

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">
                      Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                    </a></li>
                  </ul>
              </li>
              </ul>

            <button className="btn btn-primary float-end">Book now</button>

              
              </li>
            
            <li className="text-center"><h3 className="plan">Extream Wash</h3><img src={proPlus} alt="" />
              <ul className="text-start list ">

                <li >
                
                    <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          HAND WATER WASH 
                    </button>  

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                      </a></li>
                    
                    </ul>  

                </li>
                <li >
                    <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    SHAMPOO WASH
                    </button>  

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                        Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                      </a></li>
                    </ul>  

                </li>
                <li >
                    <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    INTERIOR POLISH
                    </button>  

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                        Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                      </a></li>
                    </ul>  

                </li>
                <li >
                    <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    FLOOR MAT POLISH
                    </button>  

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                        Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                      </a></li>
                    </ul>  

                </li>
                <li >
                    <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    TYRE WASH
                    </button>  

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                        Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                      </a></li>
                    </ul>  

                </li>
                <li >
                    <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    INTERIOR VACCUM
                    </button>  

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">
                        Lorem hing stasifactorie ipsum dolor sit amet consectetur adipisicing elit. Sequi, natus placeat?
                      </a></li>
                    </ul>
                </li>
                </ul>

              <button className="btn btn-primary float-end">Book now</button>

            </li>

        </ul>

        </div>

          <div>
          <h1 class="text-center category">Our Clients </h1>
              
              <div class="logo">


                    <div className="cards  rounded-circle">
                        <img src={gofunme} alt="Logo 1"/>
                    </div>
                    <div className="cards   rounded-circle">
                        <img src={handtool} alt="Logo 2"/>
                    </div>
                    <div className="cards  rounded-circle">
                        <img src={hyundai} alt="Logo 3"/>
                    </div>
                    <div className="cards rounded-circle">
                          <img src={united} alt="Logo 4"/>
                    </div>
                  
                  
                </div>
          </div>

         

      <footer>
        <Footer/>
      </footer>

    </div>
)
}