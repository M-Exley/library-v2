// options button control: see cover, toggle read
export default function optionsFunction() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("dropdown-main")) {
      const closest = e.target
        .closest(".dropdown-main")
        .querySelector(".dropdown-list");
      closest.style.display = "block";
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("dropdown-main")) {
      document.querySelectorAll(".dropdown-list").forEach((dropdown) => {
        dropdown.style.display = "none";
      });
    }
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("dropdown-list")) {
      const closest = e.target
        .closest(".dropdown-main")
        .querySelector(".dropdown-list");
      closest.style.display = "block";
    }
  });

  document.addEventListener("mouseover", function (e) {
    const dropdownMain = e.target.closest(".dropdown-main");

    if (dropdownMain) {
      const dropdownList = dropdownMain.querySelector(".dropdown-list");
      if (dropdownList) {
        dropdownMain.addEventListener("mouseleave", function () {
          dropdownList.style.display = "none";
        });
      }
    }
  });
}
