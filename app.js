const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "https://cdn.statically.io/gh/Gapp7/trans/main/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="https://www.google.com">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("https://cdn.statically.io/gh/Gapp7/trans/main/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
