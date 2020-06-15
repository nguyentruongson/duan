import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network'

import * as Highcharts from 'highcharts';
import HeaderCom from '../header/header';
import FetchDataFromRssFeed from '../DashBoard/rss'
 

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
                <FetchDataFromRssFeed/>

            </div>
        );
    }
}
export default News;