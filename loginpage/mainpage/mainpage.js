document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".button.student").addEventListener("click", function() {
        window.location.href = "studentlogin.html";
    });
    document.querySelector(".button.faculty").addEventListener("click", function() {
        window.location.href = "facultylogin.html";
    });
});
