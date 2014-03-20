$(document).ready(function(){
	$('#print').click(print_item);
	
	// $('#email_this').click(function(){
	// 	open_popup('emailthis');
	// });
});

function print_item () {
	var footer_add = 'e-mail: info@bkantiques.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; www.bkantiques.com';
	var footer_html = $('#footer .span-12').html().replace('8933', '8933 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + footer_add);
	var print_window = window.open('','','toolbar=yes,location=no,scrollbars=yes');
	print_window.document.write('<html><head><title>BK Antiques</title><link rel="stylesheet" href="/c/print2.css" type="text/css" media="screen, print"></head><body onload="self.print();document.getElementById(\'print_article\').style.display=\'none\';"><center><img src="/images/logo.png" /></center><br /><div id="main">'+ $('#image').html() + $('#item_detail').html() +'<div id="footer">'+footer_html +'</div></div></body></html>');
	print_window.document.close();
	print_window.focus();
}