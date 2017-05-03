import React, { } from 'react';
import './navbar.css';

const menu = [{
                key: 1,
                title: "Beranda",
                url:"./App.js"
              },
              {
                key: 2,
                title: "Tentang Kami",
                url:"#about"
              },
              {
                key: 3,
                title: "Anggota",
                url: "#CCC"
              },
              {
                key: 4,
                title: "Program",
                url: "#Program"
              },
              {
                key: 5,
                title: "Acara",
                url: "#Acara"
              }
            ]

const Navbar =()=>
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
              return <li key={menu.key}><a href={menu.url}>{menu.title}</a></li>
            })}
          </ul>
        </div>
      </div>
  </div>


export {Navbar};
