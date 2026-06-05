let box = document.querySelectorAll(".box");

box.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.querySelector(".box-b").classList.add("hover-b");
  });

  el.addEventListener("mouseleave", () => {
    el.querySelector(".box-b").classList.remove("hover-b");
  });

  el.addEventListener("click", (e) => {
    const box_info = e.target.closest(".box-b");
    const btnClose = e.target.closest(".close");

    if (btnClose) {
      return box_info.classList.remove("hover-b");
    }

    box_info.classList.add("hover-b");
  });
});
