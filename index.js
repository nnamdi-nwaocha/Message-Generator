import {
  generateBenefit,
  generateConsequence,
  generateTip,
} from "./functions/generator.js";

const messageBoxes = document.getElementsByClassName('message-box')

function unHideMessageBoxes(){
  for (let i = 0; i < messageBoxes.length; i++) {
    messageBoxes[i].style.display = 'flex';
  }
}

function addBenefitMessage(benefit){
  const benefitMessage = document.getElementById('benefit');
  benefitMessage.textContent = benefit;
}

function addConsequenceMessage(consequence){
  const consequenceMessage = document.getElementById('consequence');
  consequenceMessage.textContent = consequence;
}

function addTipMessage(tip){
  const tipMessage = document.getElementById('tip');
  tipMessage.textContent = tip;
}

function addMessages(){
  const benefit = generateBenefit();
  const consequence = generateConsequence();
  const tip = generateTip();
  
  unHideMessageBoxes();
  addBenefitMessage(benefit);
  addConsequenceMessage(consequence);
  addTipMessage(tip);
}

const button = document.getElementById('button');
button.onclick = addMessages;