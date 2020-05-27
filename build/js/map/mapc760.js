var placeSearch, autocomplete, autocomplete_search_header, autocomplete_search, autocomplete_search_address,
	autocomplete_search_home, map, makers = [];
var markers_list = [];
var infobox_list = [];
var current_infobox = -1;
var list_car_filter = []
var card_obj = {};
var cur_latitude, cur_longitude;
var price_sort = 2
var range_price = 0
var type_car;
var delivery;
var brand_car;
var infoWindow;
var current_page = 2;
var start ;
var until ;
var duration_of_rental ;

function initMap() {
	if (document.getElementById("juzzdrive_map") == null) {
		return;
	}
	map = new google.maps.Map(document.getElementById("juzzdrive_map"), {
		zoom: 15,
		mapTypeControl: false,
		navigationControl: false,
		streetViewControl: false,
	});
	infoWindow = new google.maps.InfoWindow;
	map.addListener('click', function () {
		closeAllInfoBox();
	});

	if ($('#search-car-location').attr("start") && $('#search-car-location').attr("until")){
		start = $('#search-car-location').attr("start")
		until = $('#search-car-location').attr("until")
	}

	// if ($('#search-car-location').attr("duration_of_rental")){
	// 	duration_of_rental = $('#search-car-location').attr("start")
	// }

	if ($('#search-car-location').attr("start")){
		duration_of_rental = $('#search-car-location').attr("duration_of_rental")
		if(duration_of_rental === 'Daily'){
			$('.range_price').show()
		}
	}
	
	if ($('#search-car-location').attr("lat") && $('#search-car-location').attr("lng")) {
		cur_latitude = $('#search-car-location').attr("lat")
		cur_longitude = $('#search-car-location').attr("lng")
		addMaker();
	}
}


function gotoMaker(index) {
	closeAllInfoBox();
	map.panTo(makers[index].position);
	infobox_list[index].open(map, makers[index]);
	$(".map-active").removeClass("map-active");
	$(".tutor-active-map-" + index).addClass("map-active");
}


$('#button-load-more').click(function() {
	let data = {
		lat: cur_latitude,
		lng: cur_longitude,
		page: current_page,
		sort_price: price_sort,
		range_price: range_price,
		type_car: type_car,
		delivery: delivery,
		brand_car: brand_car,
		duration: duration_of_rental,
		start: start,
		until: until
	}
			let result = $.ajax({
				type: "POST",
				url: "/api/search/"+current_page,
				data: data,
				cache: false,
				beforeSend: function(xhr) {
					$('#spinner-loading-page').html('<div class="spinner-border" role="status" style="font-size: 25px; position: fixed; top: 36%; left: 50%; z-index: 500000; width: 60px; height: 60px; color: #fd7e14;">\n' +
                                '\t\t                                    <span class="sr-only">Loading...</span>\n' +
                                '\t                                    </div>')
				},
				success: function (data) {
					current_page++;
					var listdata = data.data;
					$('#spinner-loading-page').html('')
					if (listdata.length > 0) {
					listdata.forEach(function (item, index) {
					let contentString = '<div class="popmaker"><div class="card-car-item" data-load-more>';
					contentString += '<div class="cover"><img src="' + item.photo + '"/></div>';
					contentString += `<div class="title">${item.carname}</div>`;
					contentString += `<div class="rate" rate="${item.rate}"><img src="/images/map/rating.svg"/></div>`;
					// contentString += `<div class="price"><img src="/images/map/lightning-bolt-shadow.svg"/> RM${item.price_d}/Day</div>`;
					contentString += `<div class="option"><a href="/cars/${item.slug}?page=1"><button class="btn-marker">Book Instantly</button></a> <a href="/cars/${item.slug}?page=1"><button class="btn-marker">Free Delivery</button></a></div>`;
					contentString += '</div><div class="arrow"></div></div>';
					
					let item_list = '<div class="col-lg-6 col-md-11 col-sm-12 col-12" onClick="gotoMaker(' + ((index + ((current_page-2) * 10))) + ')">'
					item_list += '<div class="item-result">'
					item_list += '<div class="image" style="height:300px; text-aligin:center;">'
					item_list += `<a href="/cars/${item.slug}?page=1"><img src="${item.photo}" style="height: 100%; object-fit: cover;"/></a>`
					item_list += '</div>'
					item_list += '<div class="info" style="padding:15px">'
					item_list += `<h6 class="title" style="font-size: 15px">${item.carname}</h6>`
					item_list += '<div class="rate" style="font-size: 16px"><img src="/images/map/rating.svg"/></div>'
					if(item.price_d != 0 && item.price_d != null){
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/clock.svg"/> RM${item.price_d}/Day</div>`
					} else {
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/calendar.svg"/> RM0/Day</div>`
					}
					if(item.price_m != 0 && item.price_m != null){
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/calendar.svg"/> RM${item.price_m}/Month</div>`
					} else {
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/calendar.svg"/> RM0/Month</div>`
					}
					item_list += '</div></div></div>'
					

					$('#search-result').append(item_list);

					let ibOptions = {
						disableAutoPan: false,
						maxWidth: 0,
						pixelOffset: new google.maps.Size(-150, -370),
						
						zIndex: null,
						boxStyle: {
							padding: "0px 0px 10px 0px",
							width: "300px",
							height: "288px"
						},
						closeBoxURL: "",
						infoBoxClearance: new google.maps.Size(1, 1)
					};
					let marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.lat * 1, item.lng * 1),
						map: map,
						icon: './images/map/icon_maker.svg',
						title: item.car
					});
					
					makers.push(marker);
					ibOptions.content = contentString
					var ib = new InfoBox(ibOptions);
					infobox_list.push(ib);
					marker.addListener('click', function () {
						closeAllInfoBox();
						current_infobox = index;
						ib.open(map, marker);
						map.panTo(ib.getPosition());
					});
				})	
			}
		}
	})
});
	

