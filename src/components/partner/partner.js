import React, {  } from 'react';
import './partner.css';

const Partner=({imagePartner}) => {
  return(
    <div>
      <img className="img-partner-cm" src="./assets/CodeMargonda-Circle.png"/>
        <div className="partner-code text-center">
          <h3><b>PARTNER</b></h3>
          <ul>
              {imagePartner.map(function(imagePartner, index){
                  return <li key={index}><img className="img-partner" src={imagePartner.image} alt={imagePartner.altimage}/></li>
              })}
          </ul>
        </div>
    </div>
  );
}

export default Partner;
