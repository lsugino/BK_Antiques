$(function() {
	$(".popup").each(function() { initialize_popup($(this)) });
});

function initialize_popup (obj) {
	if($(obj).hasClass('ui-dialog-content')) return; // Don't initialize popups more than once
	
	// Allow for custom popups, but default to standard formatting
	if(!$(obj).hasClass('no-style')) {
		var content = $(obj).html();
		content = 
			'<table><tbody><tr><td class="tl"/><td class="t"/><td class="tr"/></tr><tr><td class="l"/><td class="bubble-content"><a onclick="close_popup(this); return false;" class="bubble-close">(x) Close</a>'
				+ content +
			'</td><td class="r"/></tr><tr><td class="bl"/><td class="b"/><td class="br"/></tr></tbody></table>';
		$(obj).html(content);
	}
	
	if ($(obj).hasClass('wide')) {
		var popupWidth = 650;
	} else if ($(obj).hasClass('narrow')) {
		var popupWidth = 330;
	} else if ($(obj).hasClass('extra-wide')) {
		var popupWidth = 1100;			
	} else {
		var popupWidth = 500;
	}
	
	$(obj).dialog({
		autoOpen: $(obj).hasClass('auto_open'),
		bgiframe: true,
		modal: false,
		width: popupWidth,
		height: 'auto',
		modal: true,
		position: ['center', 'center'],
		closeOnEscape: true,
		buttons: {},
		open: function () {
			// Close dialog if user clicks outside it
			$('.ui-widget-overlay').one('click', function() {
				$(this).next('.ui-dialog').children('.ui-dialog-content').dialog('close'); // Easier to just close all help popups... only one should be visible at a time anyway
			});
		}
	});
}


function close_popup (e) {
	$(e).parents('.popup').dialog('close');
	return false;
}

function open_popup (popup_id) {
	$('.popup').dialog('close');
	var dialog = $("#popup_"+popup_id).dialog('open');
	
	// $('.ui-dialog').css('position','absolute');
	return false;
}