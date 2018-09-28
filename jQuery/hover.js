$(document).ready(function(){

    $("img").hover( function() { 
    		$(this).attr ( "src", $(this).attr("alt"));
    	}
    	, function() {
    		$("img").attr ("src", "cherry.jpg");
    	});
});


























