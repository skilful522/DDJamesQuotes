import img from "./assets/img.png";
import bitch from "./assets/sounds/bitch.mp3";
import blyad from "./assets/sounds/blyad.mp3";
import dontStressMe from "./assets/sounds/dontStressMe.mp3";
import livni from "./assets/sounds/livni.mp3";
import pomoika from "./assets/sounds/pomoika.mp3";
import shit from "./assets/sounds/shit.mp3";
import stfu from "./assets/sounds/stfu.mp3";
import useless from "./assets/sounds/useless.mp3";
import zabeiRot from "./assets/sounds/zabeiRot.mp3";
import spermoi from "./assets/sounds/spermoi.mp3";
import nezaagril from "./assets/sounds/nezaagril.mp3";
import lastGame from "./assets/sounds/lastGame.mp3";
import sKripamiGaming from "./assets/sounds/sKripamiGaming.mp3";
import iFuckedYourRot from "./assets/sounds/iFuckedYourRot.mp3";
import nervnichat from "./assets/sounds/nervnichat.mp3";
import ransheUltani from "./assets/sounds/ransheUltani.mp3";
import chegoTblZdesh from "./assets/sounds/chegoTblZdesh.mp3";

import "./styles.css";

const quotes = {
  bitch,
  blyad,
  dontStressMe,
  livni,
  pomoika,
  shit,
  stfu,
  useless,
  zabeiRot,
  spermoi,
  nezaagril,
  lastGame,
  sKripamiGaming,
  iFuckedYourRot,
  nervnichat,
  ransheUltani,
  chegoTblZdesh,
};

const main = document.querySelector(".main");

const addImage = (quoteText, sound) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const quote = document.createElement("span");
  const audio = document.createElement("audio");

  quote.innerText = quoteText;
  card.className = "card";
  quote.className = "quote";
  image.src = img;
  audio.src = sound;
  card.appendChild(audio);
  card.appendChild(quote);
  card.appendChild(image);
  main.appendChild(card);
};

window.onload = () => {
  Object.keys(quotes).forEach((key) => {
    addImage(key, quotes[key]);
  });
};

main.addEventListener("click", (event) => {
  const selectedCard = event.target.closest("div");

  selectedCard.classList.add("card-clicked");
  const audioElement = selectedCard.children[0];

  audioElement.play();

  audioElement.onended = () => {
    selectedCard.classList.remove("card-clicked");
  };
});
