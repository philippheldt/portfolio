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
    img1.setAttribute("src", "" + indexObj[i - 1].img1);
  }
}
