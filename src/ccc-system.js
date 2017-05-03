import React, { Component } from 'react';
import './ccc-system.css';
import {Navbar} from './components/navbar/navbar.js';
import {Banner} from './components/banner/banner.js';
import {ImageCircle} from './components/imagecircle/imagecircle.js';
import {Kalender} from './components/kalender/kalender.js';
import {Footer} from './components/footer/footer.js';

const contentBanner=[{
                        detail: "CODE COURSE CAMP"
                      },{
                        detail: "Semua Orang Bisa Belajar Coding!!"
                      }]

const contentdetail = {
                        "ccc" :
                        [{
                          image: "assets/codecoursecamp-logo.png",
                          title: "APA ITU CCC?",
                          textLine: "Code Course Camp (CCC) adalah kursus yang dibuat oleh Code Margonda. Kursus ini diperuntukkan untuk kamu yang ingin membuat aplikasi android sendiri sesuai dengan kebutuhan kamu. CCC terbagi menjadi tida kelas, yaitu basic, intermediate, dan advanced yang masing-masing terdiri dari 12 pertemuan."
                        }],
                        "kelas":
                        [{
                          image: "assets/android.png",
                          title: "Android Development",
                          textLine: "Memperlajari cara membuat aplikasi Android dengan menggunakan android studio"
                        },{
                          image: "assets/hml5.png",
                          title: "Web Development",
                          textLine: "Android Developer"
                        }],
                        "pengajar":
                        [{
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
                        // "kelas":
                        // [
                        //   "android":
                        //   [{
                        //     image: "assets/android.png",
                        //     title: "Android Development",
                        //     textLine: "Memperlajari cara membuat aplikasi Android dengan menggunakan android studio"
                        //   }],
                        //   "web":
                        //   [{
                        //     image: "assets/hml5.png",
                        //     title: "Web Development",
                        //     textLine: "Memperlajari cara membuat website dengan teknologi CI dan Laravel"
                        //   }]
                        // ]
                      }

const contentkalender = [{
                          kelas: "Android",
                          tingkat: "Beginner",
                          tes: "20 Jan 2017",
                          awal: "20 Jan 2017",
                          akhir: "20 Jan 2017",
                          status: "Tutup"
                        },{
                          kelas: "Web",
                          tingkat: "Beginner",
                          tes: "27 Jan 2017",
                          awal: "27 Jan 2017",
                          akhir: "27 Jan 2017",
                          status: "Tutup"
                        },{
                          kelas: "Android",
                          tingkat: "Intermediate",
                          tes: "07 Feb 2017",
                          awal: "07 Feb 2017",
                          akhir: "07 Feb 2017",
                          status: "Tutup"
                        },{
                          kelas: "Web",
                          tingkat: "Beginner",
                          tes: "03 Mar 2017",
                          awal: "03 Mar 2017",
                          akhir: "03 Mar 2017",
                          status: "Tutup"
                        },{
                          kelas: "Web",
                          tingkat: "Intermediate",
                          tes: "15 Apr 2017",
                          awal: "15 Apr 2017",
                          akhir: "15 Apr 2017",
                          status: "Tutup"
                        },{
                          kelas: "Android",
                          tingkat: "Beginner",
                          tes: "02 Mei 2017",
                          awal: "02 Mei 2017",
                          akhir: "02 Mei 2017",
                          status: "Buka"
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

        <div className="container">
          <div className="ccc-content">
            <ImageCircle contentdetail={contentdetail.ccc}></ImageCircle>
          </div>

          <div className="pilihan-kelas">
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
          <h3>PENGAJAR</h3>
          <ImageCircle contentdetail={contentdetail.pengajar}></ImageCircle>
        </div>

        <div className="tingkatan-ccc">
          <h3>TINGKATAN</h3>
        </div>

        <div className="jadwal-ccc">
          <h3>JADWAL KURSUS</h3>
          <Kalender contentkalender={contentkalender}></Kalender>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
