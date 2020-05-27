(function ($) {
	$(document).ready(function () {
		$('.input-range').each(function () {
			var value = $(this).attr('data-slider-value');
			var separator = value.indexOf(',');
			if (separator !== -1) {
				value = value.split(',');
				value.forEach(function (item, i, arr) {
					arr[i] = parseFloat(item);
				});
			} else {
				value = parseFloat(value);
			}
			$(this).slider({
				formatter: function (value) {
					if(value>0){
						$("#price-current-range").html(value)
					}
					return 'RM' + value;
				},
				min: parseFloat($(this).attr('data-slider-min')),
				max: parseFloat($(this).attr('data-slider-max')),
				range: $(this).attr('data-slider-range'),
				value: value,
				tooltip: $(this).attr('data-slider-tooltip')
			});
		});

		
		
		
			$('input[name="startTime"]').daterangepicker({
				singleDatePicker: true,
				startDate: moment().format('L'),
				showDropdowns: true,
				minDate: moment(),
			}, function (start, end, label) {
				startDate = moment(start).format('DD/MM/YYYY');
			});

			$('input[name="endTime"]').daterangepicker({
				singleDatePicker: true,
				showDropdowns: true,
				startDate: moment().format('L'),
				minDate: moment(),
			}, function (start, end, label) {
				endDate = moment(start).format('DD/MM/YYYY');
			});
		
	});
})(jQuery);