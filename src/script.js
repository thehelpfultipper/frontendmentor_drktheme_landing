function validateEmail(email) {
  // Regular expression for validating an email address
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

const email = document.querySelector('input[type="email"]');
const btn = document.querySelector(".signupForm .actionBtn");
const feedback = document.querySelector(".email-feedback");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let inputVal = email.value;
  let validate = validateEmail(inputVal);
  
  if (!validate) {
    email.classList.remove("is-valid");
    feedback.classList.remove("visually-hidden");
    email.classList.add("is-invalid");
    feedback.classList.add("invalid-feedback");
  } else {
    email.classList.remove("is-invalid");
    feedback.classList.remove("invalid-feedback");
    feedback.classList.add("visually-hidden");
    email.classList.add("is-valid");
  }
});
