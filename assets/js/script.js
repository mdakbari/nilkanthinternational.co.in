


$(function () {
  // Load header and footer
  $(".popup-overlay").load(".include/client-info.html", function (response, status) {
    if (status === "success") {
      // Wait for DOM to be fully loaded
      setTimeout(function () {
        $(".popup-overlay").css("display", "flex");

        // Handle close button click
        $(".close-popup").on("click", function () {
          $(".popup-overlay").fadeOut();
        });

        // Handle form submission
        $("#contact").on("submit", function (e) {
          e.preventDefault();
          // Add your form handling logic here
          $(".popup-overlay").fadeOut();
        });
      }, 1000);
    }
  });
});


$(".navbar-toggler").click(function () {
  $("body").toggleClass("overflow-hidden");
});



// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//       {pageLanguage: 'en'},
//       'google_translate_element'
//   );
// }



$(window).on('scroll', function () {
  if ($(this).scrollTop() > 88) {
    // $('header').removeClass('stickyBGBlur');
    $('#header').addClass('sticky');
    // document.getElementById('logoIMG').src = '.assets/images/JIVIKA-agri-Logo.png';
    // document.getElementById('logoIMG').src = '.assets/images/JIVIKA-agri-Logo-black.png';
    document.querySelectorAll('.nav-item a').forEach(function (link) {
      link.style.color = "#050708";
    });
  } else {
    $('#header').removeClass('sticky');
    // document.getElementById('logoIMG').src = '.assets/images/JIVIKA-agri-Logo-white.png'
    // document.getElementById('logoIMG').src = '.assets/images/Untitled-1-01 (1).png'
    document.getElementById('logoIMG').src = '.assets/images/JIVIKA-agri-Logo-black.png';
    document.getElementById('logoIMG1').src = '.images/JIVIKA-agri-Logo-black.png';
    document.querySelectorAll('.nav-item a').forEach(function (link) {
      // link.style.color = "#fff";
      link.style.color = "#050708";
    });
    // $('header').addClass('stickyBGBlur');
  }
});


//testimonial main slider
$(document).ready(function () {
  $(".testimonial-slider2").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,

    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-right r-180"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
  });
});

//product slider
$(document).ready(function () {
  $(".product-slider3").slick({
    dots: false,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,

    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-right r-180"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
    responsive: [
      {
        breakpoint: 25000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


//main slider
$(document).ready(function () {
  $(".slider2").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,

    prevArrow:
      '<div class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-right r-180 abcd"></i></div>',
    nextArrow:
      '<div class="slide-arrow next-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});



//  aboutus counter 
let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function (item) {
  let startnumber = 0

  function counterup() {
    startnumber++
    item.innerHTML = startnumber

    if (startnumber == item.dataset.number) {
      clearInterval(stop)
    }
  }

  let stop = setInterval(function () {
    counterup()
  }, 0)

})


function toggleContent() {
  const content = document.getElementById('content');
  if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
    content.style.maxHeight = content.scrollHeight + "px"; // Show content
  } else {
    content.style.maxHeight = "0px"; // Hide content
  }
}




// swap-section

$(".read").first().addClass("active");

$(".read").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()),
    (position = $siblings.index($this));
  console.log(position);

  $(".content .content-details")
    .removeClass("active")
    .eq(position)
    .addClass("active");

  $siblings.removeClass("active");
  $this.addClass("active");
});

// jhjhjkhk

jQuery(document).ready(function () {
  $(".targetDiv").show();
});

jQuery(function () {
  jQuery("#showall").click(function () {
    jQuery(".targetDiv").show(".cnt");
  });
  jQuery("#hideall").click(function () {
    jQuery(".targetDiv").hide(".cnt");
  });

  jQuery(".showSingle").click(function () {
    jQuery(".targetDiv").hide(".cnt");
    jQuery("#div" + $(this).attr("target")).slideToggle();
  });
});





//  product select 
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".listProduct li");
  const products = document.querySelectorAll(".product");



  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const target = this.getAttribute("data-target");

      products.forEach(function (product) {
        if (target === "all" || product.classList.contains(target)) {
          product.classList.add("show");
        } else {
          product.classList.remove("show");
        }
      });
    });
  });
});



// In Every product page - packaging size detect function
const sizeOptions = document.querySelectorAll('.size-option');
// Get the span where the size will be displayed
const selectedSizeSpan = document.getElementById('selectedSize');

