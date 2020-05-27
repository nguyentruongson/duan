import React, { Component } from "react";
import {Link} from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default class CarItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
             return this.props.loading?(<div>
                 <SkeletonTheme>
                      <div className="img car-item">
                        <div className="car-image">
                        <Skeleton height={200}/>
                        </div>
                        <div className="car-item-detail" style={{ borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px', height: '160px' }}>
                          <div>
                            <div className="title-item-car"><Skeleton height={30}/></div>
                            <div className="rating " style={{ marginTop: '2px' }}>
                              <Skeleton height={20}/>
                            </div>
                            <div className="row">
                              <div className="col-md-6"><Skeleton height={20}/></div>
                              <div className="col-md-6"><Skeleton height={20}/></div>
                            </div>
                            </div>
                        </div>
                      </div>
                      </SkeletonTheme>

                  </div>):(
                  <div onMouseEnter={() => {if(this.props.hoverEvent){this.props.hoverEvent(this.props.key)}}} onMouseLeave={() => {if(this.props.leaveEvent){this.props.leaveEvent(this.props.key)}}}>
                       <Link to={`${this.props.slug_prefix?this.props.slug_prefix:'/car-detail/'}${this.props.data.slug}`}>
                            <div className="img car-item">
                              <div className="car-image"><img style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px', height: '300px' }} data-src={this.props.data.thumbnail} src={this.props.data.thumbnail} className="car_thumbnail lazy" alt="" />
                              </div>
                              <div className="car-item-detail" style={{ borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px', height: '160px' }}>
                                <div>
                                  <div className="title-item-car" title={this.props.data.title}>{this.props.data.title}</div>
                                  <div className="rating " style={{ marginTop: '2px' }}>
                                    <span className="fa fa-star" style={{paddingRight: '5px'}}/>
                                    <span className="fa fa-star" style={{paddingRight: '5px'}}/>
                                    <span className="fa fa-star" style={{paddingRight: '5px'}}/>
                                    <span className="fa fa-star" style={{paddingRight: '5px'}}/>
                                    <span className="fa fa-star" style={{paddingRight: '5px'}}/>
                                  </div>
                                  <div style={{ marginTop: '2px', display: (this.props.data.price_daily!=null)?'flex':'none' }} ><span className="  "><img src="/images/home/icon/cenperday.png" alt="" style={{ marginTop: '4px' }} /></span>
                                    {/* <span class="price">RM350.00/Day</span> */}
                                    <span className="price" style={{ marginTop: '5px' }}>{this.props.data.price_daily}/Day</span>
                                  </div>
                                  <div style={{ marginTop: '2px', display:  (this.props.data.price_monthly!=null)?'flex':'none' }} ><span className=" "><img src="/images/home/icon/calender.png" alt="" style={{ marginTop: '4px' }} /></span>
                                    {/* <span class="price">RM2,800.00/Month</span> */}
                                    <span className="price" style={{ marginTop: '5px' }}>{this.props.data.price_monthly}/Month</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </Link>
                  </div>
                  ) 
          }
   
}