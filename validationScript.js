let inputField = document.getElementById("inputField")
let form = document.getElementById("myForm")
form.addEventListener("submit", function(event){
  let regex = /^[a-zA-Z0-9]*$/
  if (!regex.test(inputField.value)) {
    alert("Submission invalid, must be alphanumeric.")
    event.preventDefault()
  } else {
    alert("Submission confirmed.")
  }
})
      