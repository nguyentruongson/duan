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

class News extends React.Component { 

	constructor(props) {
		super(props);
    }
    
    render()  {
        return (
            <div>
                <HeaderCom />
                <div className="row" style={{width: "100px", height: "100px"}} >
                    <div className="col-md-6">Nội dung</div>
                    <div className="col-md-6" style={{width: "100px", height: "100px"}}>
                        <img src="http://webcoban.vn/image/cat-2.jpg" style={{width: "100px", height: "100px"}}/>
                    </div>
                </div>
                <div>Mô tả</div>

            </div>
        );
    }
}
export default News;