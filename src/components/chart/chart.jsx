import React from 'react';
import Network from '../../Service/Network';
import * as Highcharts from 'highcharts';
import HeaderCom from '../header/header';
import './chart.css';

const api = new Network()
var arr_son = []
var arr_datanuance = []
var arr_age = []
var arr_dis = []


class ChartCom extends React.Component { 

	constructor(props) {
		super(props);
		this.componentGetSource = this.componentGetSource.bind(this);
		this.componentGetSourceNuance = this.componentGetSourceNuance.bind(this);
		this.componentGetAgeByConditions = this.componentGetAgeByConditions.bind(this);
		this.componentGetPbo = this.componentGetPbo.bind(this);
		this.componentGetRatio = this.componentGetRatio.bind(this);
		this.componentGetDiss = this.componentGetDiss.bind(this);
		
		this.state = {
			
			getdis1:{
				day: '',
				mention_count: 0
			},
            anh_1: {
                Source: '',
                amount: '',
                percentage : 0
			},
			anh_2: {
                Source: '',
                amount: '',
                percentage : 0
			},
			anh_3: {
                Source: '',
                amount: '',
                percentage : 0
			},
			anh_4: {
                Source: '',
                amount: '',
                percentage : 0
			},
			anh_5: {
                Source: '',
                amount: '',
                percentage : 0
			},
			anh_6: {
                Source: '',
                amount: '',
                percentage : 0
			},
			age_1 :{
				id_age: '',
				ratio: '',
				male_ratio: '',
				female_ratio: '',
				male_amount: '',
				female_amount: ''
			},
			age_2 :{
				id_age: '',
				ratio: '',
				male_ratio: '',
				female_ratio: '',
				male_amount: '',
				female_amount: ''
			},
			age_3 :{
				id_age: '',
				ratio: '',
				male_ratio: '',
				female_ratio: '',
				male_amount: '',
				female_amount: ''
			},
			age_4 :{
				id_age: '',
				ratio: '',
				male_ratio: '',
				female_ratio: '',
				male_amount: '',
				female_amount: ''
			},
			age_5 :{
				id_age: '',
				ratio: '',
				male_ratio: '',
				female_ratio: '',
				male_amount: '',
				female_amount: ''
			},
			age_6 :{
				id_age: '',
				ratio: '',
				male_ratio: '',
				female_ratio: '',
				male_amount: '',
				female_amount: ''
			},
			 
            loading: true,

			positive : '',
			negative : '',
			neutral : '',


        };
	}
		
	 	

	async componentGetSource() {
		try {
            const response = await api.get(`/api/source`);
			arr_son.push(Object.values(response))

			this.setState({ anh_1 :  arr_son[0][0][0],
				anh_2 :  arr_son[0][0][1],
				anh_3 :  arr_son[0][0][2],
				anh_4 :  arr_son[0][0][3],
				anh_5 :  arr_son[0][0][4],
				anh_6 :  arr_son[0][0][5]
				, loading: false });
			
			Highcharts.chart({
			chart: {
				type: 'pie',
				renderTo : 'Nguon du lieu'
					
			},
			title: {
				 
				text: 'Biểu đồ về <br/>nguồn dữ liệu',
				style: {
                    fontFamily: 'Arial',
					fontSize: '18px',
				}
			},
			

			plotOptions: {
				pie: {
					dataLabels: {
						format: '{point.name}: {point.y} %',
						style: {
							fontFamily: 'Arial',
							fontSize: '12px',
						}
					},
				innerSize: '70%'
				},	
			},
			series: [{
				name: 'Tỉ lệ',
					data : [
						{
							name: this.state.anh_1.Source + '(' + this.state.anh_1.amount + ')',
							y: this.state.anh_1.percentage
						},
						{
							name: this.state.anh_2.Source + '(' + this.state.anh_2.amount + ')',
							y: this.state.anh_2.percentage
						},
						{
							name: this.state.anh_3.Source + '(' + this.state.anh_3.amount + ')',
							y: this.state.anh_3.percentage
						},
						{
							name: this.state.anh_4.Source + '(' + this.state.anh_4.amount + ')',
							y: this.state.anh_4.percentage
						},
						{
							name: this.state.anh_5.Source + '(' + this.state.anh_5.amount + ')',
							y: this.state.anh_5.percentage
						},
						{
							name: this.state.anh_6.Source + '(' + this.state.anh_6.amount + ')',
							y: this.state.anh_6.percentage
						},
					]
				}]
		})		
        } catch (e) {
            console.log("Error ====> ", e);
		}		
	}

