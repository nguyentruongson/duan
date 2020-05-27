import React, { Component } from 'react';
var createReactClass = require('create-react-class');
var search_fun = null;
var searchFilter_fun = null;
var switchMode_fun = null;
var applyFilter_fun = null;
var applyFilterTime_fun = null;
var showLogin_fun = null;
var showUpdate_fun = null;
var reloadUserinfo_func = null;
var event_search_home_func = null;
var dateTimeObject = null;
var applyFilterFuncAll = null;
var duration = null;
var fillter = null;
var driver_search_fun = null;
var supercar_search_func = null;

var MidleService = createReactClass({
	statics: {
		setFillter(fillter) {
			this.fillter = fillter;
		},
		getFillter() {
			return this.fillter;
		},
		setApplyFilterFuncAll: function(f) {
			this.applyFilterFuncAll = f;
		},
		getApplyFilterFuncAll: function(filter, time) {
			this.applyFilterFuncAll(filter, time);
		},
		// new code
		setDuration(dur) {
			this.duration = dur;
		},
		getDuration() {
			return this.duration;
		},
		setDateTimeObj(obj) {
			this.dateTimeObject = obj;
		},
		getDateTimeObj() {
			if (this.dateTimeObject) {
				return this.dateTimeObject;
			} else {
				return null;
			}
		},
		// end new code

		setSearchFunc: function(search_f) {
			this.search_fun = search_f;
		},
		search: function(address, latlng) {
			if (this.search_fun) {
				this.search_fun(address, latlng);
			}
    },
    
    setDriverSearchFunc: function(driver_search_f){
      this.driver_search_fun = driver_search_f
    },
    driverSearch: function(fromLocation, toLocation, returning, carSeats, duration, aroundCity, oneWay){
      if(this.driver_search_fun){
        this.driver_search_fun(fromLocation, toLocation, returning, carSeats, duration,aroundCity, oneWay)
      }
    },
		setSearchWithFilterFunc: function(search_f) {
			this.searchFilter_fun = search_f;
		},
		searchWithFilterFunc: function(address, latlng, duration, start, end) {
			if (this.searchFilter_fun) {
				this.searchFilter_fun(address, latlng, duration, start, end);
			}
		},
		setSwitchModeFunc: function(_f) {
			this.switchMode_fun = _f;
		},
		switchMode: function(mode) {
			this.switchMode_fun(mode);
		},
		setApplyFilterFunc: function(_f) {
			this.applyFilter_fun = _f;
		},
		applyFilterFunc: function(filter) {
			this.applyFilter_fun(filter);
		},
		setApplyFilterTimeFunc: function(_f) {
			this.applyFilterTime_fun = _f;
		},
		applyFilterTimeFunc: function(start, end) {
			this.applyFilterTime_fun(start, end);
		},
		setShowLoginFunc: function(_f) {
			this.showLogin_fun = _f;
		},
		showLoginFunc: function(isShow) {
			this.showLogin_fun(isShow);
		},
		setShowUpdateFunc: function(_f) {
			this.showUpdate_fun = _f;
		},
		showUpdateFunc: function(isShow) {
			this.showUpdate_fun(isShow);
		},
		setReloadUserFunc: function(_f) {
			this.reloadUserinfo_func = _f;
		},
		reloadUserFunc: function() {
			if (this.reloadUserinfo_func) {
				this.reloadUserinfo_func();
			}
		},
		setHomeSearchFunc: function(_f) {
			this.event_search_home_func = _f;
		},
		homeSearchFunc: function(search_object) {
			if (this.event_search_home_func) {
				this.event_search_home_func(search_object);
			}
		},
		setSupercarLocationSearchFunc: function(_f){
			this.supercar_search_func = _f
		},
		supercarLocationSearchFunc: function(location, type){
			if(this.supercar_search_func){
				this.supercar_search_func(location, type)
			}
		}
	},
	render() {
		return (
			<div>
				<h1> the list </h1>
			</div>
		);
	}
});
export default MidleService;
