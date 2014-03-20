$(document).ready(function(){ 
    $("#nav").superfish({
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

	// $('img')
	//   .wrap('<span style="display:inline-block"></span>')
	//   .css('display', 'block')
	//   .parent();
	  // .zoom();
	  
});