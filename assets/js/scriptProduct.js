
$(".navbar-toggler").click(function () {
    $("body").toggleClass("overflow-hidden");
});


// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         {pageLanguage: 'en'},
//         'google_translate_element'
//     );
// }


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 88) {
        // $('header').removeClass('stickyBGBlur');
        $('#header').addClass('sticky');
        // document.getElementById('logoIMG').src = '/assets/images/JIVIKA-agri-Logo.png';
        document.getElementById('logoIMG').src = '/assets/images/JIVIKA-agri-Logo-black.png';
        document.querySelectorAll('.nav-item a').forEach(function (link) {
            link.style.color = "#050708";
        });
    } else {
        $('#header').removeClass('sticky');
        // document.getElementById('logoIMG').src = '/assets/images/JIVIKA-agri-Logo-white.png'
        // document.getElementById('logoIMG').src = '/assets/images/Untitled-1-01 (1).png'
        document.getElementById('logoIMG').src = '/assets/images/JIVIKA-agri-Logo-black.png';
        document.querySelectorAll('.nav-item a').forEach(function (link) {
            // link.style.color = "#fff";
            link.style.color = "#050708";
        });
        // $('header').addClass('stickyBGBlur');
    }
});





function toggleContent() {
    const content = document.getElementById('content');
    if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
        content.style.maxHeight = content.scrollHeight + "px"; // Show content
    } else {
        content.style.maxHeight = "0px"; // Hide content
    }
}

$(document).ready(function () {
    $(".product-slider21").slick({
        dots: false,
        infinite: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        vertical: false,
        autoplay: false,
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
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 2500,
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
                breakpoint: 280,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
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
            scrollTop: $('#' + elementId).offset().top - 100
        }, 50); // 500ms for smooth scrolling
    }

    if (parameter == "product") {

        $('.ex_product').addClass('active');
        $('.ex_about').removeClass('active');
        $('.ex_contact').removeClass('active');

        document.getElementById("11").classList.add("active");
        document.getElementById("12").classList.remove("active");
        document.getElementById("13").classList.remove("active");
        scrollToActive("11");

    } else if (parameter == "contact") {
        $('.ex_contact').addClass('active');
        $('.ex_about').removeClass('active');
        $('.ex_product').removeClass('active');

        document.getElementById("12").classList.add("active");
        document.getElementById("11").classList.remove("active");
        document.getElementById("13").classList.remove("active");
        scrollToActive("12");
    } else {
        $('.ex_about').addClass('active');
        $('.ex_contact').removeClass('active');
        $('.ex_product').removeClass('active');


        document.getElementById("13").classList.add("active");
        document.getElementById("11").classList.remove("active");
        document.getElementById("12").classList.remove("active");
        scrollToActive("13");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const productDesLinks = document.querySelectorAll('.product_des');
    const contentDivs = document.querySelectorAll('.content');

    // Function to show content
    function showContent(index) {
        // Hide all content divs
        contentDivs.forEach(div => {
            div.style.maxHeight = '0';
        });

        // Remove active class from all links
        productDesLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show the selected content div
        const targetContent = contentDivs[index];
        if (targetContent) {
            targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
            productDesLinks[index].classList.add('active');
        }
    }

    // Add click event listener to each product description link
    productDesLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showContent(index);
        });
    });

    // Show first content by default
    showContent(0);
});


window.onload = function () {
    document.querySelector(".popup-overlay").style.display = "flex";
};

document.querySelector(".close-popup").onclick = function () {
    document.querySelector(".popup-overlay").style.display = "none";
};


$(document).ready(function () {
    // Check if URL contains '/export/'
    if (window.location.pathname.includes('/export/')) {
        // Find the Export link and add the active class
        $('a.nav-link').css('color', 'red');
    }
});

function myFunction_index() {
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !contact || !email) {
        alert("Please fill all fields.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const message = `Name: ${name}%0AContact: ${contact}%0AEmail: ${email}`;
    const phone = "919998183952";
    const url = `https://wa.me/${phone}?text=${message}`;

    window.location.href = url;
    return false; // Prevent actual form submission
}
