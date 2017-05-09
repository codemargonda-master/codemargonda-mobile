import React from 'react';
import './alamat.css';

const Alamat = () =>
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
export {Alamat};
