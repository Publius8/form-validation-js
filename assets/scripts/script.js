let nameInput = document.querySelector("#name");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let submit = document.querySelector("#submit");
let form = document.querySelector("#form")

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function telephoneCheck(phone) {
    return phone.match(/^\d{10}$/); 
  };
  
  

let inputs = [
    {
        id: "name",
        error: "Please enter name"
    },
    {
        id: "surname",
        error: "Please enter surname"
    },
    {
        id: "phone",
        error: "Please enter phone"
    },
    {
        id: "email",
        error: "Please enter email"
    },
    {
        id: "password",
        error: "Please enter password"
    },
    {
        id: "repeatPassword",
        error: "Please enter same password"
    }
];

function errorMessage(error) {
    return `<span class="errorText">${error}</span>`;
}

submit.addEventListener("click", function(event) {
    event.preventDefault();

    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let inputElement = document.querySelector(`#${input.id}`);
        let labelElement = inputElement.closest("label");
        let errorContainer = labelElement.querySelector(".errorContainer");
        let value = inputElement.value.trim();

        errorContainer.innerHTML = "";

        if (value === '') {
            hasError = true;
            if (errorContainer.children.length === 0) {
                errorContainer.insertAdjacentHTML("beforeend", errorMessage(input.error));
            }
            inputElement.classList.add("errorBorder");
            labelElement.classList.add("errorText");
        } else {
            inputElement.classList.remove("errorBorder");
            labelElement.classList.remove("errorText");
        }
    }

    let emailValue = email.value.trim();
    if (emailValue !== '' && !validateEmail(emailValue)) {
        hasError = true;
        let emailContainer = document.querySelector("#fourthLabel .errorContainer");
        emailContainer.innerHTML = errorMessage("Please enter a valid email");
        email.classList.add("errorBorder");
        document.querySelector("#fourthLabel").classList.add("errorText");
    }

    let password = document.querySelector("#password");
    let repeatPassword = document.querySelector("#repeatPassword");
    let passwordValue = password.value.trim();
    let repeatPasswordValue = repeatPassword.value.trim();

    if (passwordValue !== repeatPasswordValue) {
    hasError = true;
    let repeatPasswordContainer = document.querySelector("#sixthLabel .errorContainer");
    repeatPasswordContainer.innerHTML = errorMessage("Passwords isn't same");
    repeatPassword.classList.add("errorBorder");
    document.querySelector("#sixthLabel").classList.add("errorText");
    }


    let phone = document.querySelector("#phone");
    let phoneValue = phone.value.trim();
    
    if (phoneValue !== '' && !telephoneCheck(phoneValue)) {
        hasError = true;
        let phoneContainer = document.querySelector("#thirdLabel .errorContainer");
        phoneContainer.innerHTML = errorMessage("Please enter a valid phone number");
        alert("Should be 10 numbers");
        phone.classList.add("errorBorder");
        document.querySelector("#thirdLabel").classList.add("errorText");
    } 
    

    if (!hasError) {
        alert("All fields are filled correctly");
        // form.reset();
        location.reload();        
    } else {
        alert("FIll the form");
    }
    
});
