document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".theme-switch__checkbox").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      document.querySelector(".calc-form").classList.toggle("dark");
      document.getElementById("display").classList.toggle("dark");
      document.querySelectorAll('.input-btn').forEach((inputBtn) => {
        inputBtn.classList.toggle("dark");
      });
    });
  });
  
  