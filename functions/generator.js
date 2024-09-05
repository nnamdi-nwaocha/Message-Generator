import {
  benefitsOfDispline,
  consequencesOfIndiscipline,
  howToBeDisciplined,
} from "../messages/discipline.js";

function randomNumber() {
  return Math.floor(Math.random() * 30);
}
function generateBenefit() {
  return benefitsOfDispline[randomNumber()];
}
function generateConsequence() {
  return consequencesOfIndiscipline[randomNumber()];
}
function generateTip() {
  return howToBeDisciplined[randomNumber()];
}

export { generateBenefit, generateConsequence, generateTip };
