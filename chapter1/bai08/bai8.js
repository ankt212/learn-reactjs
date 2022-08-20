// const person = {
//   name: "Eric",
//   age: 26,
//   eyeColor: "black",
//   like: "girl",
// };
// old way
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); // 26

//new way: destructuring
const person = {
  name: "Eric",
  age: 26,
  eyeColor: "black",
  like: "girl",
};
const { age, name } = person;
console.log(name); //Eric
console.log(age); //26

const react = ["facebook", "all-in-one", "javascript"];
const [facebook, all_in_one, javascript] = react;
console.log(all_in_one);
//complete this block code to print ‘bugs’
const dev = { salary: 2000, tool: "laptop", like: "bugs" };
const { salary, tool, like } = dev;
console.log(like); //bugs

const city = ["ha noi", "da nang", "sai gon", "ca mau"];
// old way
// const hanoi = city[0];
// const danang = city[1];
// const hcm = city[2];
//With destructuring:
// const [hanoi, danang, hcm] = city;
// When destructuring arrays, the order that variables are declared is important.
// const [hanoi, , , camau] = citys;
