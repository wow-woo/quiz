// DOM
const moreForm_form = document.getElementById("more");
const userQue_inp = document.getElementById("user-question");
const userOpt_inp = document.getElementById("user-options");
const opt_fieldset = document.getElementById("opt-fieldset");
const addOpt_btn = document.getElementById("more-option");
const userPic_inp = document.getElementById("user-pick");
const submit_btn = document.getElementById("more-submit");
console.log(moreForm_form);

// trigered by submiting
moreForm_form.addEventListener("submit", function() {
  return false;
});

addOpt_btn.addEventListener("click");

const optNumber = 1;
function moreInput() {
  const putInp = document.createElement("input");
  optNumber++;
  putInp.setAttribute("name", `option${optNumber}`);
  const newOption = opt_fieldset.appendChild(putInp);
}
