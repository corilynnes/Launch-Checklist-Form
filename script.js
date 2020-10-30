window.addEventListener("load", function () {
   console.log('window loaded');

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let missionTarget = document.getElementById("missionTarget");

         let destination = "";
         let planet = json[Math.floor(Math.random() * json.length)];
         destination = `<h2>Mission Destination</h2>
         <ol>
         <li>Name: ${planet.name}</li>
         <li>Diameter: ${planet.diameter}</li>
         <li>Star: ${planet.star}</li>
         <li>Distance from Earth: ${planet.distance}</li>
         <li>Number of Moons: ${planet.moons}</li>
         </ol>
         <img src="${planet.image}">`;

         missionTarget.innerHTML = destination;
      });
   });

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


      if (isNaN(fuelInput.value) === false && isNaN(cargoInput.value) === false && isNaN(pilotInput.value) === true && isNaN(copilotInput.value) === true) {
         event.preventDefault();


         let launchStatus = "green";
         let launchStatusUpdate = "Shuttle Is Ready For Launch";
         let faultyItemsStatus = "faultyItemsShow";
         let fuelStatus = "Fuel level high enough for launch";
         let cargoStatus = "Cargo mass low enough for launch";

         if (Number(fuelInput.value) < 10000) {
            launchStatus = "red"
            launchStatusUpdate = "Shuttle Is Not Ready For Launch"
            faultyItemsStatus = "faultyItemsShow"
            fuelStatus = "Fuel level not high enough for launch";
         }

         if (Number(cargoInput.value) > 10000) {
            launchStatus = "red"
            launchStatusUpdate = "Shuttle Is Not Ready For Launch"
            faultyItemsStatus = "faultyItemsShow"
            cargoStatus = "Cargo mass too high for launch";
         }


         let requirements = "";
         requirements = `<h2 id=${launchStatus}>${launchStatusUpdate}</h2>
      <div id=${faultyItemsStatus}>
          <ol>
              <li id="pilotStatus">Pilot ${pilotInput.value} Ready</li>
              <li id="copilotStatus">Co-pilot ${copilotInput.value} Ready</li>
              <li id="fuelStatus">${fuelStatus}</li>
              <li id="cargoStatus">${cargoStatus}</li>
          </ol>
      </div>`

         console.log(requirements);
         launchStatusCheck.innerHTML = requirements;
      }
   });
});