let dataCarDetails = {
	plateNumber: '',
	state: '',
	feature: '',
	autopass: '',
    touch_n_go: '',
    color: '',
    type: '',
    fuel_Type: ''
};

let updateCarDetail = async (element) => {
    try{
        $(".btn-update-car-detail").addClass('has-spinner');
	    $('.has-spinner').buttonLoader('start');
        var slug = $(element).attr("car")

        dataCarDetails.plateNumber = $('#plate-number').val();
        dataCarDetails.state = $('#state-car').val();
        dataCarDetails.type = $('#type').val();
        dataCarDetails.color = $('#color').val();
        dataCarDetails.fuel_Type = $('#fuel_type').val();
        dataCarDetails.seats = $('#seats').val();
        dataCarDetails.touch_n_go = $('input[name="optionsRadiosTouch"]:checked').val();
        dataCarDetails.autopass = $('input[name="optionsRadiosAutopass"]:checked').val();

        var checked = [];

        $('input[class=features]').each(function () {
            if (this.checked) {
                checked.includes($(this).val()) === false ? checked.push($(this).val()) : null;
            } else if (checked.includes($(this).val())) {
                let index = checked.indexOf($(this).val());
                checked.splice(index, 1);
            }
            dataCarDetails.feature = JSON.stringify(checked);
        });

        let result = await $.ajax({
            type: 'POST',
            url: '/update/carDetail/'+ slug,
            data: JSON.stringify(dataCarDetails),
            processData: false,
            dataType: 'json',
            contentType: 'application/json',
        });
        $('.has-spinner').buttonLoader('stop');
        if (result) {
			$.toast({
				text: 'Update car detail successfully',
				bgColor: '#1abc9c',
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