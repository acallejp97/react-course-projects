const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

const user = {
  name: "Asier",
  cities: ["Bilbao", "Boiro", "Ourense"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in" + city + "!");
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [5, 6, 8, 2],
  multiplyBy: 20,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
