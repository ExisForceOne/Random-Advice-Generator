const divider = document.querySelector(".divider");

const changeSVG = () => {
  const width = window.innerWidth;
  divider.src = `assets/divider-
	${width > 420 ? "desktop" : "mobile"}
	.svg`;
};

function debounce(func, timeout = 300) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timeout);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    changeSVG();
  })
);

changeSVG();
