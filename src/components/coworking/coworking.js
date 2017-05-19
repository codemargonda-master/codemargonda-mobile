import React from 'react';
import ImageCircle from '../imagecircle/imagecircle';
import './coworking.css';

const contentdetail = [{
                          image: "assets/Tentang Kami-Image(circle)-Code Margonda.png",
                          title: "COWORKING SPACE",
                          textLine: "Coworking space adalah tempat bekerja untuk semua orang mulai dari profesional sampai mereka yang baru ingin belajar. Disini semua orang diharapkan untuk dapat bekerja sama dalam bertukar pikiran dan berinteraksi untuk mengembangkan ide tanpa ada batasan."
                        }]

const Coworking = ()=> {
  return(
    <div id="coworking-space" className="coworking-space text-center">
      <div className="square red">
        <h1>CODE</h1>
      </div>
        <div className="coworking-content container">
            <ImageCircle contentdetail={contentdetail}></ImageCircle>
            <button type="button" className="btn btn-default red">DAFTAR MEMBER</button>
        </div>
    </div>
    );
  }


export default Coworking;
