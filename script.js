let saturate =document.getElementById("saturate");
let contrast =document.getElementById("contrast");
let brightness =document.getElementById("brightness");
let sepia =document.getElementById("sepia");
let grayscale =document.getElementById("grayscale");
let blur =document.getElementById("blur");
let hueRotate =document.getElementById("hue-rotate");


let upload =document.getElementById("upload");
let download =document.getElementById("download");
let img =document.getElementById("img");

let reset =document.querySelector('span');
let imgBox =document.querySelector(".img-box");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function resetValue(){
    img.style.filter="none";
    saturate.value="100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="0";
    grayscale.value="0";
    blur.value="0";
    hueRotate.value="0";
    ctx.filter= 
    `saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    grayscale(${grayscale.value})
    sepia(${sepia.value}%)
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)`;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);




}

window.onload = function(){
    download.style.display ='none';
    reset.style.display ='none';
    canvas.style.display="none";
}

upload.onchange= function(){
    resetValue();
    download.style.display ='block';
    reset.style.display ='block';
    canvas.style.display ='block';
    let file = new FileReader();//class ki9ra lmilafat
    file.readAsDataURL(upload.files[0]);
    file.onload =function(){
    img.src=file.result;
    }
    img.onload = function(){
        //hna kidir copie okatsali khdamto khsani n3azqd ndir draw okra
        canvas.width = img.width; 
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display="none";
    }
}
// cette methode ne marche pas bien because la valeur de filter initialisé
// saturate.addEventListener("input",function(){
//     img.style.filter = `saturate(${saturate.value}%)`
// });

// contrast.addEventListener("input",function(){
//     img.style.filter += `contrast(${contrast.value}%)`
// });
// methose vrais
let filters =document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener("input",function(){

        // img.style.filter= le premiere etape ceci
        // ctx.drawImage(img,0,0,canvas.width,canvas.height);
        ctx.filter= 
        `saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        grayscale(${grayscale.value})
        sepia(${sepia.value}%)
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        ` 
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        // ctx.drawImage(img,0,0,canvas.width,canvas.height);
     
    })
});

download.onclick=function(){
// download.href=img.src; le premiere
download.href=canvas.toDataURL();
}