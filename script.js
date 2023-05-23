function getFormvalue() {
    //Write your code here
    let text = document.getElementsByTagName("input");
    let firstName = text[0].value.trim();
    let lastName = text[1].value.trim();

  // Print the first and last name using alert
  alert( firstName +" " + lastName);
}

// let submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", getFormvalue);
