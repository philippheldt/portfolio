const xButton = document.querySelector("#x");
const closeButton = document.querySelector("#close-overlay");
closeButton.addEventListener("click", close);
xButton.addEventListener("click", close);

function close() {
  document.querySelector(".overlay").style.display = "none";
}

const xContact = document.querySelector("#x-contact");
xContact.addEventListener("click", close2);

function close2() {
  console.log("moin");
  document.querySelectorAll(".overlay")[1].style.display = "none";
}

function openContact() {
  console.log("moin");
  document.querySelectorAll(".overlay")[1].style.display = "block";
}
