import React, { Component } from 'react';
import './App.css';
import {Navbar} from './components/navbar.js';
import {Banner} from './components/banner.js';
import {ImageCircle} from './components/image.js';
import {Footer} from './components/footer.js';

const contentBanner=[{
                          key: "1",
                          detail: "CODE COURSE CAMP"
                      },{
                          key: "2",
                          detail: "Semua Orang Bisa Belajar Coding!!"
                      }]
const contentdetail = {
                        image: "assets/codecoursecamp-logo.png",
                        title: "APA ITU CCC?",
                        textLine: "Code Course Camp (CCC) adalah kursus yang dibuat oleh Code Margonda. Kursus ini diperuntukkan untuk kamu yang ingin membuat aplikasi android sendiri sesuai dengan kebutuhan kamu. CCC terbagi menjadi tida kelas, yaitu basic, intermediate, dan advanced yang masing-masing terdiri dari 12 pertemuan."
                      }
const contentpengajar = [{
                          image: "assets/codecoursecamp-logo.png",
                          title: "David Cornelius",
                          textLine: "Android Developer"
                        },{
                          image: "assets/codecoursecamp-logo.png",
                          title: "Gungde Aditya",
                          textLine: "Android Developer"
                        },{
                          image: "assets/codecoursecamp-logo.png",
                          title: "Fuad Aji Pratomo",
                          textLine: "Web Developer"
                        },{
                          image: "assets/codecoursecamp-logo.png",
                          title: "Jefri Yushendri",
                          textLine: "Web Developer"
                        }]

class App extends Component{
  render() {
    return (
      <div className="ccc-web-component">
        <Navbar></Navbar>
        <Banner contentBanner={contentBanner} imageurl="assets/img-coworking3.JPG">
          <div className="col-xs-12">
            <button type="button" className="btn btn-daftar-ccc red">Daftar Sekarang</button>
            <button type="button" className="btn btn-lanjut-ccc">Lebih Lanjut</button>
          </div>
        </Banner>

        <div className="ccc-content">
          <ImageCircle contentdetail={contentdetail}></ImageCircle>
        </div>
        <div className="pilihan-kelas text-center">
          <div className="container">
            <h3>PILIHAN KELAS</h3>
            <div className="android-ccc">
              <img className="img-ccc" src="./assets/android.png" alt="Android-CCC"/>
              <h3>Android Development</h3>
              <p>Memperlajari cara membuat aplikasi Android dengan menggunakan android studio</p>
            </div>
            <div className="web-ccc">
              <img className="img-ccc" src="./assets/hml5.png" alt="Web CCC"/>
              <h3>Web Development</h3>
              <p>Memperlajari cara membuat website dengan teknologi CI dan Laravel</p>
            </div>
          </div>
        </div>
        <div className="pengajar-ccc">

        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
