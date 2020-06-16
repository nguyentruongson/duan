import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Network from '../../Service/Network';

class FooterCom extends React.Component {   
  
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
    
    render()  {
        return (
        <div className="container-map" >
            <nav className="navbar navbar-expand-sm bg-light" style={{marginBottom:0,marginTop:'1%'}} >
                <div>
                    Thời gian hiện tại: {this.state.time}
                </div>
            </nav>
        </div>
        );
    }
}
export default FooterCom;