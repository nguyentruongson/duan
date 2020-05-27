import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './car-item-search.css';
export default class CarItemSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		

		return  (
				<Link>
					<div className="img car-item">
						<div className="car-image">
							<img
								style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px', height: '300px' }}
								data-src='https://juzdrive-production.s3-ap-southeast-1.amazonaws.com/avatar-images/88dffa92-b970-4500-bfc0-cb015a217783'
								src='https://juzdrive-production.s3-ap-southeast-1.amazonaws.com/avatar-images/88dffa92-b970-4500-bfc0-cb015a217783'
								className="car_thumbnail lazy"
								alt=""
							/>
						</div>
					</div>
				</Link>
		
		);
	}
}
