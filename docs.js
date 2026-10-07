function toggleNavBar() {
    if (document.getElementById("navBar").style.width == "0px") {
        openNavBar();
    } else {
        closeNavBar();
    }
}

function openNavBar() {
  document.getElementById("navBar").style.width = "250px";
  document.getElementById("main").style.filter = "blur(5px)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNavBar() {
  document.getElementById("navBar").style.width = "0px";
  document.getElementById("main").style.filter = "blur(0px)";
} 