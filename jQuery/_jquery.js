$(document).ready(function(){

    $(".container1 button").click( function(){
        $('.container1 p').addClass( "selected" );
    });
    
    $("#container2 button").click( function(){
        $('#container2 button').slideToggle( "slow"); 
    });  

    $("#container3 button").click( function() {
        $('#container3 p').hide( "slow");
    });

    $("#container3 button").click(function() {
        $('#container3 p').show( "slow");
    });

    $("#container4 button").click( function(){
        $('#container4 p').click( "selected" );
    });

    $("#container5 button").click( function(){
        $('#container5 p').toggle( "slow" );
    });

    $("#container6 button").click( function(){
        $('#container6 p').slideUp( "slow" );
    });

    $("#contslide").click( function(){
        $('#container6 p').slideDown( "slow" );
    });

    $("#container7 button").click( function(){
        $('#container7 p').fadeIn( "selected" );
    });

    $("#contfade").click( function(){
        $('#container7 p').fadeOut( "selected" );
    });

    $("#container8 button").click( function(){
        $('#container8 p').before( "Boom" );
    });
     $("#contafter").click( function(){
        $('#container8 p').after( "kaboom" );
    });

    $("#container9 button").click( function(){
        $('#container9 p').append( "Adding HTML!" );
    });

    $("#container10 button").click( function(){
        $('#container10 p').html( "<p>Yea</p>" );
    });

    $("#container11 button").click( function(){
        $('#container11 img').attr ('src', 'cherry.jpg');
    })

    $("#container12 button").click( function(){
        $('#container13 p:last').html( "str aloja!" ); 

    })
});