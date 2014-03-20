$(document).ready( function() {	
	validator = $("#login_form").validate();
	validator = $("#register_form").validate();

	$('#login_form').ajaxForm({
		dataType: 'json',
		beforeSubmit: function () { 
			if(!$("#login_form").valid()) {
				return false;
			}
		},
		success: function (data) {
			if (!data.status) {
				$('#login_form').prepend('<span class="error">'+data.error+'</span>');
				return false;
			} else {
				window.location.reload();
			}
		}
	});
	
	$('#register_form').ajaxForm({
		dataType: 'json',
		beforeSubmit: function () { 
			if(!$("#register_form").valid()) {
				return false;
			}
		},
		success: function (data) {
			if (!data.status) {
				$('#register_form').prepend('<span class="error">'+data.error+'</span>');
				return false;
			} else {
				window.location.reload();
			}
		}
	});
});