var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalActionNo = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // this will overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

// for (var i = 0; i < modalAction.length; i++) {
//   modalAction[i].addEventListener("click", function () {
//     modal.style.display = "none";
//     backdrop.style.display = "none";
//   });
// }

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = "none";
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.classList.remove("open");
  modal.classList.remove("open");
  mobileNav.classList.remove("open");
});

modalActionNo.addEventListener("click", function () {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  backdrop.classList.remove("open");
  modal.classList.remove("open");
});

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});

// custom function
function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  // backdrop.classList.remove("open");
  // modal.classList.remove("open");
}
