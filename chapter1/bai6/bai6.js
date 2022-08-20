let text = `Hello World!`;
console.log("string text line 1\n" + "string text line 2");
console.log(`string text line 1
string text line 2`);
let a = 5;
let b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log(`Fifteen is ${a + b}  and\nnot ${2 * a + b}`);
const base_url = "localhost:8080";
const api = "get-user";
const fetch_page = 2;
let pageUrl = `${base_url}/${api}?page=${fetch_page} `;
console.log(pageUrl);
