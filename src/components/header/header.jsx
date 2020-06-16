import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network';
import icon from './loading.png';

class HeaderCom extends React.Component {   
    hientime = () => {
		var tempDate = new Date();
		var date = tempDate.toLocaleString();
		const currDate = "Cập nhật lần cuối: "+date;
		return (
   			<p style={{display:'contents'}}>{currDate}</p>
            
  		);
	}
    
    render()  {
        return (
        <div className="container-map" >
            <nav className="navbar navbar-expand-sm bg-light" style={{marginBottom:'2%'}} >
            
                <a className="nav-link" href="/" style={{color:'red'}}>
                    <img style={{height:'29px'}} src="https://covid19stats.live/_nuxt/img/9b64d76.png"/>Covid-19 Stats
                </a>
               
                <ul className="navbar-nav">
                    <li className="nav-item" style={{paddingLeft: '10px'}}>
                        <a className="nav-link" href="http://localhost:8080/">Trang chủ</a>
                    </li>
                    <li className="nav-item" style={{paddingLeft: '10px'}}>
                        <a className="nav-link" href="http://localhost:8080/chart">Biểu đồ</a>
                    </li>
                    <li className="nav-item" style={{paddingLeft: '10px'}}>
                        <a className="nav-link" href="http://localhost:8080/news">Bài báo</a>
                    </li>
                </ul>
                <div style={{paddingLeft:'30%'}}>
                    <a href="/"><img style={{paddingBottom:'3px',height:'20px'}}src={icon}/></a>
                    {this.hientime()}
                </div>
            </nav>
        </div>
        );
    }
}
export default HeaderCom;