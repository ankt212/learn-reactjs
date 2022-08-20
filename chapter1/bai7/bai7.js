const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
const numbersCombined = [...numbersTwo, ...numbersOne];
console.log(numbersCombined);
// [1,2,3,4,5,6]
let myArr = ["Peter", "An", "React"];
// myArr.push("new item");
myArr = [...myArr, "new item"];
console.log(myArr);
const test = { name: "An", address: "Hà Đông" };
console.log({ ...test });

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};
const update = { ...myVehicle, ...updateMyVehicle };
console.log(update);

const state = {
  name: "An",
  age: 23,
  address: "hanoi",
};
const s2 = { ...state, age: 24 };
console.log(s2);

const arrayOne = ["a", "b", "c"];
const arrayTwo = [1, 2, 3];
const arraysCombined = [...arrayOne, ...arrayTwo];
console.log(arraysCombined);
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output: 6
