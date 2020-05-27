import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network'

class HeaderCom extends React.Component {   
    
    render()  {
        return (
        <div className="container-map" style={{}}>
        <nav class="navbar navbar-expand-sm bg-light">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:8080/">Trang chủ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:8080/chart">Biểu đồ</a>
            </li>
            
            </ul>
            </nav>
        </div>
        );
    }
}
export default HeaderCom;