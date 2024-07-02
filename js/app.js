const container = document.querySelector(".container");
const coffees = [
  {
    name: "Los_Treintas",
    image: "images/gif/coffee01.gif",
	ir: "pag1.html"

  },
  {
    name: "Los_Sesentas",
    image: "images/gif/coffee02.gif",
	ir: "pag4.html"
  },
  {
    name: "Los_Noventas",
    image: "images/gif/coffee03.gif",
	ir: "pag7.html"
  },
  
    {
    name: "Los_Treintas",
    image: "images/coffee01.webp",
	ir: "pag1.html"

  },
  {
    name: "Los_Sesentas",
    image: "images/coffee02.webp",
	ir: "pag4.html"
  },
  {
    name: "Los_Noventas",
    image: "images/coffee03.webp",
	ir: "pag7.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, ir }) =>
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
