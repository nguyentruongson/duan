'use strict';

function initMapCarLocation() {
	let lat = $('#map-car-location').attr('lat');
	let lng = $('#map-car-location').attr('lng');
	// The location of Uluru
	var uluru = {lat: parseFloat(lat), lng: parseFloat(lng)};
	// The map, centered at Uluru
	var mapCarDetail = new google.maps.Map(
		document.getElementById('map-car-location'), {
			zoom: 15,
			center: uluru,
			mapTypeControl:false,
			streetViewControl:false
		});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({
		position: uluru,
		map: mapCarDetail,
		icon: '/images/map/icon_maker.svg',
	});
}

$(document).ready(function () {
	initMapCarLocation();
});