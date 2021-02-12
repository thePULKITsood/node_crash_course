
//  ? should 
//  ! red comment 

//  TODO : orrange comment 

//  this is a comment
// * this is the path directory and we are using this directory 
// * to use and do things with the path of the files / modules  that we use  



console.log("\n");
const path = require('path'); 
// *   we dont have to install it but we have to require it 

// Base file name
console.log(path.basename(__filename) +'\n');


// Directory name
console.log(path.dirname(__filename) +'\n ');


// File extension
console.log(path.extname(__filename) +'\n ');

// Create path object
console.log(path.parse(__filename).base +'\n ');

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html') +'\n' );



// // More examples


// // get the path delimiter base on the current OS Environment
// const platSpec = path.delimiter;

// console.log(platSpec);


// // ge the path format on POSIX : / and Windows : \
// // more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
// const pathformat = path.format({
//   dir: pathjoin,
//   root: pathjoin,
//   base: pathjoin,
//   name: pathjoin,
//   ext: pathjoin,
// });

// console.log(pathformat);


// // get the parent folder director
// const parentDir = path.dirname(__dirname);

// console.log(parentDir);
