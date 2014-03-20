$(document).ready(function(){ 
  $("ul.sf-menu").superfish({
		speed: 'fast'
	}); 

	$('#login').click(function(){
		open_popup('user');
		$('#login_email').focus();
		return false;
	});

	$('#register, #register2').click(function(){
		open_popup('user');
		$('#register_email').focus();
		return false;
	});
	
	var ema2 = '@';
	var ema1 = 'info';
	var ema4 = '.com';
	var ema3 = 'bkantiques';

	$('#contact_email span').html(ema1 + ema2 + ema3 +ema4);

	$('#image_container').zoom({url: $('#image img').attr('data-big')});
	  
});