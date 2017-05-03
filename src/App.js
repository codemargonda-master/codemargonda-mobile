import React, { Component } from 'react';
import './App.css';
import {Navbar} from './components/navbar/navbar.js';
import {Banner} from './components/banner/banner.js';
import {ImageCircle} from './components/imagecircle/imagecircle.js';
import {Partner} from './components/partner/partner.js';
import {Footer} from './components/footer/footer.js';

const contentBanner = [{
                          detail: "HELLO, NETWORKING COMMUNITY"
                      }]

const contentdetail = [{
                          image: "assets/Tentang Kami-Image(circle)-Code Margonda.png",
                          title: "COWORKING SPACE",
                          textLine: "Coworking space adalah tempat bekerja untuk semua orang mulai dari profesional sampai mereka yang baru ingin belajar. Disini semua orang diharapkan untuk dapat bekerja sama dalam bertukar pikiran dan berinteraksi untuk mengembangkan ide tanpa ada batasan."
                        }]

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
        <Banner imageurl="assets/Home-Slider.jpg" contentBanner = {contentBanner}></Banner>
        <div className="container">
            <div id="content-social" className="content-social">
                <div className="row text-center">
                    <div>
                        <div className="col-xs-12">
                            <h3 className="black"><b>KAMI ADALAH</b></h3>
                            <p className="black">Code Margonda adalah salah satu coworking space yang ada di Indonesia tepatnya di Depok. Dengan fokus dibidang teknologi. Kami bermimpi untuk menghasilkan developer terbaik di Indonesia. Maka dari itu, kami memiliki komunitas teknologi yang bernama <b>Margodev+</b></p>
                        </div>
                    </div>
                    <div className="social-media text-center">
                        <div className="col-xs-12">
                            <h3><b>FOLLOW OUR SOCIAL MEDIA!</b></h3>
                            <a href="https://m.facebook.com/codemargonda/">
                                <img className="sos-med" src="assets/001-facebook.png" alt="facebook"/></a>
                            <a href="https://www.instagram.com/codemargonda/?hl=id">
                                <img className="sos-med" src="assets/002-instagram.png" alt="instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="coworking-space" className="coworking-space text-center">
          <div className="square red">
            <h1>CODE</h1>
          </div>
            <div className="coworking-content container">
                <ImageCircle contentdetail={contentdetail}></ImageCircle>
                <button type="button" className="btn btn-default red">DAFTAR MEMBER</button>
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
                    <div id="map" className="alamat-code">
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
