import React, { Component } from 'react';
import './App.css';
import {Navbar} from './components/navbar/navbar.js';
import {Partner} from './components/partner.js';
import {Footer} from './components/footer.js';

const imagePartner = [{
                        image: "assets/Logo-Partner-Bank-BCA.png",
                        alt: "Logo Partner Bank BCA"
                      },
                      {
                        image: "assets/Logo-Partner-Bank-Indonesia.png",
                        alt: "Logo Partner Bank Indonesia"
                      },
                      {
                        image: "assets/Logo-Partner-Coworking-Indonesia.png",
                        alt: "Logo Partner Coworking Indonesia"
                      }]

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div id="tentang-code" className="tentang-code">
              <div className="row">
                  <div className="tentang-code-header">
                      <div className="col-xs-12">
                          <h3 className="text-center black">TENTANG CODE MARGONDA</h3>
                          <hr/>
                          <a href="#"><h4 className="tentang-code-daftar black"><u>DAFTAR MEMBER</u></h4></a>
                      </div>
                  </div>
                  <div className="tentang-code-content">
                      <div className="col-sm-10 col-xs-12">
                          <p className="black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="alamat-code text-size">
            <div className="container">
                <div className="col-xs-12">
                    <h4><b>LOKASI</b></h4>
                    <h4><b>Ruko Veneta Lantai 2</b></h4>
                    <p>Jalan Margonda Raya no. 349, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16424, Indonesia</p>
                    <div className="contact-us">
                        <h4>Mail : codemargonda@gmail.com</h4>
                        <h4>Telp : +62 21 22710912</h4>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div id="map" class="alamat-code">
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
