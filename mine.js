// var carousel = $(".carousel"),
//     index = 0;
// 
// $(".next").no("click", { d: "n"}, rotate);
// 
// function rotate(e){
//     if(e.data.d=="n"){
//         index = index - 60;
//     }
//     if(e.data.d=="n"){
//         index = index + 60;
//     }
//     carousel.css({
//         "-webkit-transform": "rotateY("+index+"deg)",
//         "-moz-transform": "rotateY("+index+"deg)",
//         "-o-transform": "rotateY("+index+"deg)",
//         "transform": "rotateY("+index+"deg)"
//     });
// 


var currentIndex = 1;
    function displaySlide(n) {
    currentIndex = n;
        var slides = document.getElementsByClassName("slide");
        var dots = document.getElementsByClassName("dot");
        var slno = document.getElementById("slide-no");

        if (currentIndex > slides.length) {
            currentIndex = 1;
    }

    if (currentIndex < 1) {
        currentIndex = slides.length;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
      }
    
      slides[currentIndex - 1].style.display = "block";
      dots[currentIndex - 1].className = "dot active";
      slno.innerHTML = currentIndex + "/" + slides.length;
    }
    
    displaySlide(currentIndex);
    
    function changeSlide(n) {
      currentIndex += n;
      displaySlide(currentIndex);
    }
    
    function currentSlide(n) {
      displaySlide(n);
    }