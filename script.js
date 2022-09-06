$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(' .navbar').addClass("sticky");
        }else{
            $(' .navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $(' .scroll-up-btn').addClass("show");
        }else{
            $(' .scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $(' .scroll-up-btn').click(function(){
        $('html').animate({scrollYTop: 0});
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed =new Typed(".typing", {
        Strings: ["Student", "Developer", "Blogger", "Youtuber"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

