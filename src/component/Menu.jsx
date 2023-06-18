import React from 'react'

import { NavLink } from 'react-router-dom'


function Menu() {
  
   
  return (
   
        <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className="container ">
                <NavLink to={`/`} className="navbar-brand text-warning">
               
                </NavLink>
    
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-center " id='menu'>
                <ul className="navbar-nav ml-auto float-end ">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <div class="dropdown">
                        <NavLink className="nav-link" to={'/A#'} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           Service
                        </NavLink>
                        <ul class="dropdown-menu " style={{background:'rgb(223 222 224)'}} aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="/A#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/about`} className="nav-link">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/service+`} className="nav-link">Service +</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/blogs`} className="nav-link">Blogs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/contact`} className="nav-link">Contact Us</NavLink>
                    </li>
                </ul>

              
            </div>
    
               
            </div>
        </nav>
       
         </div>
    

  )
}

export default Menu