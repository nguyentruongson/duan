import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network'

import * as Highcharts from 'highcharts';
import HeaderCom from '../header/header';
import FetchDataFromRssFeed from '../DashBoard/rss';
import FooterCom from '../Footer/Footer';
 

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
                <div style={{width:'70%',margin: 'auto'}}>
                    <FetchDataFromRssFeed/>
                </div>
                <FooterCom/>
            </div>
        );
    }
}
export default News;