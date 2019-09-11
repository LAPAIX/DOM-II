//changing the colors of the logo
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function() {
  logo.textContent = "Hello and welcome";
  logo.style.border = "5px solid white";
  logo.style.backgroundColor = "black";
  logo.style.color = "yellow";
});

logo.addEventListener("mouseout", function() {
  logo.textContent = "Fun Bus";
  logo.style.color = "red";
});

//main navigation change color to black
const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("mouseover", function() {
  mainNav.style.border = "1px dotted white";
  mainNav.style.backgroundColor = "black";
  mainNav.style.color = "yellow";
});

const bob = document.querySelector("body");
bob.addEventListener("click", function() {
  bob.style.backgroundColor = "yellow";
});

const main = document.querySelector(".intro");
main.addEventListener("mouseover", function() {
  main.style.backgroundColor = "green";
  main.style.backgroundColor = "lightblue";
});

main.addEventListener("mouseout", function() {
  main.style.backgroundColor = "red";
});

const sign = document.querySelector(".btn");
sign.addEventListener("click", function() {
  sign.style.backgroundColor = "yellow";
});

const stuff = document.querySelectorAll(".text-content");
stuff.addEventListener("focus", function() {
  stuff.style.backgroundColor = "red";
});

sign.addEventListener("click", function() {
  bob.style.backgroundColor = "blue";
});

const re = document.querySelectorAll(".body");
re.addEventListener("scroll", function() {
  re.style.backgroundColor = "black";
});
