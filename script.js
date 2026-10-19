const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const answer = button.parentElement.nextElementSibling;
    answer.hidden = !answer.hidden;
    const icon = button.querySelector("img");

    if (answer.hidden) {
      icon.src = "./assets/images/icon-plus.svg";
    } else {
      icon.src = "./assets/images/icon-minus.svg";
    }    
  });
});