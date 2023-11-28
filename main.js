// //Strings
// const myVariable = "Mathmetics";

// //String methods
// console.log(myVariable.charAt(3));
// console.log(myVariable.length);
// console.log(myVariable.indexOf("cs"));
// console.log(myVariable.slice(0,3));//last position not included
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());
// console.log(myVariable.split("t"));



// // //Number

// let myNum = 42;
// let myFloat = 42.0;
// let myString = "42.04abc"

// // console.log(myFloat===myNum);//diff in data types return false on comparison

// // console.log(myString===myNum);
// // //float and num  oth lie in same number datatype


// // //type conversion
// // //if we add a string and a num string wins
// // console.log(myString+myNum);
// // //so we change its type
// // console.log(Number(myString)+myNum);
// // //to convert anything to a num 
// // console.log(Number("76"));
// // console.log(Number("hello"));//this will return NaN ie not a number
// // console.log(Number(true));//return 1
// // console.log(Number(false));//return 0


// //the Number.isInteger() method determines if the value is an integer or not
// console.log(Number.isInteger(myFloat));
// //the Number.parseFloat() method parses an argument and returns a floating point number --> for ex "42.1abc" will convert to 42.1 which will be a floating number
// console.log(Number.parseFloat(myString));
// //the Number.parseInt() method returns an integer
// console.log(Number.parseInt(myString));

// //the Number.toFixed() method allows you to round off a decimal num to the given decimal places and this returns a string not num 
// console.log(Number.parseFloat(myString).toFixed(2));


// //th .toString method returns a string
// console.log(myString.toString());

// //chaining--> to use multiple methods at once
// console.log(Number.parseFloat(myString).toFixed(2).toString());//the .toString eas not needed here bcoz .toFixed methid already return a string data type


//math methods

// console.log(Math.PI);//return value of pi
// console.log(Math.trunc(Math.PI));//removes all the decimals
// console.log(Math.round(5.45));//rounds of  to the nearest integer
// console.log(Math.ceil(3.1));//round the value up
// console.log(Math.floor(3.9));//round the value down
// console.log(Math.pow(2,3));//returns 2 to the power of 3
// console.log(Math.min(4,6,7));//returns the least num
// console.log(Math.max(4,6,7));//returns the largest num
//to gnerate a random num between 1 and 10
// console.log(Math.floor(Math.random()*10)+1);


//write a code thats gonna return a random number from your name
// const name2 = "tribbiani";
// const nameLength = name2.length;
// console.log(name2.charAt(Math.floor(Math.random()*nameLength)));





//conditional statements
// let soup = "chicken noodle soup"
// const customerIsBanned = true
// if (customerIsBanned){
//   console.log(`call 911`);
// }
// else if (soup){
//   console.log(`here is ur ${soup}`);
// }
// else{
//   console.log(`sorrw we are out of that`);
// }

// grade calculator

// let testScore = 67
// let isClgStudent = false;
// if(testScore>=90){
//   console.log("A");
// }
// else if (testScore>=80){
//   console.log("B");
// }
// else if (testScore>=70){
//   console.log("C");
// }
// else if (testScore>=60){
//   //nested if else
//   if(isClgStudent){
// console.log(`u have failed`);
//   }
//   else{
//    console.log(`why did u give the exam`); 
//   }
// }


//rock paper scissors game


// const player1="paper";
// const player2="scissors"
// if(player1===player2){
//   console.log(`its a tie`);
// }

// else if (player1=== "rock"){
//   if(player2==="scissors"){
//     console.log("u win");
//   }
//   else if(player2==="paper"){
//     console.log("u lose");
//   }
// }

// else if (player1=== "scissors"){
//   if(player2==="paper"){
//     console.log("u win");
//   }
//   else if(player2==="rock"){
//     console.log("u lose");
//   }
// }

// else if (player1=== "paper"){
//   if(player2==="scissors"){
//     console.log("u lose");
//   }
//   else if(player2==="rock"){
//     console.log("u win");
//   }
// }



