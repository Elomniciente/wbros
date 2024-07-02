const container = document.querySelector(".container");
const coffees = [
  {
    name: "elparamo1",
    image: "images/coffee41.webp",
	ir: "../elparamo1/inicio.html"
  },
  {
    name: "elparamo2",
    image: "images/coffee42.webp",
	ir: "../elparamo2/inicio.html"
  },
  {
    name: "elparamo3",
    image: "images/coffee43.webp",
	ir: "../elparamo3/inicio.html"
  },
  {
    name: "elparamo4",
    image: "images/coffee44.webp",
	ir: "../elparamo4/inicio.html"
  },
  {
    name: " flagor1",
    image: "images/coffee45.webp",
	ir: "../flagor1/inicio.html"
  },
  {
    name: " flagor2",
    image: "images/coffee46.webp",
	ir: "../flagor2/inicio.html"
  },
  {
    name: "flagor3",
    image: "images/coffee47.webp",
	ir: "../flagor3/inicio.html"
  },
  {
    name: "flagor4",
    image: "images/coffee48.webp",
	ir: "../flagor4/inicio.html"
  },
  {
    name: "flagor5",
    image: "images/coffee49.webp",
	ir: "../flagor5/inicio.html"
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
