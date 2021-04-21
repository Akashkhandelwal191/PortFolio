
// Loader JS 
var Preloader = document.getElementById("loader");
function myFunction() {

    Preloader.style.display = "none";

}


//Cookies Js
$(document).ready(function () {

    setTimeout(() => {
        $("#blur").addClass('main-body');
        $("#cookies").css("display", "flex");

    }, 12000);


    $('.cookbtn').click(function () {
        $("#blur").removeClass('main-body');
        $("#cookies").css("display", "none");
    })

    $('#fr').click(function () {
        $("#blur").removeClass('main-body');
        $("#cookies").css("display", "none");
    })

});


//Typed Js
var typed = new Typed('.type', {

    strings: ['My Name is Akash Khandelwal.', 'I am a Software Developer.', 'I am a Programming Enthusiastic.', 'I am a Web Developer.', 'I   am   a   Youtuber.'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,

});


//Scroll Button BACK TO TOP JS
window.addEventListener('scroll', function () {

    if (document.documentElement.scrollTop > 181) {

        document.getElementById('backtotop').style.display = "block";
    }

    else {
        document.getElementById('backtotop').style.display = "none";
    }

})

const topscroll = document.querySelector("#backtotop");
topscroll.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"

    });
});




//Progress-bar Animation Js
$('.moveanimation').ready(function () {

    window.addEventListener("scroll", function () {

        if (document.documentElement.scrollTop > 200) 
        {
            var a = document.querySelectorAll('.progress-bar');
            for (var i = 0; i < a.length; i++) {
                a[i].classList.add('animation');
            }
            setTimeout(() => {
                $(".percentage").css("opacity", "1");
            }, 2000);
        }
        else 
        {
            var a = document.querySelectorAll('.progress-bar');
            for (var i = 0; i < a.length; i++) {
                a[i].classList.remove('animation');
            }
            $(".percentage").css("opacity", "0");

        }

    })
})





//Form Submission Js Function
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();

        // status.innerHTML = "Thanks!";
        window.alert("Thanks!Your Response has been Recorded");
    }

    function error() {
        form.reset();

        window.alert("Oops! There was a problem.");

    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);

        }
    };
    xhr.send(data);
}