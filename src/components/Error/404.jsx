import React, { Component } from "react";
import './style.css'
import {Link} from 'react-router-dom';
export default class Error_404 extends Component {
    render() {
        return (
            <section id="error" className="row">
                <div className="content col-md-12">
                    <i id="fa-warning-err" className="fa fa-warning"></i>
                    <h1 className="title-err-four">404</h1>
                    <p className="p-err">Error occurred! - Page not Found</p>
                    <div className="col-md-12 pt-2">
                        <Link to="/" className="err-back"  style={{marginTop: '10px'}}>Back</Link>
                    </div>
                </div>
            </section>
        )
    }
}
