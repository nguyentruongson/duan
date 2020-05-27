let bodyPhoto = {
    name : ''
}
let findDeletePhoto = async (element, name) => {
    try{
        var slug = element
        var namePhoto = name
        var array_name = namePhoto.split('/')
        var index_name = array_name.length-1
        bodyPhoto.name = array_name[index_name]
        let result = await $.ajax({
			type: 'POST',
			url: '/delete/photo/' + slug,
			data: JSON.stringify(bodyPhoto),
			processData: false,
			dataType: 'json',
			contentType: 'application/json'
        });
        if(result.status === 200){
            $.toast({
				text: 'Delete photo successfully',
				bgColor: '#1abc9c',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
        }else{
            $.toast({
                text: 'Delete photo unsuccessfully, You need to display at least 1 photo',
                bgColor: '#f8504f',
                loaderBg: '#ffffff',
                hideAfter: 2500,
                position: 'top-right'
            });
        }
    }catch(e){
        $.toast({
			text: 'Delete photo unsuccessfully',
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