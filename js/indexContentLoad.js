function changeContent(indexObj) {
  for (let i = 1; i < indexObj.length + 1; i++) {
    let title = document.querySelector("#title-" + i);
    let text = document.querySelector("#text-" + i);
    let button = document.querySelector("#button-" + i);
    let img1 = document.querySelector("#img1-" + i);

    if (indexObj[i - 1].img2 !== false) {
      let img2 = document.querySelector("#img2-" + i);
      img2.setAttribute("src", "" + indexObj[i - 1].img2);
    }
    if (indexObj[i - 1].img3 !== false) {
      let img3 = document.querySelector("#img3-" + i);
      img3.setAttribute("src", "" + indexObj[i - 1].img3);
    }

    title.innerHTML = indexObj[i - 1].title;
    text.innerHTML = indexObj[i - 1].text;
    button.innerHTML = indexObj[i - 1].button;
    button.setAttribute("onclick", "animateYellow('" + indexObj[i - 1].url + "')");
    img1.setAttribute("src", "" + indexObj[i - 1].img1);
  }
  if (indexObj === webDev) {
    for (let i = 1; i < 7; i++) {
      if (i < 4) {
        let obj1 = document.querySelector(".more-obj-" + i);
        let btn1 = document.querySelector("#m-button-" + i);
        obj1.style.backgroundImage = "url('" + cutter[i - 1].img4 + "')";
        btn1.innerHTML = cutter[i - 1].buttonLabel;
      } else {
        let obj2 = document.querySelector(".more-obj-" + i);
        let btn2 = document.querySelector("#m-button-" + i);
        obj2.style.backgroundImage = "url('" + grafik[i - 4].img4 + "')";
        btn2.innerHTML = grafik[i - 4].buttonLabel;
      }
    }
  } else if (indexObj === grafik) {
    for (let i = 1; i < 7; i++) {
      if (i < 4) {
        let obj1 = document.querySelector(".more-obj-" + i);
        let btn1 = document.querySelector("#m-button-" + i);
        btn1.innerHTML = webDev[i - 1].buttonLabel;
        obj1.style.backgroundImage = "url('" + webDev[i - 1].img4 + "')";
      } else {
        let btn2 = document.querySelector("#m-button-" + i);
        btn2.innerHTML = cutter[i - 4].buttonLabel;
        let obj2 = document.querySelector(".more-obj-" + i);
        obj2.style.backgroundImage = "url('" + cutter[i - 4].img4 + "')";
      }
    }
  } else if (indexObj === cutter) {
    for (let i = 1; i < 7; i++) {
      if (i < 4) {
        let btn1 = document.querySelector("#m-button-" + i);
        btn1.innerHTML = webDev[i - 1].buttonLabel;
        let obj1 = document.querySelector(".more-obj-" + i);
        obj1.style.backgroundImage = "url('" + webDev[i - 1].img4 + "')";
      } else {
        let btn2 = document.querySelector("#m-button-" + i);
        btn2.innerHTML = grafik[i - 4].buttonLabel;
        let obj2 = document.querySelector(".more-obj-" + i);
        obj2.style.backgroundImage = "url('" + grafik[i - 4].img4 + "')";
      }
    }
  }
}
