       //gotop點擊事件-前往置頂
       $('#gotop').click(function() {
           window.scrollTo({
               top: 0,
               behavior: "smooth"
           });
       });


       //捲軸滑動事件 
       $('#topimg').addClass('animated flip');
       $('#facility ul').addClass('animated slideInDown');

       var scroll = $(window).scroll(function() {
           if (scroll.scrollTop() > $('#toppic').offset().top + 100) {
               $('#gotop').css('display', 'block');
               $('#trade ul').addClass('animated slideInDown');
           } else {
               $('#gotop').css('display', 'none')
           };

           if (scroll.scrollTop() > $('#facility').offset().top + 100) {
               $('#ticket_pic').addClass('animated slideInLeft');
               $('#ticket ul').addClass('animated slideInDown');
           };

           if (scroll.scrollTop() > $('#ticket').offset().top) {
               $('#traffic p').addClass('animated flash');
               setTimeout(function() {
                   $('#traffic table').slideDown(1000);
               }, 1000)
           }



       });