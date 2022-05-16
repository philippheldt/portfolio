function changeContent(indexObj, content) {
  loadData(content);
  if (indexObj === webDev) {
    for (let i = 1; i < 7; i++) {
      if (i < 4) {
        let obj1 = document.querySelector(".more-obj-" + i);
        obj1.style.backgroundImage = "url('" + cutter[i - 1].img4 + "')";
      } else {
        let obj2 = document.querySelector(".more-obj-" + i);
        obj2.style.backgroundImage = "url('" + grafik[i - 4].img4 + "')";
      }
    }
  } else if (indexObj === grafik) {
    for (let i = 1; i < 7; i++) {
      if (i < 4) {
        let obj1 = document.querySelector(".more-obj-" + i);
        obj1.style.backgroundImage = "url('" + webDev[i - 1].img4 + "')";
      } else {
        let obj2 = document.querySelector(".more-obj-" + i);
        obj2.style.backgroundImage = "url('" + cutter[i - 4].img4 + "')";
      }
    }
  } else if (indexObj === cutter) {
    for (let i = 1; i < 7; i++) {
      if (i < 4) {
        let obj1 = document.querySelector(".more-obj-" + i);
        obj1.style.backgroundImage = "url('" + webDev[i - 1].img4 + "')";
      } else {
        let obj2 = document.querySelector(".more-obj-" + i);
        obj2.style.backgroundImage = "url('" + grafik[i - 4].img4 + "')";
      }
    }
  }
}