//switch statement

//generate a no btw 1 to 5 using the switch statement

// switch(Math.floor(Math.random()*5)){
//   case(1):console.log(`1`);
//   break;
//   case(2):console.log(`2`);
//   break;
//   case(3):console.log(`3`);
//   break;
//   case(4):console.log(`4`);
//   break;
//   case(5):console.log(`5`);
//   break;
//   default:console.log(`num is bigger than 5`);
// }



//user input
// alert("hello bhai hello")

// let myBoolean =confirm(`ok===true\ncancel===false`)
// console.log(myBoolean);

// let name = prompt(`enter ur name`)
// console.log(name ?? `its blank`);


// let name = prompt(`enter name`)

// if(name){
//   console.log(name.length);
//   console.log(name.trim().length);//rempoves extra spacing
//   console.log(name.trim());
// }
// else{
//   console.log(`no name`);
// }



//loops


// let myNumber = 1;
// while (myNumber<50) {
//   myNumber++;
//   console.log(myNumber);
// }


//dont create an endless loop

//do while loop
// let myNumber = 0;
// do{myNumber++
//   console.log(myNumber);
// }while(myNumber<50);



//for loop
// for(let i =0;i<=50;i++){
//   console.log(i);
// }

// let myName =`pranav`;
// for (i=0;i<myName.length;i++){
//   console.log(myName.charAt(i));
// }





//functions
//TO ADD 2 NUMS
// function sumOp (num1,num2){
//   sum=num1+num2;
//   return sum;
// }
// console.log(sumOp(1,5));


//TO GET USERNAME FROM EMAIL
// function getName(email) {
//   return (email.slice(0,email.indexOf(`@`)))
// }

// console.log(getName(`pranav1160ly@gmail.com`));


//TO GET A NAME IN PROPERCASE
// const nameCase = (name) =>{
//   return name.charAt(0).toUpperCase() +name.slice(1).toLowerCase();
// }
// console.log(nameCase(`pRaNAv`));


// //var let const

// //GLOBAL SCOPE
// var x = 4;
// let y = 5;
// const z = 6;

// //LOCAL SCOPE
// //braces scoped
// {
//   let a = 3;
// }
// //functions scoped
// function name(params) {
//   const b =9;
// }


// function hey(params) {
//   console.log(x,y,z);
// }

// {
//   console.log(x,y,z);
// }



//ARRAY

// const myArray = [];

// //add elements to an array
// myArray[0]=1;
// myArray[1]="pranav";
// myArray[2]=true;

// //refering to an array
// // console.log(myArray);

// //length of an array
// console.log(myArray.length);

// //last element of an array
// console.log(myArray[myArray.length-1]);

// //add elements in array at last
// myArray.push("anime lover")
// console.log(myArray);

// //removing last element of an array;
// myArray.pop();
// console.log(myArray);

// //add  element to the first of an array
// myArray.unshift("japanese")
// console.log(myArray);

// //remove the first element from an array
// myArray.shift();
// console.log(myArray);

// //delete sth from an array and replacing them with undefined
// console.log(myArray);
// delete myArray[1];
// console.log(myArray);

//slicing an array
// const myArray2 =[`A`,`B`,`C`,`D`,`E`,`F`]
// console.log(myArray2.slice(2));//this will retrn a new array starting from element 3

//reverse an array
// const arrayReverse = myArray2.reverse();
// console.log(arrayReverse);

//join an array - to create a string with each elements of the array seperated with commas
// let arrayJoined = myArray2.join();
// console.log(arrayJoined);

// //join 2 arrays
// let a =[1,2,3]
// let b =[4,5,6]
// //method 1
// // let c = a.concat(b)
// // console.log(c);
// //method 2
// let c = [...a,...b];//...is called spread operator
// console.log(c);

