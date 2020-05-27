// 'use strict';
let searchCity = async (ctx) => {
	$("#f_lat").val($(ctx).attr('lat') * 1);
	$("#f_lng").val($(ctx).attr('lng') * 1);
	$("#footer-search-car-location").val($(ctx).text());
	$("#foot-search-form").submit();
};
let searchCityHomePage = async (ctx) => {
	$("#f_lat").val($(ctx).attr('lat') * 1);
	$("#f_lng").val($(ctx).attr('lng') * 1);
	$("#footer-search-car-location").val($(ctx).attr('name'));
	$("#foot-search-form").submit();
};