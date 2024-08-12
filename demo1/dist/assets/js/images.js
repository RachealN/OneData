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
    
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = img.attr('alt');
  });

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }


  $(document).ready(function() {
    $(".video-thumbnail").on("click", function() {
      var videoUrl = $(this).data("video-url");
      $("#videoFrame").attr("src", videoUrl);

      $("#videoModal").modal("show");
    });

    $("#videoModal").on("hidden.bs.modal", function () {
      $("#videoFrame").attr("src", "");
    });
  });