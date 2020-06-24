const menu = document.querySelector(".sidebar");
const home = document.querySelectorAll(".home");
const burguerButton = document.querySelector("#burger_b");
const closeButton = document.querySelector("#boton-close");
const ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validation)


function menuShow () 
{
    if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active")
        home.classList.remove("is-active")

    } else {
        menu.classList.add("is-active")
        home.classList.add("is-active")
    }
}

function validation(event) {
  if (event.matches) {
      burguerButton.addEventListener("click", menuShow)
      closeButton.addEventListener("click", menuShow)
  } else {
      closeButton.removeEventListener("click", menuShow)
      burguerButton.removeEventListener("click", menuShow)

  }
}

validation(ipad);

const $homes = document.querySelector("#home");
  
const $overlay = document.querySelector("#overlay");
const $modal = document.getElementById("modal");
const $hideModal = document.querySelector("#hide-modal");
const $featuringAlbum = document.querySelector(".featuring-album");
const $featuringAlbumH = document.querySelector(".featuring-album-h");

function showModal() {
  $overlay.classList.add("active");
  $modal.style.animation = "modalIn .8s forwards";
  // home.classList.add("is-active");
  // $homes.classList.add("is-active");
}

$hideModal.addEventListener("click", ()=>{
  $overlay.classList.remove("active");
  $modal.style.animation = "modalOut .8s forwards";
  // home.classList.remove("is-active");
  // $homes.classList.remove("is-active");
})

$featuringAlbum.addEventListener("click", () => {
  showModal();
})

$featuringAlbumH.addEventListener("click", () => {
  showModal();
})
