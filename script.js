// Write your JavaScript code here!
window.addEventListener("load", function () {
   console.log('window loaded');






   let launchStatusCheck = document.getElementById("launchStatusCheck");
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(fuelInput.value) === true || isNaN(cargoInput.value) === true || isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
         alert("Please enter valid information");
         event.preventDefault();
      }

   });
   

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
