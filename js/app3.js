const container = document.querySelector(".container");
const coffees = [
  {
    name: "dolcenza2",
    image: "images/coffee31.webp",
	ir: "../dolcenza2/inicio.html"
  },
  {
    name: "dolcenza3",
    image: "images/coffee32.webp",
	ir: "../dolcenza3/inicio.html"
  },
  {
    name: "dolcenza4",
    image: "images/coffee33.webp",
	ir: "../bunkervzla4/inicio.html"
  },
  {
    name: "dolcenza5",
    image: "images/coffee34.webp",
	ir: "../dolcenza5/inicio.html"
  },
  {
    name: "dondenacho1",
    image: "images/coffee35.webp",
	ir: "../dondenacho1/inicio.html"
  },
  {
    name: "dondenacho2",
    image: "images/coffee36.webp",
	ir: "../dondenacho2/inicio.html"
  },
  {
    name: "dondenacho3",
    image: "images/coffee37.webp",
	ir: "../dondenacho3/inicio.html"
  },
  {
    name: "dondenacho4",
    image: "images/coffee38.webp",
	ir: "../dondenacho4/inicio.html"
  },
  {
    name: "dondenacho5",
    image: "images/coffee39.webp",
	ir: "../dondenacho5/inicio.html"
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
