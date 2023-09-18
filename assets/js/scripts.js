
//SHOW/HIDE NAVIGATION BAR
var header = document.getElementById('header');
var mobileMenu = header.querySelector('.mobile-menu-btn');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(){
  var isClosed = header.clientHeight === headerHeight;
    if(isClosed){
      header.style.height = 'auto';
    }else{
      header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var menuItem of menuItems){
  menuItem.onclick = function(event){
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if(isParentMenu){
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  }
}

// FUNTION CHANGE IMAGES FOR SLIDER //
const slider = document.getElementById('slider');
const textHeading = slider.querySelector('.text-heading');
const textDescription = slider.querySelector('.text-description');

// list of images to show in slider
const images = ['./assets/img/slide1.jpg', './assets/img/slide2.jpg', './assets/img/slide3.jpg']; 
// list of text-heading and text-description
const placeNames = ['New York', 'Paris', 'London']; 
const placeTexts = ['The atmosphere in New York is amazing.', 'Thank you, Chicago - A night we cannot forget.', 'We had the best time playing here.']; 

let currentIndex = 0;
function changeImageAndText() {
  // change image and corresponding description
  currentIndex = (currentIndex + 1) % images.length;

  slider.style.backgroundImage = `url('${images[currentIndex]}')`;
  textHeading.textContent = placeNames[currentIndex];
  textDescription.textContent = placeTexts[currentIndex];
}
// set change after each 3 seconds
setInterval(changeImageAndText, 3000);


// FUNCTION TO SHOW/HIDE BUY TICKETS MODAL //
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const closeModal = document.querySelector(".js-modal-close");

//show modal buy ticket
function showBuyModal() {
  modal.classList.add("opened");
}
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyModal);
}

//close modal buy ticket
function closeBuyModal() {
  modal.classList.remove("opened");
}
closeModal.addEventListener("click", closeBuyModal);
modal.addEventListener("click", closeBuyModal);

//stop propagation when user click to class modal-container
modalContainer.addEventListener('click', function (event){
    event.stopPropagation();
});

