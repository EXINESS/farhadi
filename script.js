const texts = document.querySelectorAll(".features ul li");

const rotateFeatures = (isRotateLeft) => {
  if (isRotateLeft) {
    const tmp = texts[1].innerHTML;

    for (let i = 1; i < texts.length - 2; i++) {
      texts[i].innerHTML = texts[i + 1].innerHTML;
    }

    texts[texts.length - 2].innerHTML = tmp;
  } else {
    const tmp = texts[texts.length - 2].innerHTML;

    for (let i = texts.length - 3; i > 0; i--) {
      texts[i + 1].innerHTML = texts[i].innerHTML;
    }

    texts[1].innerHTML = tmp;
  }
};

setInterval(() => rotateFeatures(false), 3000);
