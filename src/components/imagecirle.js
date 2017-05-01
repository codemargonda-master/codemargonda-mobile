import React from 'react';

export class Content extends React.Component{
  render(){
    return(
      <div className="row container text-center">
        <div className="col-xs-12">
            <img className="img-responsive img-logo" src={this.props.contentdetail.image} alt="CCC"/>
        </div>
        <div className="col-xs-12">
            <h3>{this.props.contentdetail.title}</h3>
            <p>{this.props.contentdetail.textLine}</p>
        </div>
      </div>
    )
  }
}
