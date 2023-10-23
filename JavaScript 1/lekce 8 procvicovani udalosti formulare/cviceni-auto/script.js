const car = document.querySelector("#car");

const moveCarRight = () => {
  const currentMarginLeft = parseInt(getComputedStyle(car).marginLeft, 10);
  car.style.marginLeft = currentMarginLeft + 10 + "px";
};

const moveCarLeft = () => {
  const currentMarginRight = parseInt(getComputedStyle(car).marginLeft, 10);
  car.style.marginLeft = currentMarginRight - 10 + "px";
};

const moveCar = (event) => {
  if (event.key === "ArrowLeft") {
    moveCarLeft();
  } else if (event.key === "ArrowRight") {
    moveCarRight();
  }
};

document.addEventListener("keydown",moveCar);
