'use strict';

// Handle sent-mail

let handleSentMail = async () => {
	let bodyEmail = {
		email: $('#idEmailSent').val()
	};
	try{
		let result =  await $.ajax({
			type: 'POST',
			url: '/verify/email',
			data: bodyEmail,
			dataType: 'json',
		})
		if(result.status === 200){
			setTimeout(function () {
				window.location.href = `/`;
			}, 2500);

			$.toast({
				text: 'The verification code has been sent to your email',
				bgColor: '#1abc9c',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
		}
	}catch(e){
		$.toast({
			text: 'User not found',
			bgColor: '#f8504f',
			loaderBg: '#ffffff',
			hideAfter: 2500,
			position: 'top-right'
		});
	}
}

//Handle sign-up form

let handleSignUp = async () => {
	$('.btn-loading-signup').html('<div style="font-size: 8px; margin-right: 5px; margin-bottom: 2px; height: 15px; width: 15px;"\n' +
		'                             class="spinner-border text-light" role="status">\n' +
		'                            <span class="sr-only">Loading...</span>\n' +
		'                        </div>\n' +
		'                        Loading...');
	$('.btn-loading-signup').attr('disabled','disabled');
	$('#sign-up-form').parsley().validate();
	if (!$('#sign-up-form').parsley().isValid()) {
		$('.btn-loading-signup').html('Login');
		$('.btn-loading-signup').removeAttr('disabled');
		return false;
	}
	let bodySignUp = {
		userName: $('#user-name-signup').val(),
		firstName: $('#full-name-signup').val(),
		lastName: $('#full-name-signup').val(),
		email: $('#email-signup').val(),
		password: $('#password-signup').val(),
	};
	try {
		let result = await $.ajax({
			type: 'POST',
			url: '/sign-up',
			data: JSON.stringify(bodySignUp),
			processData: false,
			dataType: 'json',
			contentType: 'application/json',
		});
		let dataActive = await $.ajax({
			type: 'POST',
			url: '/verify/email',
			data: bodySignUp,
			dataType: 'json',
		});
		if (result.status === 200) {
			$('.btn-loading-signup').html('Sign Up');
			$('.btn-loading-signup').removeAttr('disabled');
			$.toast({
				text: 'You have been successfully registered.',
				bgColor: '#1abc9c',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
			setTimeout(function () {
				$('#modal_Signup').modal('hide');
				$('#user-name-signup').val('');
				$('#full-name-signup').val('');
				$('#full-name-signup').val('');
				$('#email-signup').val('');
				$('#password-signup').val('');
				$('#sign-up-form').parsley().reset();
			}, 1200);

		} else {
		
		}
	} catch (e) {
		$('.btn-loading-signup').html('Sign Up');
		$('.btn-loading-signup').removeAttr('disabled');
		$.toast({
			text: e.responseJSON.data.error.name,
			bgColor: '#f8504f',
			loaderBg: '#ffffff',
			hideAfter: 2500,
			position: 'top-right'
		});
	}
};

//Handle sign-in form

let handleSignIn = async () => {
	$('.btn-loading-login').html('<div style="font-size: 8px; margin-right: 5px; margin-bottom: 2px; height: 15px; width: 15px;"\n' +
		'                             class="spinner-border text-light" role="status">\n' +
		'                            <span class="sr-only">Loading...</span>\n' +
		'                        </div>\n' +
		'                        Loading...');
	$('.btn-loading-login').attr('disabled','disabled');
	$('#login-form').parsley().validate();
	if (!$('#login-form').parsley().isValid()) {
		$('.btn-loading-login').html('Login');
		$('.btn-loading-login').removeAttr('disabled');
		return false;
	}
	let bodySignIn = {
		userName: $('#user-name-signin').val(),
		password: $('#password-signin').val(),
	};
	try {
		let result = await $.ajax({
			type: 'POST',
			url: '/sign-in',
			data: JSON.stringify(bodySignIn),
			processData: false,
			dataType: 'json',
			contentType: 'application/json',
		});
		if (result.status === 200) {
			$('.btn-loading-login').html('Login');
			$('.btn-loading-login').removeAttr('disabled');
			$.toast({
				text: 'You are successfully logged in',
				bgColor: '#1abc9c',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
			setTimeout(function () {
				$('#showSignIn').modal('hide');
				$('#password-signin').val('');
				$('#user-name-signin').val('');
				if(result.data.avatar==='/images/profile/avatarDefault.png' || !result.data.phoneNumber){
					window.location.href = `/account`;
				}else {
					window.location.href = `/rental-car`;
				}
				
			}, 2500);
		}
	} catch (e) {
		if(e.responseJSON.status === 520){
			$('.btn-loading-login').html('Login');
			$('.btn-loading-login').removeAttr('disabled');
			$.toast({
				text: 'Email is not actived, please active email',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
		} else{
			$('.btn-loading-login').html('Login');
			$('.btn-loading-login').removeAttr('disabled');
			$.toast({
				text: 'Username or Password is incorrect',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
		}
	}
};
