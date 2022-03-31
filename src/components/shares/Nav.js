import React from 'react';
import logoImg from '../../statics/logo.png';

export default function () {
   return (
      <div className="contaner-fluid bg-dark">
         <nav className="container navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
               <img src={logoImg} alt="bm logo" width="30" height="30"/>
               <a className="navbar-brand text-white ms-2" href="#">BM Media</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">ပြည်တွင်း</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-white" href="#">နိုင်ငံတကာ</a>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <i className="fa fa-user"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><a className="dropdown-item" href="#">Login</a></li>
                           <li><a className="dropdown-item" href="#">Register</a></li>
                           <li><hr className="dropdown-divider"/></li>
                           <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}