function addMaker() {
	$('#search-result').html('')
	var initialLocation = new google.maps.LatLng(cur_latitude, cur_longitude);

	map.setCenter(initialLocation);
	$.post("/api/search/1", {
		lat: cur_latitude,
		lng: cur_longitude,
		sort_price: price_sort,
		range_price: range_price,
		type_car: type_car,
		delivery: delivery,
		brand_car: brand_car,
		duration: duration_of_rental,
		start: start,
		until: until
	}, function (data) {
		if (data.success) {
			$('#spinner-loading-page').html('')
			var listdata = data.data;
			if (listdata.length > 0) {
				if(moment(start, "MM/DD/YYYY").format() > moment(until, "MM/DD/YYYY").format()){
					alert('The trip start date must be less than the trip end date!')
					$('#search-result').append(`<div style="color: #97979785;font-weight: bold;font-size: 43px;margin: 33% auto; height: 100%;">The trip start date must be less than the trip end date!</div>`)
					$('.button-load-more').hide()
				}else{
				listdata.forEach(function (item, index) {
					let contentString = '<div class="popmaker"><div class="card-car-item">';
					contentString += '<div class="cover"><img src="' + item.photo + '"/></div>';
					contentString += `<div class="title">${item.carname}</div>`;
					contentString += `<div class="rate" rate="${item.rate}"><img src="/images/map/rating.svg"/></div>`;
					// contentString += `<div class="price"><img src="/images/map/lightning-bolt-shadow.svg"/> ${item.price_d}/Day</div>`;
					contentString += `<div class="option"><a href="/cars/${item.slug}?page=1"><button class="btn-marker">Book Instantly</button></a> <a href="/cars/${item.slug}?page=1"><button class="btn-marker">Free Delivery</button></a></div>`;
					contentString += '</div><div class="arrow"></div></div>';
					
					let item_list = '<div class="col-lg-6 col-md-11 col-sm-12 col-12" onClick="gotoMaker(' + index + ')">'
					item_list += '<div class="item-result">'
					item_list += '<div class="image" style="height:300px; text-aligin:center;">'
					item_list += `<a href="/cars/${item.slug}?page=1"><img src="${item.photo}" style="height: 100%; object-fit: cover;"/></a>` 
					item_list += '</div>'
					item_list += '<div class="info" style="padding:15px">'
					item_list += `<h6 class="title" style="font-size: 15px">${item.carname}</h6>`
					item_list += '<div class="rate" style="font-size: 16px"><img src="/images/map/rating.svg"/></div>'
					if(item.price_d != 0 && item.price_d != null){
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/clock.svg"/> RM${item.price_d}/Day</div>`
					} else {
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/calendar.svg"/> RM0/Day</div>`
					}
					if(item.price_m != 0 && item.price_m != null){
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/calendar.svg"/> RM${item.price_m}/Month</div>`
					} else {
						item_list += `<div class="price" style="font-size: 16px"><img src="/images/map/calendar.svg"/> RM0/Month</div>`
					}
					item_list += '</div></div></div>'
					

					$('#search-result').append(item_list);

					let ibOptions = {
						disableAutoPan: false,
						maxWidth: 0,
						pixelOffset: new google.maps.Size(-150, -370),
						
						zIndex: null,
						boxStyle: {
							padding: "0px 0px 10px 0px",
							width: "300px",
							height: "288px"
						},
						closeBoxURL: "",
						infoBoxClearance: new google.maps.Size(1, 1)
					};
					let marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.lat * 1, item.lng * 1),
						map: map,
						icon: './images/map/icon_maker.svg',
						title: item.car
					});
					makers.push(marker);
					ibOptions.content = contentString
					var ib = new InfoBox(ibOptions);
					infobox_list.push(ib);
					
					marker.addListener('click', function () {
						closeAllInfoBox();
						current_infobox = index;
						ib.open(map, marker);
						//map.panTo(ib.getPosition());
					});
				})
				$('.button-load-more').show()
			}} else {
				if(moment(start, "MM/DD/YYYY").format() > moment(until, "MM/DD/YYYY").format()){
					alert('The trip start date must be less than the trip end date!')
					$('#search-result').append(`<div style="color: #97979785;font-weight: bold;font-size: 43px;margin: 33% auto; height: 100%;">The trip start date must be less than the trip end date!</div>`)
					$('.button-load-more').hide()
				}else{
					$('#search-result').append(`<div style="color: #97979785;font-weight: bold;font-size: 43px;margin: 33% auto; height: 100%;">Don't have any cars!</div>`)
					$('.button-load-more').hide()
				}
			}
		}
	})
}

