// Show the scroll-to-top button when scrolling down to the 'About Us' section
window.onscroll = function() {
    showScrollBtn();
};

function showScrollBtn() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Function to scroll to the top when the button is clicked
document.getElementById("scrollBtn").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
