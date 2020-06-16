import React from 'react';
import axios from 'axios';
import { Redirect,NavLink } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import MidleService from '../../Service/MidleEvent'
import moment from 'moment';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CarItemSearch from '../common/car-item-search'
import BoxResult from '../common/box-result'
import Marker1 from './maker'
import Network from '../../Service/Network'
import { RotateSpinner } from "react-spinners-kit";
import PageLoading from "../libs/pageloader";
import './style.css';
import MapContainer from './mar';
import Highcharts from 'highcharts';
import ChartCom from '../chart/chart';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderCom from '../header/header';
import News from '../news/news';
import FetchDataFromRSSFeed from './rss';
import FooterCom from '../Footer/Footer';

const api = new Network()
var arr_data = []


 
class DashBoard extends React.Component { 

	

	constructor(props) {
		super(props);
		this.componentGetCase = this.componentGetCase.bind(this);

		this.state = {	 
            data_1: {
                cases: '',
                deaths: '',
                recovered: ''
            },
            data_2: {
                cases: '',
                deaths: '',
                recovered: ''
            },
            loading: true,	
        };
	}
		
	highChartsRender() {}

	async componentGetCase() {
		try {
            const response = await api.get(`/api/case`);
            arr_data.push(Object.values(response.data.data))
			this.setState({ data_1: arr_data[0][0], data_2: arr_data[0][1], loading: false });
        } catch (e) {
            console.log("Error ====> ", e);
		}
	}

	componentDidMount() {
		this.componentGetCase();
		this.highChartsRender();
	}

	

	render()  {
		const data_1 = this.state.data_1
		const data_2 = this.state.data_2

		return (
				<div className="container-map" style={{}}>
					
					<HeaderCom />
						<PageLoading show={false} />
						<div className="row ">
							<div className={'col-md-4 offset-md-1 col-sm-12 map-view-search maphide'} >
								<div className={"maps-container"} style={{ height: '700px', width: '100%' }}>									
									  <MapContainer />				                      
			                    </div>
							</div>

							<div className="col-md-7" style={{display:'block'}}>
								<div> 
									<div className="col-md-12" >
										<div className="box-tke">
											<div className="row fivecolumns">
												<div className="col-md-2 col-sm-2 col-xs-2 mb-20" style={{marginLeft: 'auto'}}>
													<div><span className="box-vn">Việt Nam</span></div>
												</div>
												<div className="row col-md-10 col-sm-10 col-xs-10">
													<div className="row">
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new mb-20">Số ca nhiễm</div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-warning1 mb-20">Đang điều trị</div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-primary mb-20">Đã chữa khỏi</div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new1 mb-20">Tử vong</div>
													</div>
													<div className="row">
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new mb-20"><span className="font24">{data_2.cases}</span></div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-warning1 mb-20"><span className="font24">{data_2.cases - data_2.recovered - data_2.deaths}</span></div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-primary mb-20"><span className="font24">{data_2.recovered}</span></div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new1 mb-20"><span className="font24">{data_2.deaths}</span></div>
													</div>
												</div>
											</div>
											<hr style={{marginTop:'1px'}}/>  		
											<div className="row fivecolumns">
												<div className="col-md-2 col-sm-2 col-xs-2 mb-20" style={{marginLeft: 'auto'}}>
													<div ><span className="box-tg">Thế giới</span></div>
												</div>
												<div className="row col-md-10 col-sm-10 col-xs-10">											  
												<div className="row">
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new mb-20">Số ca nhiễm</div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-warning1 mb-20">Đang điều trị</div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-primary mb-20">Đã chữa khỏi</div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new1 mb-20">Tử vong</div>
													</div>
													<div className="row">
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new mb-20"><span className="font24">{data_1.cases}</span></div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-warning1 mb-20"><span className="font24">{data_1.cases - data_1.recovered - data_1.deaths}</span></div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-primary mb-20"><span className="font24">{data_1.recovered}</span></div>
														<div className="col-md-3 col-sm-3 col-xs-3 text-center text-uppercase text-danger-new1 mb-20"><span className="font24">{data_1.deaths}</span></div>
													</div>
												</div>
											</div>
										</div>
									</div>								
							   </div>
							   <div className="container" style={{height: '390px', overflow: 'auto'}}>
							  		<FetchDataFromRSSFeed/>
								</div>								
							</div>							
						</div>
						<FooterCom/>
				</div>
			);
	}
}
export default DashBoard;




