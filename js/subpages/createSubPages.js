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

function reg3LI(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function reg3LT(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function reg3SI(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
             <div class="gallery g-6 c1-5">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6" alt="" />
              <img id="img2-${i}" src="${article.img_2}" class="c1-3" />
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function reg3ST(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
            <div class="text c1-4">
              <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
              <p id="text-${i}">${article.regText}</p>
              <button class="${article.buttonColor}" 
              id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
              ${article.button ? article.buttonText : ""}</button>
            </div>
            <div class="gallery g-6 c5-10">
              <img id="img1-${i}" src="${article.img_1}" class="c1-6" alt="" />
              <img id="img2-${i}" src="${article.img_2}" class="c1-3" />
              <img id="img3-${i}" src="${article.img_3}" class="c4-6" />
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

function reg2T(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function reg2I(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function reg1I(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function reg1T(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function wide1I(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function wide1T(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
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
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
}

function full1(article, i) {
  app.insertAdjacentHTML(
    "beforeend",
    `<section id="portfolio-${i}" class="g-10 portfolio">
              <video class="video-frame c1-10 dynamic" id="img1-${i}" src="${
      article.vid_1
    }" autoplay loop muted></video>
            <img src="${article.img_1}" class="video-frame c1-10 dynamic" id="img2-${i}" alt="" />

              <div class="filled g-10 c1-10">
                <div class="text c2-5">
                  <h2 id="title-${i}">${article.title ? article.titleText : ""}</h2>
                   <p id="text-${i}">${article.regText}</p>
                    <button class="${article.buttonColor}" 
                    id="button-${i}" onclick="window.location.href = '${article.buttonLink}';">
                    ${article.button ? article.buttonText : ""}</button>
                </div>
              </div>
          </section>`
  );
  !article.title
    ? (document.querySelector("#title-" + i).style.display = "none")
    : (document.querySelector("#title-" + i).style.display = "grid");
  !article.button
    ? (document.querySelector("#button-" + i).style.display = "none")
    : (document.querySelector("#button-" + i).style.display = "grid");
  !article.video
    ? (document.querySelector("#img2-" + i).style.display = "grid")
    : (document.querySelector("#img1-" + i).style.display = "grid");
}
