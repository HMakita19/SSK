
$(function(){
	$("#wrapper").css("display", "none");
	$("#wrapper").css({opacity:'0'});
	setTimeout(function(){
		$('.anime').fadeOut();
    $("#wrapper").stop().animate({opacity:'1'},3000);
		$("#wrapper").css("display", "block");
	},6000);//約4秒数後
});
