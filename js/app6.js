const container = document.querySelector(".container");
const coffees = [
  {
    name: "icellphone2",
    image: "images/coffee31.webp",
	ir: "../icellphone2/inicio.html"
  },
  {
    name: "icellphone3",
    image: "images/coffee32.webp",
	ir: "../icellphone3/inicio.html"
  },
  {
    name: "icellphone4",
    image: "images/coffee63.webp",
	ir: "../icellphone4/inicio.html"
  },
  {
    name: "icellphone5",
    image: "images/coffee64.webp",
	ir: "../icellphone5/inicio.html"
  },
  {
    name: "kobeca1",
    image: "images/coffee65.webp",
	ir: "../kobeca1/inicio.html"
  },
  {
    name: "kobeca2",
    image: "images/coffee66.webp",
	ir: "../kobeca2/inicio.html"
  },
  {
    name: "kobeca3",
    image: "images/coffee67.webp",
	ir: "../kobeca3/inicio.html"
  },
  {
    name: "LaVictoriana_0.1",
    image: "images/coffee68.webp",
	ir: "../lavictoriana1/inicio.html"
  },
  {
    name: "LaVictoriana_0.2",
    image: "images/coffee69.webp",
	ir: "../lavictoriana2/inicio.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, ir  }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${ir}>Vista</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
