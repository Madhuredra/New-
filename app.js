
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