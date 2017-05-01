import React, {  } from 'react';

const Partner=({imagePartner}) =>
<div>
    {imagePartner.map(function(imagePartner, index){
        return(
            <div className="col-xs-12">
                <img className="img-logo" src={imagePartner.image} alt={imagePartner.alt}/>
            </div>
        )
    })}
</div>
export {Partner};
