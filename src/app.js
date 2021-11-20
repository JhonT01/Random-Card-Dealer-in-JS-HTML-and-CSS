/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//defino los arrays del suit y el numero del naipe
let suit = ["♦", "♥", "♠", "♣"];
let card = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

window.onload = function() {
  //write your code here
  console.log("Generando carta");
  printCard(suit, card);
};

function printCard(suit, card) {
  let suit_number = randomSuit();
  let card_number = randomCard();
  let css_class;
  let header_card = document.getElementById("header-card");
  let content_card = document.getElementById("content-card");
  let bottom_card = document.getElementById("bottom-card");

  switch (suit_number) {
    case 0:
      css_class = "diamond";
      break;
    case 1:
      css_class = "heart";
      break;
    case 2:
      css_class = "spade";
      break;
    case 3:
      css_class = "clup";
      break;
  }

  header_card.innerHTML = `<p id="${css_class}">${suit[suit_number]}</p>`;
  content_card.innerHTML = `<p id="${css_class}">${card[card_number]}</p>`;
  bottom_card.innerHTML = `<p id="${css_class}">${suit[suit_number]}</p>`;
}

function randomCard() {
  return Math.floor(Math.random() * 13);
}

function randomSuit() {
  return Math.floor(Math.random() * 4);
}
