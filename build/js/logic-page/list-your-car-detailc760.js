$('.car-item-list-detail').click(function(){
	$('#img-big-detail-list').attr('src',$(this).attr('image'))
});


async function updateAvailableTime (element) {
	try{
		$(".btn-update-time-unavailable").addClass('has-spinner');
	    $('.has-spinner').buttonLoader('start');
		var slug = $(element).attr("car")
		var startAvailable = $('#field_1').val()
		var endAvailable = $('#field_2').val()
		let body = {
			startAvailable: startAvailable,
			endAvailable: endAvailable
		};
		let result = await $.ajax({
			type: 'POST',
			url: '/update/time/' + slug,
			data: JSON.stringify(body),
			processData: false,
			dataType: 'json',
			contentType: 'application/json'
		});
		$('.has-spinner').buttonLoader('stop');
		if(result.status === 200){
			$.toast({
				text: 'Update car details successfully',
				bgColor: '#1abc9c',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
		}else{
			$.toast({
				text: 'Update car details unsuccessfully',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
		}
		setTimeout(() => {
			location.reload()
		}, 3000);
	} catch(e){
			$.toast({
				text: 'Update car available unsuccessfully',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
	}
}