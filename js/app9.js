const container = document.querySelector(".container");
const coffees = [
  {
    name: "PaseolaGranja_0.8",
    image: "images/coffee91.webp",
	ir: "../pse6/inicio.html"
  },
  {
    name: "PaseolaGranja_0.8",
    image: "images/coffee92.webp",
	ir: "../pse7/inicio.html"
  },
  {
    name: "PaseolaGranja_0.8",
    image: "images/coffee93.webp",
	ir: "../pse8/inicio.html"
  },
  {
    // name: "Qcaffees_0.1",
    image: "images/coffee94.webp",
	ir: "../qcaffees1/inicio.html"
  },
  {
    name: "Qcaffees_0.2",
    image: "images/coffee95.webp",
	ir: "../qcaffees2/inicio.html"
  },
  {
    name: "Qcaffees_0.3",
    image: "images/coffee96.webp",
	ir: "../qcaffees3/inicio.html"
  },
  {
    name: "qcaffees4",
    image: "images/coffee97.webp",
	ir: "../qcaffees4/inicio.html"
  },
  {
    name: "qcaffees5",
    image: "images/coffee98.webp",
	ir: "../qcaffees5/inicio.html"
  },
  {
    name: "qcaffees6",
    image: "images/coffee99.webp",
	ir: "../qcaffees6/inicio.html"
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
