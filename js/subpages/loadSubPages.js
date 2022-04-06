var data;

fetch("starbucks_airlines.json")
  .then((res) => res.json())
  .then((data) => (data = data))
  .then(() => console.log(data));
