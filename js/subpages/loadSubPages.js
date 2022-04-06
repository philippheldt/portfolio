var obj;
var i = 0;
let app = document.querySelector(".content");

//Hier wird die objekt API gefetcht und daraus dynamisch die Seite aufgebaut.

fetch("js/subpages/starbucks.json")
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    obj.articles.forEach((article) => {
      switch (article.presetName) {
        case "reg_3_large":
          app.insertAdjacentHTML(
            "beforeend",
            `<section id="portfolio" class="g-10">
            <div class="gallery g-6 c1-6">
              <img src="${article.img_1}" class="c-r1-4" id="img1-${i}" alt="" />
              <img src="${article.img_2}" class="c5-6" id="img2-${i}" alt="" />
              <img src="${article.img_3}" class="c5-6" id="img3-${i}" alt="" />
            </div>
            <div class="text c7-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" id="button-${i}">
              ${article.button ? article.buttonText : ""}</button>
            </div>
          </section>`
          );
          !article.title
            ? (document.querySelector("#title-" + i).style.display = "none")
            : (document.querySelector("#title-" + i).style.display = "grid");
          !article.button
            ? (document.querySelector("#button-" + i).style.display = "none")
            : (document.querySelector("#button-" + i).style.display = "grid");
      }
      i++;
    });
  });
