// function emailValidation() {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     if(form.email.value !== form.email_confirm.value) {
//       const element = document.createElement('p')
//       const message = document.createTextNode("Email does not match")
//       form.appendChild(element);
//       element.appendChild(message);
//       element.classList.add("alert");
//       setTimeout(() => {
//         form.removeChild(element)
//       }, 3000)
//     } else {
//       form.submit();
//     }
//   });
// };

const confirmEmailRow = document.getElementById("confirm-email-row");
const emailInput = document.getElementById("email");
const emailConfirmInput = document.getElementById("email_confirm");

const element = document.createElement('p');
const message = document.createTextNode("Email does not match");
element.appendChild(message);
element.classList.add("alert");
confirmEmailRow.insertAdjacentElement("afterend",element);
element.style.display = "none";

function showConfirmation(){
  if(emailInput.value !== emailConfirmInput.value){
    emailConfirmInput.classList.add("error-validation");
    element.style.display = "block";
  }else{
    emailConfirmInput.classList.remove("error-validation");
    element.style.display = "none";
  }
  return emailInput.value === emailConfirmInput.value;
}

emailConfirmInput.addEventListener("input",function(){
  showConfirmation();
});

document.getElementById('form').addEventListener("submit",function(e){
  e.preventDefault();
  if(showConfirmation()){
    this.submit();
  }
});

// window.onload = emailValidation;