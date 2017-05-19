import React from 'react';
import './alamat.css';

const Alamat = () => {
  return(
    <div className="alamat-code text-size" style={{backgroundImage:"url('assets/img-coworking3.JPG')"}}>
        <div className="container">
            <div className="col-xs-12 col-sm-6">
                <h4><b>LOKASI</b></h4>
                <h4><b>Ruko Veneta Lantai 2</b></h4>
                <p>Jalan Margonda Raya no. 349, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16424, Indonesia</p>
                <div className="contact-us">
                    <h4>Mail : codemargonda@gmail.com</h4>
                    <h4>Telp : +62 21 22710912</h4>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6">
                <div id="map" className="alamat-code">
                </div>
            </div>
        </div>
    </div>
  );
}

export default Alamat;
