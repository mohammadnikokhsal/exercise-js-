// loop for:

// for (let i = 1 ; i < 100 ; i += 2){
//     console.log(i);
// }

// for (let c = 0 ; c < 100 ; c += 5){
//     console.log(c);
// }

// for (let i = 0 ; i < 50 ; i+= 3 ){
//     console.log(i);

// }
//  for (let i = 20 ; i > 0 ; i -= 2){
//     console.log(i);
//  }
// for ( let i = 0 ; i < 100 ; i += 7){
//     console.log(i);
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log( sum += numbers[i]);

// }

// let names = ["Ali", "Sara", "Reza", "Mina"];

// for (let i = names.length -1 ; i >= 0 ; i--){
//   console.log(names[i]);
// }

// let cities = ["tehran", "mashhad", "shiraz"];
// let uperCase = [];

// for (let i = 0; i < cities.length; i++) {
//   uperCase.push(cities[i].toUpperCase());
// }
// console.log(uperCase);

// let shab = "In shabi ke migan shab nist, age shabe mese dishab nist";
// for (let i = 0; i < 6; i++) {
//   console.log(shab);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
//   for (let c = 0; c <= 10; c++) {
//     console.log(`${c} * ${i} = ${c * i}`);
//   }
// }

// let num = [1,2,3,4];
// for (let i = 0; i < 1; i++) {
//   console.log(num.reverse());
// }

// از طریق روش زیر میتونیم ایندکس کاراکتر خاص رو داخل یک متن پیدا کنیم
// let shab = "In shabi ke migan shab nist, age shabe mese dishab nist";

// let mmad = []
// function contCharacter(str, chr) {
//   let cont = 0;

//   for (let i = 0; i < shab.length; i++) {

//     if (str[i] === chr) {
// mmad.push(i)
//       cont++;
//     }
//   }
//   console.log(cont);
//   return cont;
// }
// console.log(contCharacter(shab.toLowerCase(), "i"));
// console.log(mmad);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mmad = 0;

// for (let i = 0; i < num.length; i++) {
//   mmad = mmad += num[i];
//   console.log();
// }
// console.log(mmad);

// let star = "******";

// let star2 = "";

// for (let i = 0; i < star.length; i++) {
//   star2 += "*";
//   console.log(star2);
// }

// for (let i = star.length; i > 0; i--) {
// console.log(  star.slice(0 ,i));
// }

//  چالش ضرب
// const user = prompt("type nuuber to multiply");
// for (let i = 0; i <1;i++){
//   for( let c = 0; c <= 10 ;c++){
//     console.log(`${+user} x ${c} = ${+user * c}`);
//   }
// }
// چالش مربع کردن عداد

// const user2 =prompt("add your number ")

// for (let i = 0 ; i < +user2 ; i++){
//   let num  = " "
// for(let d = 0 ; d < +user2 ; d++){
// num+= i + " "
// }
// console.log(num);
// }

// سرچ عدد

// let numbers = [
//   [10, 15, 20],
//   [25, 30, 35],
//   [40, 45, 50],
// ];
// let index = [];
// let user = prompt("say one number between 10 an 50");
// for (let i = 0; i < numbers.length; i++) {
//   let anser = numbers[i].indexOf(+user);

//   index.push(anser);

//   for (let c = 0; c < numbers[i].length; c++) {
//     let anser2 = numbers[i].indexOf(+user);

//     index.push(anser2);
//   }
// }
// console.log(index);

//  while loop :

// let num = 0;
// let i = 0;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }

//   i++;
// }

// const user = prompt("type a number");
// let i = user.length - 1;
// let reversed = "";
// while (0 <= i) {
// reversed +=user[i]
// i--
// }
// console.log(reversed);

// let number= [10, 20, 35, 45, 50, 60, 70];

// let i = 0 ;
// while(i< number.length){
//     if(number[i]>50){
//         console.log(number[i]);
//         break
//     }
//     i++
// }

// while loopas:
// let num = 0 ;

// while(num <= 5){
//     console.log(num);
//     num++
// }

// let userInput = 0;

