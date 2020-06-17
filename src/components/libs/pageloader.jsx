import React, { Component } from "react";
import './style.css'
import { MetroSpinner } from "react-spinners-kit";
export default class PageLoading extends Component {
	 

    render() {
    	return (<div className={this.props.show?"page-load-mg":"page-load-mg _load_hide"}>
    			<div className="load-csx">
    				<MetroSpinner color='#ff9f43' size={60}/>
    		    </div>
    		</div>)
    }
}