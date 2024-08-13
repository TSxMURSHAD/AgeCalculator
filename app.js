let form = document.querySelector("form");

let showAge = (event) => {
  event.preventDefault();
  const birthDate = new Date(document.querySelector("#dob").value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  let day = today.getDate() - birthDate.getDate();
  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }
  if (age < 0) {
    age = 0;
  }

  let ageDisplay = document.querySelector("#age");
  ageDisplay.innerHTML = `Your AGE is ${age} years`;
};

form.addEventListener("submit", showAge);
