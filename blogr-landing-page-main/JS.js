const menuBtn = document.querySelector(".menu-btn");
const menuDiv = document.querySelector(".into-menu-modal");
const menuLinkBtns = document.querySelectorAll(".modal-link");

// Menu button
menuBtn.addEventListener("click", (e) => {
  const childImg = e.target;
  childImg.classList.toggle("open-close-Btn");

  if (childImg.classList.length == 0) {
    childImg.src = "./images/icon-close.svg";
    openModal();
  } else {
    childImg.src = "./images/icon-hamburger.svg";
    closeModal();
  }
});

// Toggle modal links
[...menuLinkBtns].map((item) => {
  item.addEventListener("click", (e) => {
    const insideContainer = item.nextSibling;
    const imgElement = item.childNodes[1];
    insideContainer.classList.toggle("hide-modal");

    if (insideContainer.classList.contains("hide-modal")) {
      imgElement.style.transform = "rotate(0deg)";
    } else {
      imgElement.style.transform = "rotate(180deg)";
    }
  });
});

// Functions for menu modal
function openModal() {
  console.log("modal opened");
  menuDiv.classList.remove("hide-modal");
}

function closeModal() {
  console.log("modal closed");
  menuDiv.classList.add("hide-modal");
}
