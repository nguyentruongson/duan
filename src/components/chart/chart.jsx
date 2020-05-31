import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network'

import * as Highcharts from 'highcharts';
import HeaderCom from '../header/header';
 
 

const api = new Network()
var arr_son = []
var arr_datanuance = []
var arr_age = []

class ChartCom extends React.Component { 

	constructor(props) {
		super(props);
		this.componentGetSource = this.componentGetSource.bind(this);
		this.componentGetSourceNuance = this.componentGetSourceNuance.bind(this);
		this.componentGetAgeByConditions = this.componentGetAgeByConditions.bind(this);

		this.state = {
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

            mai: [{
                name: 'son',
                data: [
                    1,2,3,4,5,6,7,8,9,10,11,12
                ]
                }],
            mai1: [{
                name: 'son',
                data: [
                    1,2,3,4,5,6,7,8,9,10,11,12
                ]
                },
            {
                name:'son1',
                data : [11,21,31,41,51,61,71,81,91,101,111,121],
                
			}],
			
        };
	}
		
	highChartsRender() {

		Highcharts.chart({
		chart: {
			type: 'area',
			renderTo: 'Dien bien thao luan'
		},
		title: {
			verticalAlign: 'middle',
			floating: true,
			text: 'Dien bien thao luan',
			style: {
				fontSize: '10px',
			}
		},
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
			labels: {
				formatter: function () {
					return this.value;
				}
			}
		},
		yAxis: {
			title: {
				text: 'Dien bien thao luan'
			},
			labels: {
				formatter: function () {
					return this.value  ;
				}
			}
		},
		plotOptions: {
			area: {
				marker: {
					enabled: false,
					symbol: 'circle',
					radius: 1,
					states: {
						hover: {
							enabled: true
						}
					}
				}
			}
		},

		series: this.state.mai
		});

		Highcharts.chart({
		chart: {
			type: 'bar',
			renderTo: 'Chu de thao luan'
		},
		title: {
			verticalAlign: 'middle',
			floating: true,
			text: 'Chu de thao luan',
			style: {
				fontSize: '10px',
			}
		},
		xAxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					align: 'right',
					color: '#FFFFFF',
					x: -10
				},
				pointPadding: 0.1,
				groupPadding: 0
			}
		},

		series: this.state.mai
		});

	}	

	async componentGetSource() {
		try {
            const response = await api.get(`/api/source`);
			arr_son.push(Object.values(response))
			console.log(arr_son)
			this.setState({ anh_1 :  arr_son[0][0][0],
				anh_2 :  arr_son[0][0][1],
				anh_3 :  arr_son[0][0][2],
				anh_4 :  arr_son[0][0][3],
				anh_5 :  arr_son[0][0][4],
				anh_6 :  arr_son[0][0][5]
				, loading: false });
			console.log(this.state.anh_1[0])
			Highcharts.chart({
			chart: {
				type: 'pie',
				renderTo : 'Nguon du lieu'
					
			},
			title: {
				verticalAlign: 'middle',
				floating: true,
				text: 'NGUỒN DỮ LIỆU',
				style: {
                    fontFamily: 'Arial',
					fontSize: '10px',
				}
			},
			plotOptions: {
				pie: {
					dataLabels: {
						format: '{point.name}: {point.percentage} %'
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

            Highcharts.chart({
                chart: {
                    type: 'line',
                    renderTo: 'Sac thai thao luan'
                },
                title: {
                    verticalAlign: 'middle',
                    floating: true,
                    text: 'Sac thai thao luan',
                    style: {
                        fontSize: '10px',
                    }
                },
                xAxis: {
                    categories: ['positive', 'negative', 'neutral']
                },
                yAxis: {
                    title: {
                        text: 'Sac thai thao luan'
                    },
                    labels: {
                        formatter: function () {
                            return this.value  ;
                        }
                    }
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        }
                    }
                },
                series: [
                {
                    name : 'positive',
                    data : this.state.positive
                },
                {
                    name: 'negative',
                    data : this.state.negative
                },
                {
                    name : 'neutral',
                    data : this.state.neutral
                }
                ]
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
							
				
        } catch (e) {
           		console.log("Error ====> ", e);
			};
		}

	componentDidMount() {
		this.componentGetSource();
		this.componentGetSourceNuance();
		this.componentGetAgeByConditions();
		this.highChartsRender();
    }
    
    render()  {
        return (
            <div className="container">
					<HeaderCom/>
					<div className="row" style={{marginTop: '30px'}} >
						<div className="col-md-6" style={{marginTop: '10px'}}>
							<div id="Nguon du lieu"></div>
							<div id="Dien bien thao luan"></div>
						</div>
						<div className="col-md-6" style={{marginTop: '10px'}}>
							<div id="Chu de thao luan"></div>
							<div id="Sac thai thao luan"></div>
						</div>
					</div>
            </div>
        );
    }
}
export default ChartCom;