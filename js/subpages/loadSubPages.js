var obj;
var i = 0;
let app = document.querySelector(".content");

fetch("js/subpages/starbucks.json")
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    console.log(obj.articles[0].titleText);
    console.log(document.querySelector("#img1-0"));
    obj.articles.forEach((article) => {
      switch (obj.articles[i].presetName) {
        case "reg_3_large":
          app.innerHTML = `<section id="portfolio" class="g-10">
            <div class="gallery g-6 c1-6">
              <img src="" class="c-r1-4" id="img1-${i}" alt="" />
              <img src="" class="c5-6" id="img2-${i}" alt="" />
              <img src="" class="c5-6" id="img3-${i}" alt="" />
            </div>
            <div class="text c7-10">
              <h2 id="title-${i}"></h2>
              <p id="text-${i}"></p>
              <button class="b-black" id="button-${i}"></button>
            </div>
          </section>`;
          document.querySelector("#img1-" + i).setAttribute("src", obj.articles[0].img_1);
          document.querySelector("#img2-" + i).setAttribute("src", obj.articles[0].img_2);
          document.querySelector("#img3-" + i).setAttribute("src", obj.articles[0].img_3);
          if (obj.articles[i].title) {
            document.querySelector("#title-" + i).innerHTML = obj.articles[0].titleText;
          }
          document.querySelector("#text-" + i).innerHTML = obj.articles[0].regText;
          obj.articles[i].button
            ? (document.querySelector("#button-" + i).innerHTML = obj.articles[0].buttonText)
            : (document.querySelector("#button-" + i).style.display = "none");
      }
      //Achtung! Hier muss das innerHTML element appended werden, damit das alte nich überschrieben wird!
      i++;
    });
  });
