function toggleTopNav() {
    var element = document.getElementById("navList")
    if(element.classList.contains("navHidden")) {
        element.classList.remove("navHidden");
    }
    else {
        element.classList.add("navHidden");
    }
}