function fillInAddress() {
	var place = autocomplete.getPlace();
	var lat = place.geometry.location.lat(),
		lng = place.geometry.location.lng();
	$('#tutor-lat').val(lat);
	$('#tutor-long').val(lng);
	
}

function fillInAddressCar() {
	var place = autocomplete_search.getPlace();
	var lat = place.geometry.location.lat(),
		lng = place.geometry.location.lng();
	
	var initialLocation = new google.maps.LatLng(lat, lng);
	
	clearMaps();
	
	var marker = new google.maps.Marker({
		position: initialLocation,
		map: map,
		title: 'Vị trí của tôi'
	});
	map.setCenter(initialLocation);
	markers_list.push(marker);
	cur_latitude = lat
	cur_longitude = lng
	start = start
	until = until
	duration_of_rental = duration_of_rental
	addMaker(lat, lng);
}

function fillInAddressLocationCar() {
	var place = autocomplete_search_address.getPlace();
	var lat = place.geometry.location.lat(),
		lng = place.geometry.location.lng();
	$("#add-lat").val(lat)
	$("#add-lon").val(lng)
	
}


function fillInAddressLocationHomeSearch() {
	var place = autocomplete_search_home.getPlace();
	var lat = place.geometry.location.lat(),
		lng = place.geometry.location.lng();
	$("#s_lat").val(lat)
	$("#s_lng").val(lng)
	var start = $("#bar-start-time").val()
	var until = $("#bar-end-time").val()
}


function fillInAddressHeaderSearch() {
	var place = autocomplete_search_header.getPlace();
	var lat = place.geometry.location.lat(),
		lng = place.geometry.location.lng();
	$("#h_lat").val(lat)
	$("#h_lng").val(lng)
	$("#head-search-form").submit();
}

$("#header-search-car-location").on('keyup', function (e) {
	if (e.keyCode === 13) {
		var firstResult = $(".pac-container .pac-item:first").text();
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({"address": firstResult}, async function (results, status) {
			$("#h_lat").val(await results[0].geometry.location.lat());
			$("#h_lng").val(await results[0].geometry.location.lng());
			if (status === google.maps.GeocoderStatus.OK) {
				$("#head-search-form").submit();
			}
		});
	}
});
$("#search-car-location").on('keyup', function (e) {
	if (e.keyCode === 13) {
		var firstResult = $(".pac-container .pac-item:first").text();
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({"address": firstResult}, async function (results, status) {
			var geolocation = {
				lat: await results[0].geometry.location.lat(),
				lng: await results[0].geometry.location.lng()
			};
			var initialLocation = new google.maps.LatLng(geolocation.lat, geolocation.lng);
			clearMaps();
			var marker = new google.maps.Marker({
				position: initialLocation,
				map: map,
				title: 'Vị trí của tôi'
			});
			map.setCenter(initialLocation);
			markers_list.push(marker);
			cur_latitude = geolocation.lat;
			cur_longitude = geolocation.lng;
			addMaker(geolocation.lat, geolocation.lng);
		});
	}
});
$("#icon-search-header").on('click', function (e) {
		var firstResult = $(".pac-container .pac-item:first").text();
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({"address": firstResult}, async function (results, status) {
			$("#h_lat").val(await results[0].geometry.location.lat());
			$("#h_lng").val(await results[0].geometry.location.lng());
			if (status === google.maps.GeocoderStatus.OK) {
				$("#head-search-form").submit();
			}
		});
});
$("#icon-search-location").on('click', function (e) {
	var firstResult = $(".pac-container .pac-item:first").text();
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"address": firstResult}, async function (results, status) {
		var geolocation = {
			lat: await results[0].geometry.location.lat(),
			lng: await results[0].geometry.location.lng()
		};
		var initialLocation = new google.maps.LatLng(geolocation.lat, geolocation.lng);
		clearMaps();
		var marker = new google.maps.Marker({
			position: initialLocation,
			map: map,
			title: 'Vị trí của tôi'
		});
		map.setCenter(initialLocation);
		markers_list.push(marker);
		cur_latitude = geolocation.lat;
		cur_longitude = geolocation.lng;
		addMaker(geolocation.lat, geolocation.lng);
	});
});


