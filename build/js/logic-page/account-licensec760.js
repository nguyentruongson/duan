let DriveLicense = {
	country: '',
	state: '',
	licenseNumber: '',
	monthIssuance: '',
	yearIssuance: '',
	dateOfIssuance: '',
	dateBirth: '',
	monthBirth: '',
	yearBirth: '',
	dateOfBirth: '',
	licensePhoto: '',
	firstName: '',	
	midName: '',
	lastName: '',
	company: '',
	accountNumber: ''
};

let createLicenseUpload = async () => {
    DriveLicense.country = $('#issusing-country').val(),
	DriveLicense.state = $('#state-license').val(),
	DriveLicense.licenseNumber = $('#license-number').val(),
	DriveLicense.monthIssuance = $('#month-issuance').val(),
	DriveLicense.yearIssuance = $('#year-issuance').val(),
	DriveLicense.dateBirth = $('#date-birth').val(),
	DriveLicense.monthBirth = $('#month-birth').val(),
	DriveLicense.yearBirth = $('#year-birth').val(),
	DriveLicense.firstName = $('#license-first-name').val(),
	DriveLicense.midName = $('#license-mid-name').val(),
	DriveLicense.lastName = $('#license-last-name').val(),
	DriveLicense.company = $('#license-company').val(),
	DriveLicense.accountNumber = $('#bank-account-number').val()

    let formDataLicense = new FormData();
	formDataLicense.append('file', $('.imageUploadLicense')[0].files[0]);
	// $('.btnLoadingUploadLicense').html('<div style="font-size: 8px; margin-right: 5px; margin-bottom: 2px; "\n' +
	// 	'                             class="spinner-border text-light" role="status">\n' +
	// 	'                            <span class="sr-only">Loading...</span>\n' +
	// 	'                        </div>\n' +
	// 	'                        Loading...');
	// $('.btnLoadingUploadLicense').attr('disabled','disabled');
	$(".btnLoadingUploadLicense").addClass('has-spinner');
	$('.has-spinner').buttonLoader('start');
    
    let uploadLicense = await $.ajax({
		type: 'POST',
		url: '/licenseUpload',
		data: formDataLicense,
		processData: false,
		contentType: false,
    });
    
    if(uploadLicense.status === 200){
        DriveLicense.licensePhoto = JSON.stringify(uploadLicense.message);
    }
    

    let result = await $.ajax({
		type: 'POST',
		url: '/driverLicense',
		data: JSON.stringify(DriveLicense),
		processData: false,
		dataType: 'json',
		contentType: 'application/json',
    });

    if (result.status === 200) {
		$('.btnLoadingUpload').removeAttr('disabled');
		$('.has-spinner').buttonLoader('stop');
		Swal.fire(
			'Success!',
			'Update license success!',
			'success'
		);
	}else {
		if (result.status === 520) {
			$('.has-spinner').buttonLoader('stop');
			$.toast({
				text: 'Date of issuance must be less than or equal to current time',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
			return false;
		}
    }
    setTimeout(() => {
		window.location.href = `/account`;
	}, 3000);
}