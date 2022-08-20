class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  getAddress() {
    return "i live in " + this.address;
  }
}
const test = new Person("Hoi dan it", "Hanoi");
console.log(test);
console.log("check Address", test.getAddress());

class Novel {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  getAuthor() {
    return "Tên tác giả là " + this.author;
  }
}
let myNovel = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Ngọc Ánh");
console.log(myNovel);
console.log(myNovel.getAuthor());
