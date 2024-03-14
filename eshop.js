var cloth = document.querySelector('.page_1');
var cosmetic = document.querySelector('.page_2');
var book = document.querySelector('.page_3');
var furniture = document.querySelector('.page_4');



var clothItems = document.querySelectorAll(".page-1");
var cosmeticItems = document.querySelectorAll(".page-2");
var bookItems = document.querySelectorAll(".page-3");
var furnitureItems = document.querySelectorAll(".page-4");


bookItems.forEach(bookItem => {
    bookItem.addEventListener("click", function(){
        book.style.display ="block";
        furniture.style.display ="none";
        cloth.style.display ="none";
        cosmetic.style.display ="none";
    })
})



cosmeticItems.forEach(cosmeticItem => {
    cosmeticItem.addEventListener("click", function(){
        book.style.display ="none";
        furniture.style.display ="none";
        cloth.style.display ="none";
        cosmetic.style.display ="block";
    })
})


furnitureItems.forEach(furnitureItem => {
    furnitureItem.addEventListener("click", function(){
        book.style.display ="none";
        furniture.style.display ="block";
        cloth.style.display ="none";
        cosmetic.style.display ="none";
    })
})

clothItems.forEach(clothItem => {
    clothItem.addEventListener("click", function(){
        book.style.display ="none";
        furniture.style.display ="none";
        cloth.style.display ="block";
        cosmetic.style.display ="none";
    })
})


