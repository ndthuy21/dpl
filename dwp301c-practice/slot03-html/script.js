const themeButton = document.querySelector("#theme-button");
const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDarkMode ? "Doi ve giao dien sang" : "Doi giao dien";
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailInput.value === "") {
    formMessage.textContent = "Hay nhap email truoc khi gui.";
    return;
  }

  formMessage.textContent = "Da nhan thong tin lien he cua ban.";
});
