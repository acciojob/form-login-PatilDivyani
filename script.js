function getFormvalue() {
    //Write your code here
    var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;

  // Print the first and last name using alert
  alert( firstName + lastName);
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", getFormvalue);
