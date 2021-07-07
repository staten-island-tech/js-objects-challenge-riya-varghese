/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated:false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
}; */

//homer ex
/* const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge",
            age: 32;
        },
        son: {
            name: "Bart",
            age: 10;
        }
    },
    pets: ["cat", "dog"]
};

Homer.family.daughter = {
    name: "Lisa",
    age: 8
}; */

//destructuring
/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated:false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
};

const { name } = Riya;
const calc = {
    add: function() {
        return x + y;
    }
};
const { add, divided, cosine } = calc;

const Angel = Riya;//this isn't a copy,its a refence(adds onto the previus one)
Angel.name = "Angel";//changes name from riya to angel
*/
 //Challenge Questions
 /*
const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  1) Filter all presidents, leaving only the Democratic ones
  const Dems = presidents.filter(president => president.party === "D");
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
 const republicansOne = presidents.filter(presidents => presidents.party === "R"),
 filter(presidents => presidents.terms === 1);
  //3) return only the last three presidents
        //const last = [9, 10, 11];
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
   const D2 = presidents.filter(president => president.party === "D").filter(president => president.terms === "2");
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
    if(president.name === "Lyndon Johnson" && presidnet.terms === "2"){
        console.log("two terms")
    } else(){
        console.log("one term")
     */
     //const header = document.querySelector(".header");
/* const items = document.querySelectorAll(".list-item");

const itemsArr = Array.from(items);

itemsArr.forEach((element) => (element.style.backgroundColor = "red")); */

//const header = document.querySelector("#Idheader");

/* const header = document.getElementById("Idheader");

const toggle = document.querySelector(".toggle"); */

//header.classList.add("Karen");

//header.classList.remove("Karen");

/* toggle.addEventListener("click", function () {

header.classList.toggle("Karen");

});

*/

//button click change background to red

//button click change background to blue

/* 
const background = document.querySelector(".background");

const button = document.querySelector(".button");

const headerTwo = document.querySelector(".header-two"); */

/* button.addEventListener("click", function () {

if (background.style.backgroundColor !== "rgb(255, 0, 0)") {

background.style.backgroundColor = "rgb(255, 0, 0)";

headerTwo.textContent = "Red";

} else {

background.style.backgroundColor = "rgb(0, 0, 255)";

headerTwo.textContent = "Blue";

}

});

*/

///3 numbers for R G and B

//get random number, make random number usable

/* 
button.addEventListener("click", function () {

const R = Math.floor(Math.random() * 255); //scoped variable

const G = Math.floor(Math.random() * 255);

const B = Math.floor(Math.random() * 255);

background.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;

headerTwo.textContent = `rgb(${R}, ${G}, ${B})`;

});
 */