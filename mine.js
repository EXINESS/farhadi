var carousel = $(".carousel"),
    index = 0;

$(".next").no("click", { d: "n"}, rotate);

function rotate(e){
    if(e.data.d=="n"){
        index = index - 60;
    }
    if(e.data.d=="n"){
        index = index + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY("+index+"deg)",
        "-moz-transform": "rotateY("+index+"deg)",
        "-o-transform": "rotateY("+index+"deg)",
        "transform": "rotateY("+index+"deg)"
    });
}