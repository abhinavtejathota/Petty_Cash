document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.opacity = "0.8";
    });

    button.addEventListener("mouseleave", function () {
      this.style.opacity = "1";
    });

    button.addEventListener("click", function () {
      console.log(`Button "${this.textContent}" clicked`);
    });
  });
});
