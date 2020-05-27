'use strict';
var startDate;
var endDate;


if($('.data-session').attr('isSession') == 'false') {
	$(function () {
		$('input[name="tripStart"]').daterangepicker({
			singleDatePicker: true,
			startDate: moment().format('L'),
			showDropdowns: true,
			minDate: moment(),
		}, function (start, end, label) {
			startDate = moment(start).format('MM/DD/YYYY');
		});
	});

	$(function () {
		$('input[name="tripEnd"]').daterangepicker({
			singleDatePicker: true,
			showDropdowns: true,
			startDate: moment().format('L'),
			minDate: moment().add(1, 'd'),
		}, function (start, end, label) {
			endDate = moment(start).format('MM/DD/YYYY');
		});
	});
}


async function checkoutCar (element) {
	try {
		startDate = $('input[name="tripStart"]').val()
		endDate = $('input[name="tripEnd"]').val()
		var slug = $(element).attr("car")
		let bodyBooking = {
			startDate: startDate,
			endDate: endDate,
			durationOfBooking: $('#check-rental').val()
		};
		$('#form-booking-cardetail').parsley().validate();
		if($('#check-rental').val() != "1 year subscription" && $('#check-rental').val() != "Daily" && $('#check-rental').val() != "Monthly" && $('#check-rental').val() != "Weekly"){
			$.toast({
				text: 'Please select the Duration of Rental',
				hideAfter: 2500,
				position: 'top-right',
				bgColor: '#e74c3c',
				loaderBg: '#ffffff'
			});
			return false;
		}
		if (!$('#form-booking-cardetail').parsley().isValid()) {
			$.toast({
				text: 'Please select the required fields',
				hideAfter: 2500,
				position: 'top-right',
				bgColor: '#e74c3c',
				loaderBg: '#ffffff'
			});
			return false;
		}
		let result = await $.ajax({
			type: 'POST',
			url: '/bookings/' + slug,
			data: JSON.stringify(bodyBooking),
			processData: false,
			dataType: 'json',
			contentType: 'application/json'
		});
		$(".button-checkout").addClass('has-spinner');
		$('.has-spinner').buttonLoader('start');
		window.location.href = `/bookings/${result.id}`;
	} catch (e) {
		if (e){
			if (e.responseText === 'This time is unavailable!'){
				$.toast({
					text: 'Car is not available. Please choose other time duration!',
					bgColor: '#f8504f',
					loaderBg: '#ffffff',
					hideAfter: 2500,
					position: 'top-right'
				});
			}else{
				if (e.responseText === 'This car has not been activated'){
					$.toast({
						text: 'This car has not been activated!',
						bgColor: '#f8504f',
						loaderBg: '#ffffff',
						hideAfter: 2500,
						position: 'top-right'
					});
				}else{
					$.toast({
						text: 'This car is already in another booking!',
						bgColor: '#f8504f',
						loaderBg: '#ffffff',
						hideAfter: 2500,
						position: 'top-right'
					});
				}
			}
		} else {
			$('#modal_Login').modal('show');
		}
	}
};
