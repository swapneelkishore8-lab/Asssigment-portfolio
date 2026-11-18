

window.addEventListener("load", function () {
    alert("Welcome to Swapneel's Portfolio!");
});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});
