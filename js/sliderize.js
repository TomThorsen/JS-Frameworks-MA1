(function($){
    $.fn.sliderize = function(slideID,runspeed) {
        var slide;
        var slideamount;
        var i;
        function run() {
            $(slide[i]).fadeOut(1000);
            i++;
            if (i >= slideamount) i = 0;
            $(slide[i]).fadeIn(1000);
            setTimeout(run, runspeed);
        }
        slide = $(slideID).children();
        slideamount = slide.length;
        i=0;
        setTimeout(run, runspeed);
    };
})(jQuery);
