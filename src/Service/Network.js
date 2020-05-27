import axios from 'axios';
import { toast } from 'react-toastify';
import AuthService from './AuthService';
const auth = new AuthService();
var self = null;
var domain = null;
export default class Networking {
  constructor() {
    this.post = this.post.bind(this)
    this.upload = this.upload.bind(this)
    this.patch = this.patch.bind(this)
    this.get = this.get.bind(this)
    this.getHeader = this.getHeader.bind(this)
    this.getHeaderUpload = this.getHeaderUpload.bind(this)
    this.handleError = this.handleError.bind(this)
	//this.domain = 'https://juzdrive.com'
	this.domain = 'http://localhost:8000'
	//this.domain =  'https://api-test.tensorlab.dev'
	// this.domain = 'http://ec2-13-251-13-125.ap-southeast-1.compute.amazonaws.com:1996';
    self = this
  }

	getHeader() {
		const profile = auth.getProfile();
		let axiosConfig = {
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				'Access-Control-Allow-Origin': '*',
				authorization: profile
			}
		};
		// console.log(axiosConfig);
		return axiosConfig;
	}
	getHeaderUpload() {
		const profile = auth.getProfile();
		let axiosConfig = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Access-Control-Allow-Origin': '*',
				authorization: profile
			}
		};
		// console.log(axiosConfig);
		return axiosConfig;
	}

	post(url, params) {
		return new Promise((resolve, rejected) => {
			axios
				.post(this.domain + url, params, this.getHeader())
				.then(function(response) {
					return resolve(response.data);
				})
				.catch(function(error) {
					console.log(error.response);
					self.handleError(error, rejected);
				});
		});
	}
	upload(url, params) {
		return new Promise((resolve, rejected) => {
			axios
				.post(this.domain + url, params, this.getHeaderUpload())
				.then(function(response) {
					return resolve(response.data);
				})
				.catch(function(error) {
					console.log('UploadError', error);
					self.handleError(error, rejected);
				});
		});
	}

	patch(url, params) {
		return new Promise((resolve, rejected) => {
			axios
				.patch(this.domain + url, params, this.getHeader())
				.then(function(response) {
					// console.log('lala');
					return resolve(response.data);
				})
				.catch(function(error) {
					// console.log('1234');
					console.log(error);
					self.handleError(error, rejected);
				});
		});
	}

	getApi(url) {
		return new Promise((resolve, rejected) => {
			axios
				.get(url)
				.then(function(response) {
					return resolve(response.data);
				})
				.catch(function(error) {
					self.handleError(error, rejected);
				});
		});
	}

	get(url) {
		return new Promise((resolve, rejected) => {
			axios
				.get(this.domain + url, this.getHeader())
				.then(function(response) {
					return resolve(response.data);
				})
				.catch(function(error) {
					self.handleError(error, rejected);
				});
		});
	}

	delete(url, params) {
		return new Promise((resolve, rejected) => {
			axios
				.delete(this.domain + url, params)
				.then(function(response) {
					return resolve(response.data);
				})
				.catch(function(error) {
					self.handleError(error, rejected);
				});
		});
	}

	handleError(error, rejected) {
		if (error.response) {
			if (error.response.status === 401) {
				auth.logout();
			} else if (error.response.status === 404) {
				window.location.href = '/error';
			} else {
				rejected(error);
			}
		} else {
			console.log('ERROR---->', error);
			rejected(error);
		}
	}
}
