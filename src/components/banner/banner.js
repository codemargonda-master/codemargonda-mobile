import React from 'react';
import './banner.css';

const Banner = ({imageurl, children, contentBanner={contentBanner}} )=>
  <div>
    <div className="parallax" style={{backgroundImage: 'url(' + imageurl + ')' }}>
      <div className="layer">
        <div className="layer-component text-center">
          <div className="col-xs-12">
              <img className="img-banner" src="assets/codemargonda-logo-transparant.png" alt="codemargonda-logo-small.png"/>
              <ul>
                {contentBanner.map(function(contentBanner, index){
                  return (
                    <li key={index}><h4>{contentBanner.detail}</h4></li>
                  )
                })}
                <li>{children}</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

export {Banner};
