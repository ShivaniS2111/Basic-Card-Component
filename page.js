'use strict'
let White = document.getElementsByClassName("share_white");
let Color = document.getElementsByClassName("share_color");
let icons = document.getElementsByClassName("icons");
let tri = document.getElementsByClassName("triangle");
var x = 0;

White[0].addEventListener("click", function(){
    if(x == 0){
        x = 1;
    White[0].style.opacity = "0";
    Color[0].style.opacity = "1";
    icons[0].style.opacity = "1";
    tri[0].style.opacity = "1";
    }
    else{
        x = 0;
        Color[0].style.opacity = "0";
        White[0].style.opacity = "1";
        icons[0].style.opacity = "0";
        tri[0].style.opacity = "0";
    }
});