// Add click event listeners to all size options
sizeOptions.forEach(option => {
  option.addEventListener('click', function () {
    // Remove 'active' class from all size options
    sizeOptions.forEach(opt => opt.classList.remove('active'));

    // Add 'active' class to the clicked option
    this.classList.add('active');

    // Get the data-size attribute of the clicked option
    const selectedSize = this.getAttribute('data-size');
    // Update the text content of the span
    selectedSizeSpan.textContent = selectedSize;
  });
});


// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});




$(window).on('pageshow', function () {
  var query = window.location.search.substring(1);
  qs = query.split('=');
  parameter = qs[1];

  function scrollToActive(elementId) {
    $('html, body').animate({
      scrollTop: $('#' + elementId).offset().top - 320
    }, 50); // 500ms for smooth scrolling
  }

  if (parameter == "product") {

    $('.ex_product').addClass('active');
    $('.ex_about').removeClass('active');
    $('.ex_contact').removeClass('active');

    document.getElementById("12").classList.add("active");
    document.getElementById("11").classList.remove("active");
    document.getElementById("13").classList.remove("active");
    scrollToActive("12");

  } else if (parameter == "contact") {
    $('.ex_contact').addClass('active');
    $('.ex_about').removeClass('active');
    $('.ex_product').removeClass('active');

    document.getElementById("13").classList.add("active");
    document.getElementById("11").classList.remove("active");
    document.getElementById("12").classList.remove("active");
    scrollToActive("13");
  }
  else if (parameter == "whole_spice") {
    $('.category3').removeClass('show');
    $('.category4').removeClass('show');
    $('.category5').removeClass('show');
    $('.category10').removeClass('show');
    $('.category1').addClass('show');

    document.getElementById("0").classList.remove("active");
    document.getElementById("1").classList.add("active");
    scrollToActive("1");

  } else if (parameter == "edible_oils") {
    $('.category1').removeClass('show');
    $('.category4').removeClass('show');
    $('.category5').removeClass('show');
    $('.category10').removeClass('show');

    $('.category3').addClass('show');

    document.getElementById("0").classList.remove("active");
    document.getElementById("3").classList.add("active");
    scrollToActive("3");

  } else if (parameter == "dry_fruits") {
    $('.category1').removeClass('show');
    $('.category3').removeClass('show');
    $('.category5').removeClass('show');
    $('.category10').removeClass('show');

    $('.category4').addClass('show');

    document.getElementById("0").classList.remove("active");
    document.getElementById("4").classList.add("active");
    scrollToActive("4");

  } else if (parameter == "dried_fruits") {
    $('.category1').removeClass('show');
    $('.category3').removeClass('show');
    $('.category4').removeClass('show');
    $('.category10').removeClass('show');

    $('.category5').addClass('show');

    document.getElementById("0").classList.remove("active");
    document.getElementById("5").classList.add("active");
    scrollToActive("5");

  } else if (parameter == "salt") {
    $('.category1').removeClass('show');
    $('.category3').removeClass('show');
    $('.category5').removeClass('show');
    $('.category4').removeClass('show');

    $('.category10').addClass('show');

    document.getElementById("0").classList.remove("active");
    document.getElementById("10").classList.add("active");
    scrollToActive("10");

  } else {
    $('.ex_about').addClass('active');
    $('.ex_contact').removeClass('active');
    $('.ex_product').removeClass('active');


    document.getElementById("11").classList.add("active");
    document.getElementById("13").classList.remove("active");
    document.getElementById("12").classList.remove("active");
    scrollToActive("11");

    $('.category1').addClass('show');
    $('.category3').addClass('show');
    $('.category5').addClass('show');
    $('.category4').addClass('show');
    $('.category10').addClass('show');

    document.getElementById("0").classList.add("active");
    scrollToActive("0");

    $('.ex_about').addClass('active');
    $('.ex_contact').removeClass('active');
    $('.ex_product').removeClass('active');


    document.getElementById("11").classList.add("active");
    document.getElementById("13").classList.remove("active");
    document.getElementById("12").classList.remove("active");
    scrollToActive("11");
  }


});

function scrollToActive1(elementId) {
  $('html, body').animate({
    scrollTop: $('#' + elementId).offset().top - 100
  }, 50); // 500ms for smooth scrolling
}
function scroll_click(id) {
  scrollToActive1(id);
}


window.onload = function () {
  document.querySelector(".popup-overlay").style.display = "flex";
};

document.querySelector(".close-popup").onclick = function () {
  document.querySelector(".popup-overlay").style.display = "none";
};