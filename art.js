"use strict";

// document.addEventListener("DOMContentLoaded", start);

const art1 = document.querySelector("#artwork1");
const art2 = document.querySelector("#artwork2");
const art3 = document.querySelector("#artwork3");
const art4 = document.querySelector("#artwork4");
const art5 = document.querySelector("#artwork5");
const art6 = document.querySelector("#artwork6");
const art7 = document.querySelector("#artwork7");
const art8 = document.querySelector("#artwork8");
const art9 = document.querySelector("#artwork9");

// 1

for (let i = 100; i <= 300; i += 20) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  art1.appendChild(div);
}

// 2

for (let i = 0; i <= 90; i += 10) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.transform = `rotate(${i}deg)`;
  art2.appendChild(div);
}

// 3

for (let i = 0; i <= 200; i += 10) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  art3.appendChild(div);
}

// 4

for (let i = -90; i <= 90; i += 20) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.transform = `translate(${i}px, ${i}px)`;
  art4.appendChild(div);
}

// 5

for (let i = 1; i < 512; i *= 2) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  art5.appendChild(div);
}

// 6 translate x-50 and rotate*4

for (let i = -20; i < 45; i += 5) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.transform = `translate(${i - 50}px)` + `rotate(${i * 4}deg)`;
  //   div.style.transform = `rotate(${i * 4}deg)`;
  art6.appendChild(div);
}

// 7 translate x and -y/2

for (let i = 0; i <= 200; i += 10) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  div.style.transform = `translate(${i}px, ${-i / 2}px)`;
  art7.appendChild(div);
}

// 8 translate x/2 and rotate

for (let i = 50; i <= 200; i += 10) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  div.style.transform = `translate(${i / 2}px)` + `rotate(${i}deg)`;
  art8.appendChild(div);
}

// 9

for (let i = 50; i <= 200; i += 30) {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  art9.appendChild(div);
}

for (let i = 50; i <= 200; i += 30) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.width = `${i}px`;
  div.style.height = `${i}px`;
  art9.appendChild(div);
}
