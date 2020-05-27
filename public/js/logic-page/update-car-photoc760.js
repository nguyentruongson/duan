let data_update_carPhoto = {
	carPhoto: ''
};

let updateCarPhoto = async (element) => {
    try{
        $(".btn-update-car-photo").addClass('has-spinner');
        $('.has-spinner').buttonLoader('start');
        let data_carPhoto = new FormData();

        $('.imageUploadCar').each(function () {
            if ($(this)[0].files[0]) {
                isImageUpload = true;
            }
            data_carPhoto.append('file', $(this)[0].files[0]);
        });

        var slug = $(element).attr("car")
        let uploadPhoto = await $.ajax({
            type: 'POST',
            url: '/upload/carPhoto/' +  slug,
            data: data_carPhoto,
            processData: false,
            contentType: false,
        });

        if (uploadPhoto.status === 200) {
            data_update_carPhoto.carPhoto = JSON.stringify(uploadPhoto.data);
        }else {
            return false;
        }
        
        let result = await $.ajax({
            type: 'POST',
            url: '/update/carPhoto/' +  slug,
            data: JSON.stringify(data_update_carPhoto),
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