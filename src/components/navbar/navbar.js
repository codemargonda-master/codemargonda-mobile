import React, {} from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';
const menu = [{
                title: "BERANDA",
                tourl:"./"
              },
              {
                title: "TENTANG KAMI",
                tourl:"#"
              },
              {
                title: "ANGGOTA",
                tourl: "#"
              },
              {
                title: "PROGRAM",
                tourl: "#"
              },
              {
                title: "CCC",
                tourl: "#"
              },
              {
                title: "ACARA",
                tourl: "#"
              },
              {
                title: "LOGIN",
                tourl:"/login"
              }
            ]

const Navbar =()=> {
  return(
    <div className="navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              {menu.map(function(menu, index){
                return <li key={index}><NavLink exact activeClassName='active' to={menu.tourl}>{menu.title}</NavLink></li>
              })}
            </ul>
          </div>
        </div>
    </div>
  );
}



export default Navbar;
