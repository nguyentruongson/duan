import React from 'react';
import Network from '../../Service/Network';

import MapContainer from '../DashBoard/mar';
import 'bootstrap/dist/css/bootstrap.css';
import FetchDataFromRSSFeed from '../DashBoard/rss';
import * as Highcharts from 'highcharts';
import './body.css';

const api = new Network()
var arr_data = []
var arr_sys = []

 
class BodyCom extends React.Component { 

	constructor(props) {
		super(props);
		this.componentGetCase = this.componentGetCase.bind(this);
		this.componentGetSys = this.componentGetSys.bind(this);
		this.state = {	
			getsys : {
				symptom: '',
				percentage : 0
			}, 
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
		
	

	async componentGetCase() {
		try {
            const response = await api.get(`/api/case`);
            arr_data.push(Object.values(response.data.data))
			this.setState({ data_1: arr_data[0][0], data_2: arr_data[0][1], loading: false });
        } catch (e) {
            console.log("Error ====> ", e);
		}
	}

	async componentGetSys() {
		try {
            const response = await api.get(`/api/case/symptom`);
			arr_sys.push(Object.values(response))
			console.log(arr_sys)
			this.setState({ getsys :  arr_sys[0], loading: false });
			console.log(this.state.getsys[0])
			Highcharts.setOptions({
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			});
			Highcharts.chart('trieu chung', {
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Triệu chứng của các ca bệnh<br/> khi được phát hiện',
					style: {
						fontFamily: 'Arial',
						fontSize: '18px'
					}
				},
				subtitle: {
					text: null
				},
				xAxis: {
					type: 'category',
					labels: {	
						style: {
							fontSize: '13px',
							fontFamily: 'Arial'
						}
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Tỉ lệ'
					},
					
				},
				legend: {
					enabled: false
				},
				tooltip: {
					pointFormat:'Tỉ lệ: {point.y}%'
				},
				series: [{
					name: 'Tỉ lệ phần trăm',
					colorByPoint: true,
					data: [
						[this.state.getsys[0].symptom, this.state.getsys[0].percentage],
						[this.state.getsys[1].symptom, this.state.getsys[1].percentage],
						[this.state.getsys[2].symptom, this.state.getsys[2].percentage],
						[this.state.getsys[3].symptom, this.state.getsys[3].percentage],
						[this.state.getsys[4].symptom, this.state.getsys[4].percentage],
						[this.state.getsys[5].symptom, this.state.getsys[5].percentage],
						[this.state.getsys[6].symptom, this.state.getsys[6].percentage],
						[this.state.getsys[7].symptom, this.state.getsys[7].percentage]
					],
					dataLabels: {
						enabled: true,
						color: '#FFFFFF',
						align: 'right',
						format: '{point.y}%', // one decimal
						y: 10, // 10 pixels down from the top
						style: {
							fontSize: '12px',
							fontFamily: 'Arial'
						}
					}
				}]
			});
		 
		
        } catch (e) {
            console.log("Error ====> ", e);
		}		
	}

	componentDidMount() {
		this.componentGetCase();
		this.componentGetSys();
	}

	

	render()  {
		const data_1 = this.state.data_1
		const data_2 = this.state.data_2

		return ( 
				<div>
					<div className="col-md-4">
						<div className="maps-container" style={{ height: '700px', width: '100%' }}>		    <MapContainer />				                      
			                    </div>
							</div>

							<div className="col-md-5"  >
								<div style={{paddingLeft:'15px'}}> 
									 
										<div className="box-tke">
											<div style={{height:'90px'}}>
												<div className="col-md-2 col-sm-2 col-xs-2 mb-20">
													<div><span className="box-vn">Việt Nam</span></div>
												</div>
												<div className="row col-md-10 col-sm-10 col-xs-10" style={{marginLeft:'15px'}}>
													<div className="row" style={{fontSize:'12px' ,height:'45px'}}>
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
											<hr />  		
											<div style={{height:'90px'}}>
												<div className="col-md-2 col-sm-2 col-xs-2 mb-20">
													<div ><span className="box-tg" >Thế giới</span></div>
												</div>
												<div className="row col-md-10 col-sm-10 col-xs-10" style={{marginLeft:'15px'}}>								  
												<div className="row" style={{fontSize:'12px' ,height:'45px'}}>
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
							    
							   <div style={{paddingLeft:'15px'}}>
							<div className="box-tke" style={{marginBottom: 0,height: '459px'}}>
							<div id="trieu chung" style={{paddingTop: '4%'}}></div>
							</div>   
							</div>				
							</div>
							<div className="col-md-2" style={{paddingLeft:0}}>
							<div style={{borderRadius: '6px',overflow:'hidden',height: '700px',width: 'fit-content'}}>
								<iframe style={{border: '0px none', height: '812px', marginTop: '-44px',background:'white',height:'744px'}} src="https://timkiem.vnexpress.net/?search_f=title%2Ctag_list&q=Covid-19&media_type=all&fromdate=0&todate=0&latest=&cate_code=&date_format=all&fbclid=IwAR0YsTs_Ah4Mk3aorccJBoTghd2Wx4s7sKdShiTrfaSdC_ox_VPOHWiaY5w"  >
							</iframe>
							</div>
								</div>
														
						</div>
	
			);
	}
}
export default BodyCom;