// //2D Arrays
// const zooShelfA = ["lion","tiger","elephant"]
// const zooShelfB = ["zebra","deer","bear"]
// const clothesShelfC = ["shirt","pant","gloves"]
// const clothesShelfD = ["panty","bra","frock"];

// //logging items in arrays
// console.log(zooShelfA[2]);
// console.log(clothesShelfD[1]);

// const zooDept = [zooShelfA,zooShelfB];
// const clothesDept = [clothesShelfC,clothesShelfD];

// console.log(zooDept);
// console.log(clothesDept);
// //now suppose we wanna log bra from this 
// console.log(clothesDept[1][1]);//here 1 is for clothesDeptD and another 1 is for the bra

// //to log elephant
// console.log(zooDept[0][2]);//0 for zooShelfA and 2 for elphans position



// //objects
// //key value pairs in curly braces
// const obj1={
//   name:`pranav`,
//   age:42,
//   alive:true,
//   hobbies:[`eat`,`sleep`,`code`],
//   beverage:{
//     morning:`coffee`,
//     evening:`ice tea`
//   },
//   action:function () {
//     return `time for ${this.beverage.evening}`
//   }
// }

// //adding another key value pair to an object
// obj1.bankai=`minazuki`;


// //logging the whole object
// console.log(obj1);

// //logging specific key value pairs
// console.log(obj1.name);
// console.log(obj1.hobbies[1]);
// console.log(obj1.beverage.evening);

// //logging a function
// console.log(obj1.action());;//this is a method(function in an object) used to pull out values from an object



// //we created an obj
// const vehicle ={
//   wheels:4,
//   sound: function (){
//     return`vrrooom`
//   }
// }

// //created another obj by Object.create() method
// const truck = Object.create(vehicle);

// //added a key value pair 
// truck.volume = `loud`;

// //logging truck
// console.log(truck);//only shows volume as key value pair


// console.log(truck.wheels);//logs 4 without showing wheels as a key value pair by help of INHERITENCE
// console.log(truck.sound());


// //changing the inherited key value pair
// truck.sound=function () {
//   return`whoosh`
// }

// console.log(truck.sound());


// //create an object with bands

// const animeType ={
//   romance:`horimiya`,
//   shounen:`one piece`,
//   mind :`death note`,
// }
// //logging names of keys
// console.log(Object.keys(animeType));
// //logging key value pairs of objects
// console.log(Object.values(animeType));


// //suppose we want to write a funcyion that'll log the keys and objects of the object above

// for(let namewa in animeType){
//   console.log(`on ${namewa}
//   its ${animeType[namewa]}`)
//   ;
// } 

// // //destructuring objects
// const {romance,shounen,mind}=animeType;//creating 4 new variables
// console.log(romance);
// console.log(shounen);
// console.log(mind);

// function watchesss(){
//  return `pranav watches ${shounen}` ;
// }

// console.log(watchesss(animeType));

// javascript classees

// a js class is basically
// 1=>a blueprint for creating objects
// 2=>used to define properties and methods for an object
// 3=> use a constructor for defining unique properties


 
// class Player{
//   score=0;
//   start(){
//     console.log(`u started to play`);
//   }
//   Pause(){
//     console.log(`u paused the game`);
//   }
// }
 
// //creating the object with help of class
// //player1 has 1 properties and 2 methods
// const player1 = new Player;
// player1.Pause();
// player1.start();

// //constructor = a special method of a class ,
// //              accepts arguments and assign properties

// //making a student class using constructor method

// class Student {

//   constructor(name,age,gpa){
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }

//   study(){
//     console.log(`${this.name} is studying`);
//   }
// }

// //creating an object using class and assigtning the respective parameters
// const student1 = new Student(`pranav`,18,9.2);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();


// const student2 = new Student(`shivanshu`,19,9.89);

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();



//JSON(javascript object notation
//json is used to send and recieve data.
//json is a text format thats completely language independent.
//meaning json is used to send & recieve data in many languages
//...not just in javascript





