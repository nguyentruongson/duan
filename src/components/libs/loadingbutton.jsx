import React, { Component } from "react";
import './style.css'
import { RotateSpinner } from "react-spinners-kit";
export default class PageLoading extends Component {
	constructor(props) {
    	super(props);
	}

    render() {
    	return (<button
                    type="submit"
                    className="btn btn-cam btn-loading-custom"
                    onClick={this.props.eventClick}
                >
                <div style={{display:this.props.loading?'block':'none'}}><RotateSpinner color="#fff" size={20}/></div>
                {this.props.loading?<span className="loading-text-button">Loading...</span>:this.props.text}
              </button>)
    }
}