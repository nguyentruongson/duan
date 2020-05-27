import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './box-result.css';
import Network from '../../Service/Network'

const api = new Network()

export default class CarItemSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
}



	render() {
			

			return  (
				<div className="box-tke">
										  <div className="row fivecolumns">
											  <div className="col-md-2 col-sm-2 col-xs-12 mb-20"><span className="box-vn">Việt Nam</span></div>
											  
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new mb-20">Số ca nhiễm  <span className="font24">268</span></div>
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-warning1 mb-20">Đang điều trị  <span className="font24">54</span></div>
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-primary mb-20">Đã chữa khỏi  <span className="font24">214</span></div>
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new1 mb-20">Tử vong  <span className="font24">0</span></div>
										  </div>
										  		
										  <div className="row fivecolumns">
											  <div className="col-md-2 col-sm-2 col-xs-12 mb-20"><span className="box-tg">Thế giới</span></div>
											  
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new mb-20">Tổng ca nhiễm  <span className="font24">2.430.728</span></div>
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-warning1 mb-20">Đang nhiễm  <span className="font24">1.627.129</span></div>
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-primary mb-20">Đã chữa khỏi  <span className="font24">637.328</span></div>
											  <div className="col-md-2 col-sm-2 col-xs-6 text-center text-uppercase text-danger-new1 mb-20">Tử vong  <span className="font24">166.271</span></div>
										  	
										  </div>
				</div>

				
			);
		}
	}