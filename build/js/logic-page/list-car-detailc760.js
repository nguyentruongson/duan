let updateLocation = async (element) => {
    try {
        $(".btn-update-car-location").addClass('has-spinner');
	    $('.has-spinner').buttonLoader('start');
        let body = {
            location: '',
            lat: '',
            lng: '',
            delivery: '',
            price: '',
            price_weekly: '',
            price_monthly: '',
            price_yearly: '',
            addressCar: '',
            durationOfRental: ''
        }

        var detail = [];
        $('input[class=duration]').each(function () {
            if (this.checked) {
                detail.includes($(this).val()) === false ? detail.push($(this).val()) : null;
            } else if (detail.includes($(this).val())) {
                let index = detail.indexOf($(this).val());
                detail.splice(index, 1);
            }
        });
        body.durationOfRental = JSON.stringify(detail);


        body.location = $('#search-car-location-address').val();
        body.lat = $('#add-lat').val() * 1;
        body.lng = $('#add-lon').val() * 1;
        var slug = $(element).attr("car")
        body.price = $('#update-price-daily').val() * 1;
        body.price_weekly = $('#update-price-weekly').val() * 1;
        body.price_monthly = $('#update-price-monthly').val() * 1;
        body.price_yearly = $('#update-price-yearly').val() * 1;
        body.addressCar = $('#add-address').val();
        body.delivery = $('input[name="optionsRadios"]:checked').val();


        
        let result = await $.ajax({
            type: 'POST',
            url: '/update/location/' + slug,
            data: JSON.stringify(body),
            processData: false,
			dataType: 'json',
			contentType: 'application/json'
        });
        // $(".btn-update-car-location").remove();
        // $('.has-spinner').buttonLoader('stop');
        
        if (result.status === 200) {
			$.toast({
				text: 'Update car detail successfully',
				bgColor: '#1abc9c',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
        }else{
            $.toast({
                text: 'This value should be between 2 and 999999',
                bgColor: '#f8504f',
                loaderBg: '#ffffff',
                hideAfter: 2500,
                position: 'top-right'
            });
        }
        setTimeout(() => {
            location.reload()
        }, 3000);
    }catch(e){
		$.toast({
			text: 'Update car detail unsuccessfully',
			bgColor: '#f8504f',
			loaderBg: '#ffffff',
			hideAfter: 2500,
			position: 'top-right'
        });
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
}