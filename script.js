let bar=document.getElementById("hamb");
let nav= document.getElementById("navbar");
let cls=document.getElementById("close");

bar.onclick=function(){
    nav.classList.toggle("active");
    console.log('changed');
}
cls.onclick=function(){
    nav.classList.toggle("active");
}

let mainImg= document.getElementById("mainImg");
let smallimg= document.getElementsByClassName("small-img");

smallimg[0].onclick= function(){
    mainImg.src=smallimg[0].src;
}
smallimg[1].onclick= function(){
    mainImg.src=smallimg[1].src;
}
smallimg[2].onclick= function(){
    mainImg.src=smallimg[2].src;
}
smallimg[3].onclick= function(){
    mainImg.src=smallimg[3].src;
}
