$('.view-more').click(function () {
	if ($(this).parent().children().first().attr('class') === 'collapse-text') {
		$(this).parent().children().first().removeClass('collapse-text').addClass('expand-text');
		$(this).children().first().text('View less');
		$(this).find('img').css({
			'-webkit-transform': 'rotate(180deg)',
			'-moz-transform': 'rotate(180deg)',
			'transform': 'rotate(180deg)' /* For modern browsers(CSS3)  */
		});
	} else {
		$(this).parent().children().first().removeClass('expand-text').addClass('collapse-text');
		$(this).children().first().text('View more');
		$(this).find('img').css({
			'-webkit-transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'transform': 'rotate(0deg)' /* For modern browsers(CSS3)  */
		});
	}
});

$('.handle-link-redirect-avatar').click(function (e) {
	if ($('#account-profile').length > 0) {
		$('#account-profile').parsley().validate();
		if ($('#avatar-header').attr('src') === '/images/profile/avatarDefault.png') {
			$('#avatar-preview > div').css('box-shadow', '0px 0px 11px 2px #ff5f5f');
			e.preventDefault();
		}
	}
	if ($('#avatar-header').attr('src') === '/images/profile/avatarDefault.png' || !$('#account-profile').parsley().isValid()) {
		$.toast({
			text: 'You need update avatar and phone number',
			bgColor: '#f8504f',
			loaderBg: '#ffffff',
			hideAfter: 2500,
			position: 'top-right'
		});
		e.preventDefault();
	}
});

$('.search-form').on('submit', function (e) {
	if ($('#account-profile').length > 0) {
		$('#account-profile').parsley().validate();
		if ($('#avatar-header').attr('src') === '/images/profile/avatarDefault.png') {
			$('#avatar-preview > div').css('box-shadow', '0px 0px 11px 2px #ff5f5f');
		}
		if ($('#avatar-header').attr('src') === '/images/profile/avatarDefault.png' || !$('#account-profile').parsley().isValid()) {
			$.toast({
				text: 'You need update avatar and phone number',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
			e.preventDefault();
		}
	}else {
		if ($('#avatar-header').attr('src') === '/images/profile/avatarDefault.png') {
			$.toast({
				text: 'You need update avatar and phone number',
				bgColor: '#f8504f',
				loaderBg: '#ffffff',
				hideAfter: 2500,
				position: 'top-right'
			});
			e.preventDefault();
		}
	}
});