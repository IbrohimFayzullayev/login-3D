let btn = document.querySelector(".btn");
let signUp = document.querySelector(".sign_up");
let logIn = document.querySelector(".login");
let arrow = document.querySelector(".arrow");
let check = true;
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (check == true) {
    btn.style.left = "100%";
    signUp.style.transform = `rotateY(0deg)`;
    logIn.style.transform = `rotateY(180deg)`;
    arrow.style.transform = `translate(-50%, -50%) rotate(45deg)`;
    check = false;
  } else {
    btn.style.left = "0%";
    signUp.style.transform = `rotateY(-180deg)`;
    logIn.style.transform = `rotateY(0deg)`;
    arrow.style.transform = `translate(-50%, -50%) rotate(-45deg)`;
    check = true;
  }
});
