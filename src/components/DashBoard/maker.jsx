import React, { Component } from "react";
import {Link} from "react-router-dom";
class Maker1 extends Component {
    constructor(props) {
      super(props);
      this.hoverMaker = this.hoverMaker.bind(this)
      this.showBox = this.showBox.bind(this)
      this.state = {
          className:"maps-maker",
          showBox:false
      }
    }
    hoverMaker(){
      this.setState({className:"maps-maker"})
      setTimeout(
          function() {
              this.setState({className:"maps-maker animated bounce"})
          }
          .bind(this),
          30
      );
     
    }
    showBox(isShow){
      this.setState({showBox:isShow})
      if(isShow){
        this.props.openEvent()
      }else{

      }
    }
    render() {
        var price = 'RM --';
        var duration = 'day';
        if(this.props.data.price_daily){
          price = this.props.data.price_daily
          duration = 'day';
        }else if(this.props.data.price_weekly){
          price = this.props.data.price_weekly
          duration = 'week';
        }else if(this.props.data.price_monthly){
          price = this.props.data.price_monthly
          duration = 'month';
        }else if(this.props.data.price_yearly){
          price = this.props.data.price_yearly
          duration = 'year';
        }

        return (
           <div className="maker-contaimer">
            <div className={this.state.showBox?"maker-box":"maker-box hide"}>
             <div className="img-thumb" style={{backgroundImage:`url('${this.props.data.thumbnail}')`}}>

              <div className="car-price">
                <span>{price}</span>/{duration}
              </div>
             </div>
             <div className="car-info">

              <h5>{this.props.data.title}</h5>

              <div className="row">
                <div className="col-6">
                  <div className="rating">
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star "></span>
                  </div>
                  9 trips
                </div>
                <div className="col-6 book-button">
                  <Link to={`/car-detail/${this.props.data.slug}`}><button className="btn-marker">Book Instantly</button></Link>
                </div>
              </div>

              </div>
            </div>
            <img onClick={this.showBox.bind(this, true)} className={this.state.className} src="/images/map/bookacar.svg" alt=""/>
           </div>
        )
    }
}

export default Maker1;