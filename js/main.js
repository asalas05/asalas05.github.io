  !(function($) {
  "use strict";
  

  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
    
    if(value == "all")
    {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else
    {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
        
    }
});

if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

$(document).ready(function(){
    $('.venobox').venobox(); 
});

$("#firstlink").venobox().trigger('click');


$('.venobox_custom').venobox({
    framewidth : '400px',                            // default: ''
    frameheight: '300px',                            // default: ''
    border     : '10px',                             // default: '0'
    bgcolor    : '#5dff5e',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    share      : ['facebook', 'twitter', 'download'] // default: []
});

var lightboxDescription = GLightbox({
  selector: 'glightbox'
});


function call(id) {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    console.log(item);
    if (id === "all") {
      item.classList.remove('d-none');
      item.classList.add('fadeIn','glightbox');
      setTimeout(clean,500);
    } else {
      const check = items[index].classList.contains(id);
      console.log(check);

      if (check) {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
      } else {
        item.classList.add('d-none');
        item.classList.remove('fadeIn','glightbox');
      }
    }
  })
}

function clean() {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    item.classList.remove('fadeIn');
  })
}

$(".progress-bar-fill").css({"width":"100%","transition":"5s"});


  })(jQuery);