function nameOfStaffs(arg1, arg2) {
  for (let i = 0; i < arg2.length; i++) {
    console.log(arg1[i] + " " + arg2[i]);
  }
}
nameOfStaffs(
  ["fisayo", "dami", "kenny", "john", "tobi", "chris"],
  ["A", "B", "C", "D", "E", "F"]
);

// //
// var someObj = {
//     propName: "John"
//   };
//   function propPrefix(str) {
//     var s = "prop";
//     return s + str;
//   }
//   var someProp = propPrefix("Name");
//   console.log(someObj[someProp]);

// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };

//   // Only change code below this line

//   var playerNumber=16;       // Change this line
//   var player = testObj[playerNumber];
//    // Change this line
// console.log(player);

var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    topdrawer: {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
let h = ourStorage.cabinet.topdrawer.folder2;
let j = ourStorage.desk.drawer;
console.log(h);
console.log(j);
