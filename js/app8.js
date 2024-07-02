const container = document.querySelector(".container");
const coffees = [
  {
    name: "Millionbox_0.1",
    image: "images/coffee81.webp",
	ir: "../millionbox1/inicio.html"
  },
  {
    name: "Millionbox_0.2",
    image: "images/coffee82.webp",
	ir: "../millionbox2/inicio.html"
  },
  {
    name: "Millionbox_0.3",
    image: "images/coffee83.webp",
	ir: "../millionbox3/inicio.html"
  },
  {
    name: "Millionbox_0.4",
    image: "images/coffee84.webp",
	ir: "../millionbox4/inicio.html"
  },
  {
    name: "PaseolaGranja_0.1",
    image: "images/coffee85.webp",
	ir: "../pse1/inicio.html"
  },
  {
    name: "PaseolaGranja_0.2",
    image: "images/coffee86.webp",
	ir: "../pse2/inicio.html"
  },
  {
    name: "PaseolaGranja_0.3",
    image: "images/coffee87.webp",
	ir: "../pse3/inicio.html"
  },
  {
    name: "PaseolaGranja_0.4",
    image: "images/coffee88.webp",
	ir: "../pse4/inicio.html"
  },
 
  {
    name: "PaseolaGranja_0.5",
    image: "images/coffee89.webp",
	ir: "../pse5/inicio.html"
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
