var obj;

fetch("js/subpages/starbucks.json")
  .then((res) => res.json())
  .then((data) => (obj = data))
  .then(() => {
    console.log(obj.articles[0].titleText);
  });
