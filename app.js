const url = "https://api.adviceslip.com/advice";
const divider = document.querySelector(".divider");
const adviceIDInfo = document.querySelector(".advice-id-info");
const adviceInfo = document.querySelector(".advice-info");
const randomAdviceBtn = document.querySelector(".random-advice-btn");

const changeSVG = () => {
  const width = window.innerWidth;
  divider.src = `assets/divider-
	${width > 420 ? "desktop" : "mobile"}
	.svg`;
};

const debouncedChangeSVG = () => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      changeSVG();
    }, 300);
  };
};

const getAdvice = async () => {
  const res = await fetch(url);
  const { slip } = await res.json();
  console.log(slip);
  adviceIDInfo.textContent = slip.id;
  adviceInfo.textContent = slip.advice;
};

const init = () => {
  window.addEventListener("resize", debouncedChangeSVG());
  randomAdviceBtn.addEventListener("click", getAdvice);
  changeSVG();
  getAdvice();
};

init();
