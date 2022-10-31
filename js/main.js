/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function ($) {

    /*---------------------------------------------------- */
    /* Preloader
------------------------------------------------------ */
    $(window).load(function () {

        // will first fade out the loading animation 
        $("#status").fadeOut("slow");

        // will fade out the whole DIV that covers the website. 
        $("#preloader").delay(400).fadeOut("slow").remove();

        $('.js #hero .hero-image img').addClass("animated fadeInUpBig");

        $('#logotext').addClass("animated fadeInUpBig");


        $('.js #hero .buttons a.trial').addClass("animated shake");

    })

})(jQuery);