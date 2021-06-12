window.addEventListener('load', function() {
   let pilotName = document.getElementById("pilotName");   
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   
   let launchForm = document.getElementById("launchForm");
   let faultyItems = document.getElementById("faultyItems");

   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   // faultyItems.style.visibility= "hidden"

   //Fetching Planetary Data
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
          const missionTarget = document.getElementById("missionTarget");
          missionTarget.innerHTML = `<h2>Mission Destination</h2>
          <ol>
          <li>Name: ${json[0].name}</li>
          <li>Diameter: ${json[0].diameter}</li>
          <li>Star: ${json[0].star}</li>
          <li>Distance from Earth: ${json[0].distance}</li>
          <li>Number of Moons: ${json[0].moons}</li>
          </ol>
          <img src= ${json[0].image} height=250></img>`
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
     

   
   launchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let copilotTest = Number(copilotName.value);
      let pilotTest = Number(pilotName.value);
      let fuelLevelTest = Number(fuelLevel.value);
      let cargoMassTest = Number(cargoMass.value);
  
      
                        //VALIDATIONS
                        //Add an alert to notify the user that all fields are required.
                        
                        //Make sure that the user entered valid info for each of the fields. Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers.
                        // The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers.

      //FOR PILOTTEST
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields required silly!") 
      }else if (isNaN(pilotTest) === false ) {
         alert("Pilot Name entered cannot be a number!")
      //FOR COPILOT
      }else if (isNaN(copilotTest) === false ) {
         alert("Copilot Name entered cannot be a number!")
      //FOR FUEL LEVEL & CARGO MASS
      }else if (isNaN(fuelLevelTest) === true || (cargoMassTest) === true) {
         alert("Fuel Level & Cargo Mass entered must be a number!")
      }else {
         faultyItems.style.visibility= "visible"
         // console.log(faultyItems);
         // not enough fuel & bad cargo
      }if (fuelLevelTest < 10000 && cargoMassTest > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         pilotStatus.innerHTML = `Pilot ${pilotName.calue} is ready for launch.`
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch. `
         fuelStatus.innerHTML = "Fuel level too low for launch."
         cargoStatus.innerHTML = "Cargo mass to high for launch."
         //cargo too heavy
      }else if (cargoMassTest > 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready for launch`
         cargoStatus.innerHTML = "Cargo mass to high for launch."
         //not enough fuel 
      }else if (fuelLevelTest < 10000 ) {
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready for launch`
         fuelStatus.innerHTML = "Fuel Level to low for launch."
      }else {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Pilot ${copilotName.value} is not ready for launch`
      }

   });
   
});