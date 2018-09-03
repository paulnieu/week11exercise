$("#hide").click(function() {
	$("img").hide();
});

$("#show").click(function() {
	$("img").show();
});

$("#toggle").click(function() {
	$("img").toggle();
});

$("#fade").click(function() {
	$("img").toggleClass("fade");
	if( $("img").css("opacity") == '0') {
		$("#textChange").text("fade-on");
	} else {
		$("#textChange").text("fade-off");
	}
});


$("img").hover(function() {
	$(this).attr("src", "https://www.thoughtco.com/thmb/3XaioEzwXlVsxtrl83gV7GpiVD8=/650x498/filters:fill(auto,1)/Funny-Superman-Wearing-Batman-Mask-5702bd315f9b581408a716a8.jpg");
}, function(){
	$(this).attr("src", "https://i.ytimg.com/vi/DKbkKJWYT6E/maxresdefault.jpg");
});



$("#add").click(function() {
	$("#list").append("<li> New Stuff</li>");

      $("li").hover(function() {
        $(this).css({"font-size" : "50px", "color": "green", "font-family": "bold"})
      }, function() {
        $(this).css({"font-size" : "initial", "color": "initial", "font-family": "initial"})
      })

  });



$("#final").click(function() {
	$("body").append("<div id='overlay'></div>");

});




