const xButton = document.querySelector("#x");
const closeButton = document.querySelector("#close-overlay");
closeButton.addEventListener("click", close);
xButton.addEventListener("click", close);

function close() {
  console.log("hallo");
  document.querySelector(".overlay").style.display = "none";
}
