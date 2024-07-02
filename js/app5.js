const container = document.querySelector(".container");
const coffees = [
  {
    name: "flagor6",
    image: "images/coffee51.webp",
	ir: "../flagor6/inicio.html"
  },
  {
    name: "flagor7",
    image: "images/coffee52.webp",
	ir: "../flagor7/inicio.html"
  },
  {
    name: "fogononline1",
    image: "images/coffee53.webp",
	ir: "../fogononline1/inicio.html"
  },
  {
    name: "fogononline2",
    image: "images/coffee54.webp",
	ir: "../fogononline2/inicio.html"
  },
  {
    name: "fogononline3",
    image: "images/coffee55.webp",
	ir: "../fogononline3/inicio.html"
  },
  {
    name: " fogononline4",
    image: "images/coffee56.webp",
	ir: "../fogononline4/inicio.html"
  },
  {
    name: "fogononline5",
    image: "images/coffee57.webp",
	ir: "../fogononline5/inicio.html"
  },
  {
    name: "fogononline6",
    image: "images/coffee58.webp",
	ir: "../fogononline6/inicio.html"
  },
  {
    name: "icellphone1",
    image: "images/coffee59.webp",
	ir: "../icellphone1/inicio.html"
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