// while (userInput <= 10) {
//     userInput = prompt("لطفاً عددی بزرگ‌تر از ۱۰ وارد کنید:");
// }
// console.log("عدد مناسب وارد شد:", userInput);

// let num = 0;

// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }

// let karbar;
// let num1 = 0;

// while (true) {
//   karbar = +prompt("type a Positive number (or a negative number to stop):");

//   if (karbar < 0) {
//     break;
//   }

//   num1 += karbar;
// }
// console.log("Oops! You typed a negative number");

// let i =0;

// while (i <= 10){
//     console.log(i);
//     i++
// }

// let c=0;

// while (c <= 10){
//     console.log(c / 2);
//     c++
// }

// for of loops:

// let numbers = [10, 20, 30, 40];

// for(let num of numbers)(
//     console.log(num)
// )

// let word = "JavaScript";

// for (let latter of word ){
//     console.log(latter);
// }

// let names = ["mohammd", "ali", "hasan", " mahadi"];

// for (let i of names) {
//   console.log(i);
// }
// -------------------------------------------------------------------------------------------------------------------------------------------

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum=0;

// for (let num of number) {
//     if (num % 2 === 0) {
//         sum += num;

//     }
// }

// const language = "JavaScript";
// let arr = [];

// for (let rev of language) {
//   arr.push(rev);
// }
// arr.reverse()
// let arrString = arr.join("");
// console.log(arrString);

// let names = ["mohammd", "ali", "hasan", " mahadi", "jam" , "abo"];

// for(let i of names){
//     if(i.length > 4 ){
//         console.log(i);
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------

// ARROW
// FUNCTIONS:

// let add = (a ,b ) => a + b;

// console.log(add(5 , 3));

// let isEven = num => num % 2 ===0;

// console.log(isEven(121496843));

// let numbers = [1, 2, 3, 4];

// let dobale = numbers.map(num=>num * 2 );
// console.log(dobale);

// let numbers = [1, 2, 3];

// numbers.forEach((num, index, arr) => {
//   arr[index] = num * 2;
// });

// console.log(numbers);

// let number = [1, 2, 3, 4];

// number.forEach((num,indexs,arr) => {
//     arr[indexs] =num*2
// })
// console.log(number);
// -------------------------------------------------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num , indexs ,arr)=> arr[indexs] = num*2 );
// console.log(numbers);

// let names = ["Ali", "Reza", "Mohammad", "Sara"];

// names.forEach((i) => console.log(`${i} : ${i.length}`))

// let numbers = [11, 22, 33, 44, 55, 66, 77, 88];

// numbers.forEach((num) => {
//   if(num%2===0){
//     console.log(num);
//   }
// });

// let numbers = [11, 22, 33, 44, 55, 66, 77, 88];
// let evenNumbers = [];

// numbers.forEach((num) => {
//   if (num % 2 === 0) {
//     evenNumbers.push(num);
//   }
// });

// console.log(evenNumbers);



// let sentences = [
//   "JavaScript is awesome",
//   "I love programming",
//   "Coding is fun",
//   "Challenge yourself"
// ];
// let words=[];
// sentences.forEach((sentences)=>{
// let wordSplit =sentences.split(" ");
// wordSplit.forEach((names)=>{
// if(names.length > 5){
// words.push(names)
// }
// })
// })
// console.log(words);
// ---------------------------------------------------------------------------------------------------------------------------------------------
// map:


// let ages = [10, 15, 20, 25, 30]; 

// let newAge = ages.map(age => age*7);
// console.log(newAge);

// let sentences = [
//   "JavaScript is amazing",
//   "I love coding",
//   "Challenges make you stronger"
// ];

// let  sentencesLength = sentences.map(length => length.split(" ").length);

// console.log(sentencesLength);





// let students = ["ali", "REZA", "mOhammaD", "SaRa", "hassan"];


// let uperFirsetLatter = students.map(
//   uper => uper[0].toUpperCase() + uper.slice(1).toLowerCase()
// )
// console.log(uperFirsetLatter);



let names = ["Manoochehr", "Amir", "Vahid"];
function formatName(name) {
  return name.split("")[0].toUpperCase() + name.slice(1);
}

names.map(formatName).forEach(function (name, index) {
  console.log(index + ": " + name);
});


