function slider (){
    let Text1 = document.querySelector("ul li.text1");

    let Text2 = document.querySelector("ul li.text2");

    let Text3 = document.querySelector("ul li.text3");

    let tmp = Text1.innerHTML;
        Text1.innerHTML = Text2.innerHTML;
        Text2.innerHTML = Text3.innerHTML;
        Text3.innerHTML = tmp;
}

function run(){
setInterval( slider, 3000);
}

run();


function reverse (){
    let Text4 = document.querySelector("ul li.text1");

    let Text5 = document.querySelector("ul li.text2");

    let Text6 = document.querySelector("ul li.text3");

    let tmp1 = Text6.innerHTML;
        Text6.innerHTML = Text5.innerHTML;
        Text5.innerHTML = Text4.innerHTML;
        Text4.innerHTML = tmp1;
}

let prev = document.querySelector('prev');
let next = document.querySelector('next');