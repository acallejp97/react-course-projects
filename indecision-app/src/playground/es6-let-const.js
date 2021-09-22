var nameVar = "Asier";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Asier Callejo";
let firstName = fullName.split(" ")[0];

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);