const url = "https://api.adviceslip.com/advice";
const divider = document.querySelector(".divider");
const adviceIDInfo = document.querySelector(".advice-id-info");
const adviceInfo = document.querySelector(".advice-info");
const randomAdviceBtn = document.querySelector(".random-advice-btn");

const changeSvgOnResize = () => {
  const width = window.innerWidth;
  divider.src = `assets/divider-
	${width > 420 ? "desktop" : "mobile"}
	.svg`;
};

const debouncedChangeSvg = () => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      changeSvgOnResize();
    }, 300);
  };
};

const toogleBtnDisabled = () => {
  randomAdviceBtn.disabled = !randomAdviceBtn.disabled;
};

const showAdvice = ({ id, advice }) => {
  adviceIDInfo.textContent = id;
  adviceInfo.textContent = advice;
};

const getAdvice = async () => {
  toogleBtnDisabled();
  const res = await fetch(url);
  const { slip } = await res.json();
  showAdvice(slip);
  //Api has a 2 second delay before generating the next advice
  setTimeout(toogleBtnDisabled, 2000);
};

const init = () => {
  window.addEventListener("resize", debouncedChangeSvg());
  randomAdviceBtn.addEventListener("click", getAdvice);
  changeSvgOnResize();
  getAdvice();
};

init();
