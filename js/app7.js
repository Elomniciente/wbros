const container = document.querySelector(".container");
const coffees = [
  {
    name: "LaVictoriana_0.3",
    image: "images/coffee71.webp",
	ir: "../lavictoriana3/inicio.html"
  },
  {
    name: "LaVictoriana_0.4",
    image: "images/coffee72.webp",
	ir: "../lavictoriana4/inicio.html"
  },
  {
    name: "lazonauni1",
    image: "images/coffee73.webp",
	ir: "../lazonauni1/inicio.html"
  },
  {
    name: "lazonauni2",
    image: "images/coffee74.webp",
	ir: "../bunkervzla1/inicio.html"
  },
  {
    name: "lazonauni3",
    image: "images/coffee75.webp",
	ir: "../bunkervzla1/inicio.html"
  },
  {
    name: " loyal1",
    image: "images/coffee76.webp",
	ir: "../loyal1/inicio.html"
  },
  {
    name: "loyal2",
    image: "images/coffee77.webp",
	ir: "../loyal2/inicio.html"
  },
  {
    name: "loyal3",
    image: "images/coffee78.webp",
	ir: "../loyal3/inicio.html"
  },
  {
    name: "loyal4",
    image: "images/coffee79.webp",
	ir: "../loyal4/inicio.html"
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
