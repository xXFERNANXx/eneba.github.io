//--------Actividad-1----------------------------------------------------------------------------------------------------------------------------
var openModalBtn = document.getElementById("openModal");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementById("closeModal");
var saveModalBtn = document.getElementById("saveModal");
openModalBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});
saveModalBtn.addEventListener("click", function () {
  var idiomaSelect = document.getElementById("opcionesIdioma");
  var currencySelect = document.getElementById("opcionesMoneda");
  var selectedIdioma = idiomaSelect.options[idiomaSelect.selectedIndex].text;
  var selectedCurrency = currencySelect.options[currencySelect.selectedIndex].text;
  var regionSelect = document.getElementById("opcionesRegion");
  var selectedRegion = regionSelect.options[regionSelect.selectedIndex].text;
  if (selectedRegion === "Mexico") {
    selectedRegion =
      '<img src="https://d3sxshmncs10te.cloudfront.net/icon/premium/png-512/165886.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "España") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/8603/8603600.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "Argentina") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/197/197573.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "Chile") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/197/197586.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "Colombia") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/323/323343.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  openModalBtn.innerHTML = `
      ${selectedRegion} <!-- Aquí se corrigió -->
      ${selectedIdioma} | ${selectedCurrency}
    `;
  modal.classList.add("hidden");
});
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-2----------------------------------------------------------------------------------------------------------------------------
function showDropdownMenu(id) {
    document.getElementById(id).className = "block";
}
function hiddeDropdownMenu(id) {    
    document.getElementById(id).className = "hidden";
}
function showDropdownMenuIntoMenu(idmenu, idCategory) {
    document.getElementById(idmenu).className = "block";
    document.getElementById(idCategory).className = "bg-[#1F0A4D] flex";
}
function hiddeDropdownMenuIntoMenu(idmenu, idCategory) {
    document.getElementById(idmenu).className = "hidden";
    document.getElementById(idCategory).className = "hover:bg-[#1F0A4D] flex";
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-3----------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#container-imgs img');
    images.forEach(image => {
        image.addEventListener('click', function(event) {
            event.preventDefault();
            const ruta = image.getAttribute('src');
            cambiar_imagen(ruta);
        });
    });
});
function cambiar_imagen(imagen_clickeada){
    const imagenesDict = obtener_diccionario();
    let expandida = '';
    if (imagenesDict[imagen_clickeada] != true){
        for (const [key, value] of Object.entries(imagenesDict)) {
            if (value == true){
                expandida = key;
            } 
        }
        const imagenNueva = document.querySelector(`img[src="${imagen_clickeada}"]`);
        const imagenExpandida = document.querySelector(`img[src="${expandida}"]`);
        imagenNueva.src = cambiar_ruta(imagen_clickeada);
        imagenExpandida.src = cambiar_ruta(expandida);
        imagenNueva.id = "true";
        imagenExpandida.id = "false";
    }
}
function cambiar_ruta(ruta){
    let ruta_nueva = ruta.split('.');
    ruta_nueva[1] = ruta_nueva[1] === "1" ? "2" : "1";
    return ruta_nueva.join('.'); 
}
function obtener_diccionario(){
    const imagenesDict = {};
    const images = document.querySelectorAll('#container-imgs img');
    images.forEach(image => {
        const src = image.getAttribute('src');
        let id = image.getAttribute('id');
        id = (id === "true");
        imagenesDict[src] = id;
    });
    return imagenesDict;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-4----------------------------------------------------------------------------------------------------------------------------
/*
document.addEventListener('DOMContentLoaded', (event) => {
    let products = Array.from(document.querySelectorAll('.grid > div'));
    let selectedProducts = [];
    while(selectedProducts.length < 5){
      let randomIndex = Math.floor(Math.random() * products.length);
      let product = products[randomIndex];
      if(!selectedProducts.includes(product)){
        selectedProducts.push(product);
      }
    }
    products.forEach(product => product.style.display = 'none');
    selectedProducts.forEach(product => product.style.display = 'block');
});
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-8----------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const cards = document.querySelectorAll('.card');
    const titles = document.querySelectorAll('.title');
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        titles.forEach((title, index) => {
            const card = cards[index];
            const titleText = title.textContent.toLowerCase();
            const match = titleText.includes(searchText);
            card.style.display = match ? '' : 'none';
        });
    });
});
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-10---------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-11---------------------------------------------------------------------------------------------------------------------------
function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: 200 * direction, behavior: "smooth" });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-13---------------------------------------------------------------------------------------------------------------------------
function desplazarIzquierda() {
    document.querySelector('.slider').scrollBy({ left: -1150, behavior: 'smooth' });
}
function desplazarDerecha() {
    document.querySelector('.slider').scrollBy({ left: 1150, behavior: 'smooth' });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-14---------------------------------------------------------------------------------------------------------------------------
function desplazarIzquierdaTARJETAS() {
    document.querySelector('.slider').scrollBy({ left: -200, behavior: 'smooth' });
}
function desplazarDerechaTARJETAS() {
    document.querySelector('.slider').scrollBy({ left: 200, behavior: 'smooth' });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-16---------------------------------------------------------------------------------------------------------------------------
const cargarmas = document.getElementById("btnMASsss");
const hiddens = document.querySelectorAll("#act18-1, #act18-2, #act18-3, #act18-4, #act18-5, #act18-6, #act18-7, #act18-8, #act18-9, #act18-10, #act18-11");
const arr = [...hiddens];

let hiddenElements = true;

cargarmas.addEventListener("click", () => {
    if (hiddenElements) {
        arr.forEach(element => {
            element.classList.remove("hidden");
        });
        cargarmas.textContent = "Cargar menos";
    } else {
        arr.forEach(element => {
            element.classList.add("hidden");
        });
        cargarmas.textContent = "Cargar más";
    }
    hiddenElements = !hiddenElements;
});

//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-18---------------------------------------------------------------------------------------------------------------------------
var openModalBtn2 = document.getElementById("openModal2");
var modal2 = document.getElementById("myModal");
var closeModalBtn2 = document.getElementById("closeModal");
var saveModalBtn2 = document.getElementById("saveModal");
openModalBtn2.addEventListener("click", function () {
  modal2.classList.remove("hidden");
});
closeModalBtn2.addEventListener("click", function () {
  modal2.classList.add("hidden");
});
saveModalBtn2.addEventListener("click", function () {
  var idiomaSelect = document.getElementById("opcionesIdioma");
  var currencySelect = document.getElementById("opcionesMoneda");
  var selectedIdioma = idiomaSelect.options[idiomaSelect.selectedIndex].text;
  var selectedCurrency = currencySelect.options[currencySelect.selectedIndex].text;
  var regionSelect = document.getElementById("opcionesRegion");
  var selectedRegion = regionSelect.options[regionSelect.selectedIndex].text;
  if (selectedRegion === "Mexico") {
    selectedRegion =
      '<img src="https://d3sxshmncs10te.cloudfront.net/icon/premium/png-512/165886.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "España") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/8603/8603600.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "Argentina") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/197/197573.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "Chile") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/197/197586.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  if (selectedRegion === "Colombia") {
    selectedRegion =
      '<img src="https://cdn-icons-png.flaticon.com/512/323/323343.png" alt="favicon" class="mr-2 w-4 h-4">';
  }
  openModalBtn2.innerHTML = `
      ${selectedRegion} <!-- Aquí se corrigió -->
      ${selectedIdioma} | ${selectedCurrency}
    `;
  modal2.classList.add("hidden");
});
window.addEventListener("click", function (event) {
  if (event.target === modal2) {
    modal2.classList.add("hidden");
  }
});
//-----------------------------------------------------------------------------------------------------------------------------------------------
//--------Actividad-20---------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------