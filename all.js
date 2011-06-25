function init() {
	var $desc=$('#description')
	var dheight=$desc.height()
	$desc.css('height','0').hide()
	var $aboutLink=$('a#about')
	var aboutText=$('a#about').text()
	$('a#about,a#closePortrait').live('click',function() {
		if($desc.is(':visible')) {
			closeDesc()
		} else {
			$desc.show().stop(true,false).animate( {
				height:dheight
			},{
				duration:500
			});
			$aboutLink.text("Close")
		}
		return false;
	});
	function closeDesc() {
		$desc.stop(true,false).animate( {
			height:0
		}, {
			duration:500,complete:function() {
				$(this).css('display','none');
			}
		});
		$aboutLink.text(aboutText);
		return false;
	};
	var $searchBox=$('#search input[type="text"]');
	var searchDefault='Search';
	$searchBox.each(function() {
		$(this).val(searchDefault);
	}).focus(function() {
		$(this).addClass("focus");
		if($.trim($(this).val())===searchDefault) {
			$(this).val("");
		}
	}).blur(function() {
		if($.trim($(this).val())==="") {
			$(this).val(searchDefault);
		}
		$(this).removeClass("focus");
	});
	
};
$(document).ready(init);