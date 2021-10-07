$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true, 
    autoplaytimeout: 100,
    items: 4, // la cantidad de imagenes queremos mostrar
    nav: true,
    loop:true,
    lazyload: true,  //owlcarousel2.github.io/OwlCarousel2/demos/lazyLoad.html
    margin: 5,
    padding: 5,
    stagePadding:5,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items : 1,
            dots : false,
        },
        // breakpoint from 480 up
        480 : {
            items : 1,
            dots : false,
        },
        // breakpoint from 768 up
        768 : {
            items : 2,
            dots : false,
        },
        960 : {
            items : 2,
            dots : false,
        },
        1200 : {
            items : 3,
            dots : true,
        }
    }
  
});