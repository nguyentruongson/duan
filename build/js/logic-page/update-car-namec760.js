let carName = {
    year : '',
    brand : '',
    model : ''
}

let updateCarName = async (element) => {
    try{
        $(".btn-update-car-name").addClass('has-spinner');
        $('.has-spinner').buttonLoader('start');

        carName.year = $('#exampleFormControlSelectYear').val()
        carName.brand = $('#exampleFormControlSelectBrand').val()
        carName.model = $('#exampleFormControlSelectModel').val()
        var slug = $(element).attr("car")

        let result = await $.ajax({
            type: 'POST',
            url: '/update/carName/' +  slug,
            data: JSON.stringify(carName),
            processData: false,
            dataType: 'json',
            contentType: 'application/json',
        });
        
        $('.has-spinner').buttonLoader('stop');

        if (result) {
            $.toast({
                text: 'Update car name successfully',
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
			text: 'Update car name unsuccessfully',
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