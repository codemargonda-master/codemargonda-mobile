import React, { } from 'react';
const menu = [{
                id: 1,
                title: "Beranda",
                url:"./App.js"
              },
              {
                id: 2,
                title: "Tentang Kami",
                url:"#about"
              },
              {
                  id: 3,
                  title: "Anggota",
                  url: "#CCC"
              },
              {
                  id: 4,
                  title: "Program",
                  url: "#Program"
              },
              {
                  id: 5,
                  title: "Acara",
                  url: "#Acara"
              }
            ]

const Navbar =( )=>
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
              return <li key={menu.id}><a href={menu.url}>{menu.title}</a></li>
            })}
          </ul>
        </div>
      </div>
  </div>


export {Navbar};
