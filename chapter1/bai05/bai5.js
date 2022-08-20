// const myArray = ["apple", "banana", "orange"];
const myArray = [1, 2, 3, 4];
// const myList = myArray.map((item) => `<p>${item}</p>`);
// bên hàm map là 1 function
// const a = () => {} : nên sử dụng arrow function để ngắn gọn hơn
const myList = myArray.map((item, index) => {
  console.log(item, index);
  return item * 2;
});
console.log(myArray, myList);

// Filter: bộ lọc
const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
const result = ages.filter((item) => {
  console.log(item);
  item > 18;
});
// function checkAdult(age) {
//   return age > 18;
// }
console.log(result);
