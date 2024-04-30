const form = document.querySelector("form");
const button = document.querySelector(".button");
// TODO: 

// We've gotten you started with t5he customer form submission, but you'll need to make sure both the name and email address are sent properly. 

// createCustomer();


form.addEventListener("submit", function(event){
  event.preventDefault() 
  const cNameInput = document.querySelector("#cname");
  const cEmailInput = document.querySelector("#cemail");
  const custObj = {
    name: cNameInput.value,
    email: cEmailInput.value
  }
  console.log(custObj)
  fetch("/api/customer", {
    method: "POST",
    body: JSON.stringify(custObj),
    headers: { "Content-Type": "application/json" }
  })
  
  .then( resp => resp.json())
  .then( data => {
    console.log(data)

  })
})