function clearMaps() {
	for (var i = 0; i < markers_list.length; i++) {
		markers_list[i].setMap(null);
	}
	for (var i = 0; i < makers.length; i++) {
		makers[i].setMap(null);
	}
	for (var i = 0; i < infobox_list.length; i++) {
		infobox_list[i].close();
	}
	
}

function closeAllInfoBox() {
	for (var i = 0; i < infobox_list.length; i++) {
		infobox_list[i].close();
	}
	$(".map-active").removeClass("map-active");
}


 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
 	$('#spinner-loading-page').html('')
 	if(pos){
 		infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
 	}else{
 		cur_latitude = 1.492659;
		cur_longitude = 103.74135909999995;
		addMaker(cur_latitude, cur_longitude);
         var initialLocation = new google.maps.LatLng(cur_latitude, cur_longitude);
   		 map.setCenter(initialLocation);
 	}
 }



$(document).ready(function () {
	if(($('#juzzdrive_map').length == 1) && ($('#search-car-location').val()=="")){
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

						infoWindow.setPosition(pos);
						infoWindow.setContent('My Location');
						infoWindow.open(map);
						map.setCenter(pos);
				    var initialLocation = new google.maps.LatLng(pos.lat, pos.lng);
					clearMaps();
				
				map.setCenter(initialLocation);
				cur_latitude = pos.lat;
				cur_longitude = pos.lng;
				addMaker(pos.lat, pos.lng);

				}, function() {
					
					handleLocationError(true, infoWindow, map.getCenter());
				});
			} else {
				
		          handleLocationError(false, infoWindow, map.getCenter());
		    }

	}
	


	autocomplete_search = new google.maps.places.Autocomplete((document.getElementById('search-car-location')), {types: ['geocode']});
	autocomplete_search.addListener('place_changed', fillInAddressCar);
	
	autocomplete_search_address = new google.maps.places.Autocomplete((document.getElementById('search-car-location-address')), {types: ['geocode']});
	autocomplete_search_address.addListener('place_changed', fillInAddressLocationCar);
	
	autocomplete_search_home = new google.maps.places.Autocomplete((document.getElementById('input-search-home')), {types: ['geocode']});
	autocomplete_search_home.addListener('place_changed', fillInAddressLocationHomeSearch);
	
	
	autocomplete_search_header = new google.maps.places.Autocomplete((document.getElementById('header-search-car-location')), {types: ['geocode']});
	autocomplete_search_header.addListener('place_changed', fillInAddressHeaderSearch);
	initMap();
	
	
	$('#btn-apply-price-sort').on('click', function (e) {
		if ($('#sort_price_2').prop('checked')) {
			price_sort = 1
		} else {
			price_sort = 2
		}
		clearMaps();
		makers = []
		infobox_list = []
		addMaker();
	})

	$('#btn-apply-delivery').on('click', function (e) {
		if ($('#delivery-1').prop('checked')) {
			delivery = 1
		} else {
			delivery = 2
		}
		clearMaps();
		makers = []
		infobox_list = []
		addMaker();
	})
	
	$('#btn-apply-range-price').on('click', function (e) {
		range_price = $('#input-range-price').val()
		clearMaps();
		makers = []
		infobox_list = []
		addMaker()
	})

	$('#btn-apply-type-car').on('click', function (e) {
		type_car = $('#apply-type-car').val()
		clearMaps();
		makers = []
		infobox_list = []
		addMaker()
	})

	$('#btn-apply-brand-car').on('click', function (e) {
		brand_car = $('#apply-brand-car').val()
		clearMaps();
		makers = []
		infobox_list = []
		addMaker()
	})

	$('#icon-search-location-time').on('click', function (e) {
		start = $('#bar-start-time').val()
		until = $('#bar-end-time').val()
		clearMaps();
		makers = []
		infobox_list = []
		addMaker()
	})
	
});

