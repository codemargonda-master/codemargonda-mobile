import React, { Component } from 'react';
import './Login.css';
import Navbar from '../navbar/navbar.js';
import Banner from '../banner/banner.js';
import ImageCircle from '../imagecircle/imagecircle.js';
import Formlogin from '../formlogin/formlogin.js';
import Footer from '../footer/footer.js';

const contentAccount = [{
                          detail: "Belum Punya Akun?"
                      }]

const contentdetail = [{
                          image: "assets/CodeMargonda-Circle.png",
                          title: "Selamat datang kembali!",
                          textLine: "Masuk ke akun kamu disini!"
                      }]
class Login extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner imageurl="assets/Tentang-Kami.jpg" contentBanner={contentAccount}>
          <button type="button" className="btn btn-daftar red">Daftar Sekarang</button>
        </Banner>
        <ImageCircle contentdetail={contentdetail}/>
        <Formlogin/>
        <Footer/>
      </div>
    );
  }
}

export default Login;
