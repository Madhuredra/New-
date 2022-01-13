
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var type  = new Typed(".Name" ,   {
    strings:["<>","An Engineer.","Web Developer.","Programmer."],
    typeSpeed:120,
    backSpeed:100,
    loop:true
})

function onHobverChangeEmoticons(){
  document.getElementById("emoji").innerText = "😃";
  
}

function onmouseMoveHobverChangeEmoticons(){
  document.getElementById("emoji").innerText = "🙂";
  
}

function ShowMe(event){
  if(event==="btn1"){
    // console.log(document.getElementById("show1"))
    document.getElementById("show1").style.zIndex=1;
    document.getElementById("show2").style.zIndex=0;
    // document.getElementById("show2").style.visibility = hidden;
    document.getElementById("show3").style.zIndex=0;
    // document.getElementById("show3").style.visibility = hidden;
  } 
  if(event==="btn2"){
    document.getElementById("show1").style.zIndex=0;
    document.getElementById("show2").style.zIndex=1;
    document.getElementById("show3").style.zIndex=0;
  } 
  if(event=="btn3"){
    document.getElementById("show1").style.zIndex=0;
    document.getElementById("show2").style.zIndex=0;
    document.getElementById("show3").style.zIndex=1;
  }                                                                     
} 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}