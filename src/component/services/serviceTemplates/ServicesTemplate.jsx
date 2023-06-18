import React, { useEffect, useState } from "react";
import Footer from "../../Home/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicesTemplate.css'
export default function ServicesTemplate(props) {
    useEffect(() => {
      
      }, [])
  return (
    <div >
            <div className="row rows">
                <div className="col-md-12 m-5 d-flex text-center justify-content-center">
                    <div className="title float-start" > 
                        <h1>{props.name}</h1>
                        <p className="float-start ">&#9733; {props.rating}</p>
                    </div>

                    <div>
                    <video className="float-end" src={props.video} autoplay="true" loop='true' muted="true" width="640" height="360" preload="auto"></video>
                    </div>
                 
                </div>
            </div>

            <div className="row rows">
                <div className="col-md-12 d-flex text-center images">
                   <div>
                    <img src={props.images[0]} alt="" />
                    <p>{props.imagedesc[0]}</p>
                   </div>
                   <div>
                    <img src={props.images[1]} alt="" />
                    <p>{props.imagedesc[1]}</p>

                   </div>
                   <div>
                    <img src={props.images[2]} alt="" />
                    <p>{props.imagedesc[2]}</p>

                   </div>
                   <div>
                    <img src={props.images[3]} alt="" />
                    <p>{props.imagedesc[3]}</p>

                   </div>
                </div>
            </div>

            <div className="row rows">
            <h5 id="titel">Book by room</h5>
                <div className="col-md-12 d-flex  detail">
                   
                    <div>
                        <div className="end">
                            <p>Furnished bedroom cleaning <br /> 
                            &#9733; {props.rating} <br />
                            &#8377; 499
                            </p>

                            <div>
                            <img src={props.images[0]} alt="" />
                            <button className="btn btn-success add">Add</button>
                            </div>

                            <ul>
                                <li> ipsum, cupiditate similique nesciunt sint consectetur. </li>
                                <li>Magnam fugit inventore exercitationem perferendis.</li>
                            </ul>
                            
                        </div>
                      <div className="end">
                            <p>Furnished bedroom cleaning <br /> 
                            &#9733; {props.rating} <br />
                            &#8377; 499
                            </p>

                            <div>
                            <img src={props.images[0]} alt="" />
                            <button className="btn btn-success add">Add</button>
                            </div>
                            
                            <ul>
                                <li> ipsum, cupiditate similique nesciunt sint consectetur. </li>
                                <li>Magnam fugit inventore exercitationem perferendis.</li>
                            </ul>
                            
                        </div>
                        <div className="end">
                            <p>Furnished bedroom cleaning <br /> 
                            &#9733; {props.rating} <br />
                            &#8377; 499
                            </p>

                            <div>
                            <img src={props.images[0]} alt="" />
                            <button className="btn btn-success add">Add</button>
                            </div>
                            
                            <ul>
                                <li> ipsum, cupiditate similique nesciunt sint consectetur. </li>
                                <li>Magnam fugit inventore exercitationem perferendis.</li>
                            </ul>
                            
                        </div>
                        <div className="end">
                            <p>Furnished bedroom cleaning <br /> 
                            &#9733; {props.rating} <br />
                            &#8377; 499
                            </p>

                            <div>
                            <img src={props.images[0]} alt="" />
                            <button className="btn btn-success add">Add</button>
                            </div>
                            
                            <ul>
                                <li> ipsum, cupiditate similique nesciunt sint consectetur. </li>
                                <li>Magnam fugit inventore exercitationem perferendis.</li>
                            </ul>
                            
                        </div>
                      
                    
                    </div>

                    <div>

                    </div>
                  
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12 text-center">
                   <Footer/>
                </div>
            </div>
    </div>
  );
}