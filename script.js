// Login Form //
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("login-modal");
    var btn = document.getElementById("login-btn");
    var span = document.getElementsByClassName("close")[0];

    if (modal && btn && span) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal, button, or close element not found");
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById("regForm");
    var bttn = document.getElementById("bttN");
    var span = document.getElementsByClassName("closeForm")[0];

    if (container && bttn && span) {
        bttn.onclick = function() {
            container.style.display = "block";
        }

        span.onclick = function() {
            container.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == container) {
                container.style.display = "none";
            }
        }
    } else {
        console.error("Container, button, or close element not found");
    }


});




// For text/object reveal //
window.addEventListener('scroll', reveal);

function reveal () {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


