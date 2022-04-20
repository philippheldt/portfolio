var obj;
var i = 0;
let app = document.querySelector(".content");

//Hier wird die objekt API gefetcht und daraus dynamisch die Seite aufgebaut.

function loadData(dataName) {
  fetch("js/subpages/" + dataName + ".json")
    .then((res) => res.json())
    .then((data) => (obj = data))
    .then(() => {
      obj.articles.forEach((article) => {
        switch (article.presetName) {
          case "text":
            text(article, i);
            break;
          case "reg_3_large_i_t":
            reg3LI(article, i);
            break;
          case "reg_3_large_t_i":
            reg3LT(article, i);
            break;
          case "reg_3_small_i_t":
            reg3SI(article, i);
            break;
          case "reg_3_small_t_i":
            reg3ST(article, i);
            break;
          case "reg_2_t_i":
            reg2T(article, i);
            break;
          case "reg_2_i_t":
            reg2I(article, i);
            break;
          case "reg_1_i_t":
            reg1I(article, i);
            break;
          case "reg_1_t_i":
            reg1T(article, i);
            break;
          case "wide_1_i_t":
            wide1I(article, i);
            break;
          case "wide_1_t_i":
            wide1T(article, i);
            break;
          case "full_1":
            full1(article, i);
            break;
        }
        i++;
      });
    });
}

function text(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i} " class="c1-12 portfolio subpage-section-sorter">
            <div class="text c7-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}
function reg3LI(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i} " class="g-10 portfolio subpage-section-sorter">
            <div class="gallery g-6 c1-6">
              <img src="${article.img_1}" class="c-r1-4" id="img1-${i}" alt="" />
              <img src="${article.img_2}" class="c5-6" id="img2-${i}" alt="" />
              <img src="${article.img_3}" class="c5-6" id="img3-${i}" alt="" />
            </div>
            <div class="text c7-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg3LT(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
            <div class="text c1-3">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
            <div class="gallery g-6 c4-10">
              <img src="${article.img_1}" class="c-r3-6" id="img1-${i}" alt="" />
              <img src="${article.img_2}" class="c1-2" id="img2-${i}" alt="" />
              <img src="${article.img_3}" class="c1-2" id="img3-${i}" alt="" />
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg3SI(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
             <div class="gallery g-6 c1-5">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6-gallery" alt="" />
              <img id="img2-${i}" src="${article.img_2}" class="c1-3-gallery" />
              <img id="img3-${i}" src="${article.img_3}" class="c4-6" />
            </div>
            <div class="text c6-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg3ST(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
            <div class="text c1-4">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
            <div class="gallery g-6 c5-10">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6-gallery" alt="" />
              <img id="img2-${i}" src="${article.img_2}" class="c1-3-gallery" />
              <img id="img3-${i}" src="${article.img_3}" class="c4-6" />
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg2T(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
            <div class="text c1-4">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
            <div class="gallery g-6 c5-10">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6" alt="" />
              <img id="img2-${i}" src="${article.img_2}" class="c1-6" />
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg2I(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
                  <div class="gallery g-6 c1-5">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6" alt="" />
              <img id="img2-${i}" src="${article.img_2}" class="c1-6" />
            </div>
            <div class="text c6-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
      
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg1I(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
                  <div class="gallery g-6 c1-5">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6" alt="" />
            </div>
            <div class="text c6-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
      
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function reg1T(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
              <div class="text c1-4">
                <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
                <p id="text-${i}">${article.regText}</p>
                <button class="${article.buttonColor}" 
                id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
                ${article.button ? article.buttonText : ""}</button>
              </div>
              <div class="gallery g-6 c5-10">
                <img id="img1-${i}" src="${article.img_1}" class="c1-6" alt="" />
              </div>
            </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function wide1I(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
            <div class="gallery g-6 c1-6">
              <img src="${article.img_1}" class="c1-6" id="img1-${i}" alt="" />
            </div>
            <div class="text c7-10">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function wide1T(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
            <div class="text c1-3">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
            <div class="gallery g-6 c4-10">
             <img src="${article.img_1}" class="c1-6" id="img1-${i}" alt="" />
            </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
}

function full1(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio subpage-section-sorter">
              <video class="video-frame c1-10 dynamic" id="img1-${i}" src="${
      article.vid_1
    }" autoplay loop muted playsinline></video>
            <img src="${article.img_1}" class="video-frame c1-10 dynamic" id="img2-${i}" alt="" />

              <div class="filled g-10 c1-10" id="text-${i}">
                <div class="text c2-6 video-button" id="background-${i}">
                  <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
                   <p id="text-${i}">${article.regText}</p>
                    <button class="${article.buttonColor}" 
                    id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
                    ${article.button ? article.buttonText : ""}</button>
                </div>
              </div>
          </section>`
  );
  titleButtonQuery(article, i);
  addingUnderline(article, i);
  article.textBackground
    ? document.querySelector("#background-" + i).classList.add("white-background")
    : document.querySelector("#background-" + i).classList.remove("white-background");
  !article.video
    ? (document.querySelector("#img2-" + i).style.display = "grid")
    : (document.querySelector("#img1-" + i).style.display = "grid");
}

function titleButtonQuery(article, i) {
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function addingUnderline(article, i) {
  const titleElement = document.querySelector("#title-" + i);
  const titleArray = titleElement.innerHTML.split(" ");
  const titleSubtractorl = titleArray[0].split("l").length - 1;
  const titleSubtractori = titleArray[0].split("i").length - 1;
  const titleSubtractorI = titleArray[0].split("I").length - 1;
  const titleSubtractorj = titleArray[0].split("j").length - 1;
  const titleSubtractort = titleArray[0].split("t").length - 1;
  const titleSubtractorf = titleArray[0].split("f").length - 1;
  const titleAdditionW = titleArray[0].split("W").length - 1;
  const titleAdditionD = titleArray[0].split("D").length - 1;
  const titleAdditionR = titleArray[0].split("R").length - 1;
  const titleSubtractor =
    (titleSubtractorl +
      titleSubtractori +
      titleSubtractorI +
      titleSubtractorj +
      titleSubtractort +
      titleSubtractorf -
      titleAdditionW -
      titleAdditionD -
      titleAdditionR) /
    2;
  const titleLength = titleArray[0].length - titleSubtractor;
  if (article.title) {
    let titleLengthString = String(titleLength);
    titleLengthString = titleLengthString.replace(".", "_");
    console.log(titleLengthString);
    titleElement.classList.add("underline-" + titleLengthString);
  }
}
