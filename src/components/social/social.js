import React from 'react';
import './social.css';

const Social = () => {
  return(
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
    );
  }

export default Social;
