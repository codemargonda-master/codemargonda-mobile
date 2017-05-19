import React from 'react';
import './footer.css';

const Footer = ()=> {
  return(
    <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6">
                        <h4>BERANDA</h4>
                        <ul className="footer-list">
                            <li><a href="#">Code Margonda</a></li>
                            <li><a href="#">Coworking Space</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6">
                        <h4>TENTANG KAMI</h4>
                        <ul className="footer-list">
                            <li><a href="#">Tentang Code</a></li>
                            <li><a href="#">Alamat</a></li>
                            <li><a href="#">Kontak</a></li>
                            <li><a href="#">Partner</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6">
                        <h4>ANGGOTA</h4>
                        <ul className="footer-list">
                            <li><a href="#">Operasional</a></li>
                            <li><a href="#">Fasilitas</a></li>
                            <li><a href="#">Harga</a></li>
                            <li><a href="#">Cara Daftar</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6">
                        <h4>PROGRAM</h4>
                        <ul className="footer-list">
                            <li><a href="#">Margodev+ Seminar</a></li>
                            <li><a href="#">Margodev+ Workshop</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6">
                        <h4>CCC</h4>
                        <ul className="footer-list">
                            <li><a href="#">Apa itu CCC?</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6">
                        <h4>ACARA</h4>
                        <ul className="footer-list">
                            <li><a href="#">Ruang Pertemuan</a></li>
                            <li><a href="#">Kalender</a></li>
                            <li><a href="#">Galeri</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-content">
                <div className="col-xs-6 col-sm-6">
                    <p>&#169; Code Margonda 2017</p>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
