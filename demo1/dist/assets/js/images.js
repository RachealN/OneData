$(".slider").slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("expandedImg");
var captionText = document.getElementById("caption");

$(".slider .overlay").on("click", function() {
    var img = $(this).find('.bgi-no-repeat');
    var imgSrc = img.css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    var imgName = $(this).data("name"); 
    
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgName; 
});

$(document).ready(function() {
    $(".video-thumbnail").on("click", function() {
        var videoUrl = $(this).data("video-url");
        $("#videoFrame").attr("src", videoUrl);
        $("#videoModal").fadeIn(); 
    });

    $(document).on("click", ".modal .close", function() {
        $(this).closest('.modal').fadeOut(); 
        $("#videoFrame").attr("src", ""); 
    });

    $(window).on("click", function(event) {
        if ($(event.target).hasClass('modal')) {
            $(event.target).fadeOut();
            $("#videoFrame").attr("src", ""); 
        }
    });
});


