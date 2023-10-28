const btns = document.querySelectorAll(".kamen");
btns.forEach((btn) => {
  const src = new Audio(`tony/${btn.textContent}.mp3`);
  btn.addEventListener("click", () => {
    src.play();
    console.log(btn.textContent);
  });
});
