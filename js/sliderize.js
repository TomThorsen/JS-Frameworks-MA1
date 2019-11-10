(function($){
    $.fn.sliderize = function(runspeed) {
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
        slide = this.children();
        slideamount = slide.length;
        i=0;
        setTimeout(run, runspeed);
    };
})(jQuery);
