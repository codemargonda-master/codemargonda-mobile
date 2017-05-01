import React from 'react';

const ImageCircle = ({contentdetail}) =>
  <div className="row container text-center">
    <div className="col-xs-12">
        <img className="img-responsive img-logo" src={contentdetail.image} alt="CCC"/>
    </div>
    <div className="col-xs-12">
        <h3>{contentdetail.title}</h3>
        <p>{contentdetail.textLine}</p>
    </div>
  </div>


const ImagePelajar = ({contentpengajar}) =>
    <div className="row container text-center">
      <div className="col-xs-12">
      <ul>
        {contentpengajar.map}
          <img className="img-responsive img-logo" src={contentdetail.image} alt="CCC"/>
      </div>
      <div className="col-xs-12">
          <h3>{contentdetail.title}</h3>
          <p>{contentdetail.textLine}</p>
      </div>
    </div>
export {ImageCircle};
