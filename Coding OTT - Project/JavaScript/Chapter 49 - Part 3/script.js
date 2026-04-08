// Task:

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", nextScroll);
function nextScroll() {
    
    let imageTrack = document.getElementById("imageTrack");
    imageTrack.scrollBy(100, 10);
    
    
};

prevBtn.addEventListener("click", backScroll);
function backScroll() {
    
    let imageTrack = document.getElementById("imageTrack");
    imageTrack.scrollBy(-100, 10);
    
    
};

let buyNowBtn = document.getElementById("buyNowBtn");
buyNowBtn.addEventListener("click", function () {

    alert("Buy Button Clicked");
    return false;

});

let addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", function () {

    alert("Add To Cart Button Clicked");
    return false;

});