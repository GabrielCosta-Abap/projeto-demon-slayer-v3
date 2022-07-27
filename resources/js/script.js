$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    var openCloseToggleButton = function(){
        if ($(document).width() <= 1071){
            var nav = $('.main-nav');
            nav.slideToggle(200);

            var icon =  $('.ion-nav-icon')
            var iconExit =  $('.ion-nav-icon-exit')

            if($(icon).is(":visible")){
                icon.hide();
                iconExit.show();
            }else{
                icon.show();
                iconExit.hide();
            }
        }
    }

    $('.js--nav-icon').click(openCloseToggleButton)
    $('.main-nav li a').click(openCloseToggleButton)
   
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    })

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

})