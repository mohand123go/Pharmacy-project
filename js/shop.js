let windowHeight =  $(window).height();
$(".img-holder").height(windowHeight-(windowHeight/4));  

$(window).scroll(function(){
    if(  $(window).scrollTop() > 250)
    {
   
      console.log('hi');

      $(".stickyNavBar").css("position", "sticky");
    }else{
      $(".stickyNavBar").css("position", "relative");
      
}})

var owl = $(' .gallery .owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});

$('.deal-at-steal .owl-carousel ').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:4,

  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$(' .sales .owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  items:3,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})


$('.sales .owl-carousel ').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:4,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})


$('.Featured-Articles .owl-carousel ').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:4,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$('.TOP-CATEGORIES .owl-carousel ').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:4,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
