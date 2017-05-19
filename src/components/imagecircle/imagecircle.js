import React from 'react';
import './imagecircle.css';

const ImageCircle = ({contentdetail}) =>{
  return(
    <div className="imageclass container text-center">
      <div className="col-xs-12">
        <ul>
        {contentdetail.map(function(contentdetail, index){
          return (
            <li key={index}>
              <div className="col-xs-12 content">
                  <img className="img-responsive img-logo" src={contentdetail.image} alt="CCC"/>
                  <h3>{contentdetail.title}</h3>
                  <p>{contentdetail.textLine}</p>
              </div>
            </li>
          )
          })}
       </ul>
      </div>
    </div>
  );
}

export default ImageCircle;