	async componentGetSourceNuance () {
		try {
            const response = await api.get(`/api/source/nuance`);
            arr_datanuance.push(Object.values(response))
            if (response) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            this.setState({ positive: arr_datanuance[0], negative: arr_datanuance[1], neutral : arr_datanuance[2],  loading: false });
			
			Highcharts.setOptions({
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			});
            Highcharts.chart({
                chart: {
                    type: 'pie',
                    renderTo: 'Sac thai thao luan'
                },
                title: {
                    
                    text: 'Biểu đồ về <br/>sắc thái thảo luận',
                    style: {
						fontSize: '18px',
						fontFamily: 'Arial'
                    }
                },
				 
				tooltip: {
					pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				 
				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							format: '<b>{point.name}</b>: {point.y} %'
						}
					}
				},
                series: [{
					name: 'Tỉ lệ',
					colorByPoint: true,
					data: [{
						name: 'Tích cực',
						y: this.state.positive[0],
						sliced: true,
						selected: true
					}, {
						name: 'Tiêu cực',
						y: this.state.positive[1]
					}, {
						name: 'Trung tính',
						y: this.state.positive[2]
					}]
				}]
  
                });               
            }
        } catch (e) {
            console.log("Error ====> ", e);
		}
	}

	async componentGetAgeByConditions() {
		try {
            const response = await api.get(`/api/age`);
			arr_age.push(Object.values(response))
			this.setState({ 
				age_1 :  arr_age[0][0],
				age_2 :  arr_age[0][1],
				age_3 :  arr_age[0][2],
				age_4 :  arr_age[0][3],
				age_5 :  arr_age[0][4],
				age_6 :  arr_age[0][5]
				, loading: false });
			// Create the chart
			Highcharts.setOptions({
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			});

			Highcharts.chart('getAgeRatio', {

				chart: {
					type: 'column',
					 
				},
			
				title: {
					text: 'Biểu đồ về độ tuổi<br/>nhiễm bệnh phổ biến',
					style: {
						fontFamily: 'Arial',
						fontSize: '18px',
					}
				},

			
				subtitle: {
					text: null
				},
				xAxis: {
					categories: ['Tỉ lệ'],
					style : {
						fontFamily: 'Arial',				 
					}
				},
				 

				yAxis: {
					title: {
						text: null
					},
					labels: {
						formatter: function () {
							return this.value  ;
						},
						style : {
							fontFamily: 'Arial',
					 
						}
					},
					style : {
						fontFamily: 'Arial',
				 
					}
				},
				plotOptions: {
					column : {
						dataLabels: {
							enabled: true,
							inside: true
						},
						style : {
							fontFamily: 'Arial',
					 
						}
					}
				},
				 
			
				series: [
				{
					dataLabels: [{ 
						format:  '{point.rati} %',

						style : {
							fontFamily: 'Arial',
					 
						}
					}
				],
					data: [
						{
							rati: this.state.age_1.ratio,
							y: this.state.age_1.female_amount + this.state.age_1.male_amount
						},
						
					],
					 name: this.state.age_1.id_age,
					 style : {
						fontFamily: 'Arial',
				 
					}
				},
				
				{
					dataLabels: [{ 
						format:  '{point.rati} %'
					}
				],
					data: [
						
						{
							rati: this.state.age_2.ratio,
							y: this.state.age_2.female_amount + this.state.age_2.male_amount
						}
					],
					 name: this.state.age_2.id_age
				},
				{
					dataLabels: [{ 
						format:  '{point.rati} %'
					}
				],
					data: [
						
						{
							rati: this.state.age_3.ratio,
							y: this.state.age_3.female_amount + this.state.age_3.male_amount
						}
					],
					 name: this.state.age_3.id_age
				},
				{
					dataLabels: [{ 
						format:  '{point.rati} %'
					}
				],
					data: [
						
						{
							rati: this.state.age_4.ratio,
							y: this.state.age_4.female_amount + this.state.age_4.male_amount
						}
					],
					 name: this.state.age_4.id_age
				},
				{
					dataLabels: [{ 
						format:  '{point.rati} %'
					}
				],
					data: [
						
						{
							rati: this.state.age_5.ratio,
							y: this.state.age_5.female_amount + this.state.age_5.male_amount
						}
					],
					 name: this.state.age_5.id_age
				},
				{
					dataLabels: [{ 
						format:  '{point.rati} %'
					}
				],
					data: [
						
						{
							rati: this.state.age_6.ratio,
							y: this.state.age_6.female_amount + this.state.age_6.male_amount
						}
					],
					 name: this.state.age_6.id_age
				}
			]
			
			});
							
				
        } catch (e) {
           		console.log("Error ====> ", e);
			};
	}
	
	async componentGetPbo() {
			try {
				const response = await api.get(`/api/age`);
				arr_age.push(Object.values(response))
				this.setState({ 
					age_1 :  arr_age[0][0],
					age_2 :  arr_age[0][1],
					age_3 :  arr_age[0][2],
					age_4 :  arr_age[0][3],
					age_5 :  arr_age[0][4],
					age_6 :  arr_age[0][5]
					, loading: false });
			 
			var categories = [
						this.state.age_1.id_age, 
						this.state.age_2.id_age, 
						this.state.age_3.id_age, 
						this.state.age_4.id_age, 
						this.state.age_5.id_age, 
						this.state.age_6.id_age
			];
			Highcharts.setOptions({
				colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
			});

			Highcharts.chart('getGenderRatio', {
				chart: {
					type: 'bar',
					marginLeft: 50,
					marginBottom: 90
				},

				title: {
					text: 'Biểu đồ phân bổ giới tính <br/>theo độ tuổi',
					style: {
						fontFamily: 'Arial',
						fontSize: '18px',
					}
				},
				xAxis: {
					
					categories: categories,
					style : {
						fontFamily: 'Arial',
				 
					}
				},
				yAxis:{
					title: {
						text:null
					},
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true,
							inside: true
						}
					},
					series: {
						stacking: 'percent'
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'top',
					x: 7,
					y: -7,
					floating: true,
					borderWidth: 1,
					backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
					shadow: true
				},
			
				series: [
				{
					dataLabels: [{
						align: 'right',
						format:  '{point.rati} %' + '({y})',
						style : {
							fontFamily: 'Arial',
					 
						}
					}
				],
					data: [{
						y: this.state.age_1.male_amount,
						rati: this.state.age_1.male_ratio
					},
					{
						y: this.state.age_2.male_amount,
						rati: this.state.age_2.male_ratio
					},
					{
						y: this.state.age_3.male_amount,
						rati: this.state.age_3.male_ratio
					},
					{
						y: this.state.age_4.male_amount,
						rati: this.state.age_4.male_ratio
					},
					{
						y: this.state.age_5.male_amount,
						rati: this.state.age_5.male_ratio
					},
					{
						y: this.state.age_6.male_amount,
						rati: this.state.age_6.male_ratio
					},
						],
					name: 'Nam giới',	
				}, 
				{
					dataLabels: [{
						align: 'left',
						format:  '{point.rati} %' + '({y})',
						style : {
							fontFamily: 'Arial',
					 
						}
					}
				],
					data: [{
						y: this.state.age_1.female_amount,
						rati: this.state.age_1.female_ratio
					},
					{
						y: this.state.age_2.female_amount,
						rati: this.state.age_2.female_ratio
					},
					{
						y: this.state.age_3.female_amount,
						rati: this.state.age_3.female_ratio
					},
					{
						y: this.state.age_4.female_amount,
						rati: this.state.age_4.female_ratio
					},
					{
						y: this.state.age_5.female_amount,
						rati: this.state.age_5.female_ratio
					},
					{
						y: this.state.age_6.female_amount,
						rati: this.state.age_6.female_ratio
					},
					],
						name: 'Nữ giới'
				}]
			});
			
					
			} catch (e) {
					   console.log("Error ====> ", e);
				};
	}
	
	async componentGetRatio(){
		try {
            const response = await api.get(`/api/age`);
			arr_age.push(Object.values(response))
			this.setState({ 
					age_1 :  arr_age[0][0],
					age_2 :  arr_age[0][1],
					age_3 :  arr_age[0][2],
					age_4 :  arr_age[0][3],
					age_5 :  arr_age[0][4],
					age_6 :  arr_age[0][5]
					, loading: false });
		
		Highcharts.chart('getMaFe', {
			chart: {
				type: 'bar'
			},
			title: {	 
				text: 'Biểu đồ thống kê số lượng <br/>Nam/Nữ giới nhiễm bệnh',
				style: {
                    fontFamily: 'Arial',
					fontSize: '18px',
				}
			},
			 
			xAxis: {
				categories: ['Số lượng']
				 
			},
			yAxis: {
				min: 0,
				title: {
					text: null,
					align: 'middle'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' người'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			},
			
			series: [{
				name:'Nam', 
				data: [
					this.state.age_1.male_amount+this.state.age_2.male_amount+this.state.age_3.male_amount+this.state.age_4.male_amount+this.state.age_5.male_amount+this.state.age_6.male_amount,
					 
				]
			},
			{
				name:'Nữ', 
				data: [
					 
					this.state.age_1.female_amount+this.state.age_2.female_amount+this.state.age_3.female_amount+this.state.age_4.female_amount+this.state.age_5.female_amount+this.state.age_6.female_amount
				]
			},

		]
		});

        } catch (e) {
            console.log("Error ====> ", e);
		}
	}

	async componentGetDiss() {
		try {
            const response = await api.get(`/api/discussion`);
			arr_dis.push(Object.values(response))
			 
			this.setState({ getdis1 :  arr_dis[0], loading: false });


		 
		Highcharts.chart('Dien bien thao luan', {
			chart: {
				type: 'line'
			},
			title: {
				text: 'Biểu đồ diễn biến thảo luận trong tháng',
				style: {
                    fontFamily: 'Arial',
					fontSize: '18px',
				}
			},
			subtitle: {
				text: null
			},
			xAxis: {
				categories: [
					this.state.getdis1[0].day,
					this.state.getdis1[1].day,
					this.state.getdis1[2].day,
					this.state.getdis1[3].day,
					this.state.getdis1[4].day,
					this.state.getdis1[5].day,
					this.state.getdis1[6].day,
					this.state.getdis1[7].day,
					this.state.getdis1[8].day,
					this.state.getdis1[9].day,
					this.state.getdis1[10].day,
					this.state.getdis1[11].day,
					this.state.getdis1[12].day,
					this.state.getdis1[13].day,
					this.state.getdis1[14].day,
					this.state.getdis1[15].day,
					this.state.getdis1[16].day,
					this.state.getdis1[17].day,
					this.state.getdis1[18].day,
					this.state.getdis1[19].day,
					this.state.getdis1[20].day,
					this.state.getdis1[21].day,
					this.state.getdis1[22].day,
					this.state.getdis1[23].day,
					this.state.getdis1[24].day,
					this.state.getdis1[25].day,
					this.state.getdis1[26].day,
					this.state.getdis1[27].day,
					this.state.getdis1[28].day,
					
				]
			},
			yAxis: {
				title: {
					text: 'Số lượng'
				}
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: true
					},
					enableMouseTracking: false
				}
			},
			series: [{
				name: 'Tỉ lệ',
				data: [
					this.state.getdis1[0].mention_count,
					this.state.getdis1[1].mention_count,
					this.state.getdis1[2].mention_count,
					this.state.getdis1[3].mention_count,
					this.state.getdis1[4].mention_count,
					this.state.getdis1[5].mention_count,
					this.state.getdis1[6].mention_count,
					this.state.getdis1[7].mention_count,
					this.state.getdis1[8].mention_count,
					this.state.getdis1[9].mention_count,
					this.state.getdis1[10].mention_count,
					this.state.getdis1[11].mention_count,
					this.state.getdis1[12].mention_count,
					this.state.getdis1[13].mention_count,
					this.state.getdis1[14].mention_count,
					this.state.getdis1[15].mention_count,
					this.state.getdis1[16].mention_count,
					this.state.getdis1[17].mention_count,
					this.state.getdis1[18].mention_count,
					this.state.getdis1[19].mention_count,
					this.state.getdis1[20].mention_count,
					this.state.getdis1[21].mention_count,
					this.state.getdis1[22].mention_count,
					this.state.getdis1[23].mention_count,
					this.state.getdis1[24].mention_count,
					this.state.getdis1[25].mention_count,
					this.state.getdis1[26].mention_count,
					this.state.getdis1[27].mention_count,
					this.state.getdis1[28].mention_count,
					
			]
			}]
		});	
        } catch (e) {
            console.log("Error ====> ", e);
		}		
	}

	

	componentDidMount() {
		this.componentGetSource();
		this.componentGetSourceNuance();
		this.componentGetAgeByConditions();
		this.componentGetPbo();
		this.componentGetRatio();
		this.componentGetDiss();
    }
	
 
	
    render()  {
		 
        return (
            <div>
					<HeaderCom/>
				<div style={{margin: 'auto',width: '85%'}}>
						<div className="row">
						 
							<div className="col-md-6" id="getGenderRatio" ></div>
							<div className="col-md-6" id="getAgeRatio" ></div>
						</div>
				 
						<div className="row">
						 
								<div className="col-md-6" id="Nguon du lieu" style={{marginTop: '30px'}}></div>
								<div className="col-md-6" id="Dien bien thao luan" style={{marginTop: '30px'}}></div>
							 
						</div>
					 
						<div className="row">
						 
							<div className="col-md-6" id="Sac thai thao luan" style={{marginTop: '30px'}}></div>
							<div className="col-md-6" id="getMaFe" style={{marginTop: '30px'}}></div>		
						 
						</div>
						
					</div>
		 
            </div>
        );
    }
}
export default ChartCom;