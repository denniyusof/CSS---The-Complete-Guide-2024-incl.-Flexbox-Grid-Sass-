var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");

var modalActionNo = document.querySelector(".modal__action--negative");

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

// for (var i = 0; i < modalAction.length; i++) {
//   modalAction[i].addEventListener("click", function () {
//     modal.style.display = "none";
//     backdrop.style.display = "none";
//   });
// }

backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

modalActionNo.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
