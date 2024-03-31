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
        var text1 = document.getElementsByClassName("text1");
        var text2 = document.getElementsByClassName("text2");
        var text3 = document.getElementById("text3");

        if (currentIndex > slides.length) {
            currentIndex = 1;
    }

    if (currentIndex < 1) {
        currentIndex = slides.length;
      }
      for (var i = 0; i < slides.length; i++) {
        text[i].style.display = "none";
        text[i].className = text[i].className.replace(" active", "");
      }
    
      text[currentIndex - 1].style.display = "";
      text[currentIndex - 1].className = "";
      slno.innerHTML = currentIndex + "/" + text.length;
    }
    
    displaySlide(currentIndex);
    
    function changeSlide(n) {
      currentIndex += n;
      displaySlide(currentIndex);
    }
    
    function currentSlide(n) {
      displaySlide(n);
    }