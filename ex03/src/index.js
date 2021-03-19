// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  // Only change code below this line
  myNewPets = ["Bird", "Fish"];
  var firstPet = myNewPets[0];
  var secondPet = myNewPets[1];
  myNewPets.unshift("Lion");
  return myNewPets;
  // Only change code above this line
}
myArrayFunction(myPetsArray);
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
