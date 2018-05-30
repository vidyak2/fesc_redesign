var energy = [
  {
    name: "Algae",
    description: "Algea Energy description",
    imgSource: "images/algae.png"
  }, {
    name: "Biomass and Biofuels",
    description: "Biomass & Biofuels description",
    imgSource: "images/biomassandbiofuels.png"
  }, {
    name: "Solar",
    description: "Solar Energy description",
    imgSource: "images/solar.png"
  }, {
    name: "Wind",
    description: "Wind Energy description",
    imgSource: "images/electricity.png"
  }, {
    name: "Electric & Power",
    description: "Electric & Power description",
    imgSource: "images/algae.png"
  }, {
    name: "Marine",
    description: "Marine Energy description",
    imgSource: "images/algae.png"
  }, {
    name: "Natural Gas",
    description: "Natural Gas description",
    imgSource: "images/petroleum.png"
  }]




//Call Vue function
var appEnergy = new Vue({
  //What Vue is going to dynamically change
  el: '#appEnergy',
  data: {
    energyitems: energy
  }
})
