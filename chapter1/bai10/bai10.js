let user = {}; // a user without "address" property
// console.log(user.address);
// console.log(user.address ? user.address.street : undefined); // Error!
// user.address // undefined
// undefined.props => error
console.log(user?.address?.props ?? "Not found user");

let userAdmin = {
  admin() {
    alert("I am Eric");
  },
};
let userGuest = {};
// userAdmin.admin();
userGuest?.admin?.();

let key = "firstName";
let user1 = {
  firstName: "Hoi Dan IT",
};
let user2 = null;
// alert(user1?.[key]); // Hoi Dan IT
// alert(user2?.[key]); // undefined

// thao tác với object
// obj?.a?.b?.c //undefined

// obj ?. a ?.b ?.c ?? "not found"

// thao tác function
// obj.func?.()
let obj = {
  name: "An",
  chanel: "An Peter",
  address: {
    street: "abc",
    province: "hang bai",
  },
};
console.log(obj?.address?.xyz ?? "Không tồn tại");
const test = undefined;
test?.map?.((item) => item);
