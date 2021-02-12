const fs = require("fs");
const path = require("path");

// Create folder
//   * rhis file making is a synchrous by nature means i have to give
//  * function as an input and that function will run after the operation in the 
//   * calling function is over -- remember the event loop and why we use call back func in js 

// basically 
// the thing is that we run js on a single thread and when we know that some funvtion will take 
// a lot of time to complete its job like i/o operation so we give the function a call back function 

// what that does is when the function finishes its job then the callback function get in the evet loop 
// and the event loop takes in processes form hte event queue when the stack is empty

// so basically when we know a function will take a lot of time then we put a call back function with it 
// and when the the function has finished Its job the callback function is put into a eventqueue to get executed 
// then when the Tak is completely empty the event loop runs and it checks Q if there is something in the event queue
//  the event loop process that process into the event stacks it execution And this happens till the end does we achieve 
//  the thing that you want to achieve by  java script 


// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {

//     if (err) throw err;

//     console.log("Folder created...");

// });



// // Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');
    

//     // File append  
//     // ! as this is asynchronus so we put the file append method in the call back 
//     //  coz the append method must run only after the file has been created 
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Node.js',
//       err => {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     );
//   }
// );

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
 
// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'), // here we are unng path to get the path of the file 
                      // it is a good practice as through this we will be getting path on different type of naming 
                      //   convention on different pcs --  we can use the other path also 
                      // which is quite simple 
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
);

// // WRITE THE FOLLOWING USERS NAME IN  A FILE  AND THEN DISPLAY THEM
// const users = [
//   { name: "Kaddy" },
//   { name: "Marc" },
//   { name: "Prince" },
//   { name: "Kally" }
// ]

// // create folder
// fs.mkdir(path.join(__dirname, "/data"), {}, err => {
//   if (err) throw err;

//   console.log("Folder created ...");

//   // create file and write json data
//   fs.writeFile(path.join(__dirname, "/data", "name.json"), JSON.stringify(users), err => {
//     if (err) throw err;

//     console.log("File created and data written ...")

//     //read file
//     fs.readFile(path.join(__dirname, "/data", "name.json"), "utf8", (err, users) => {
//       if (err) throw err;

//       // display user name
//       JSON.parse(users).forEach(user => {
//         console.log(user.name);
//       });

//       // display successful message
//       console.log("Users name displayed ...")

//       // rename the file
//       fs.rename(path.join(__dirname, "/data", "name.json"), path.join(__dirname, "/data", "users.json"), err => {
//         if (err) throw err;

//         // display successful message
//         console.log("File rename completed ...");
//       });

//     });
//   });
// })

// // delete a folder
// // NOTE : you must create a folder named "myFolderToDelete".
// // NOTE : myFolderToDelete must be an empty folder.
// fs.rmdir(path.join(__dirname, "/myFolderToDelete"), (err) => {
//   if (err) throw err;

//   console.log("Folder deleted ...");
// });

// // Read the contents of a folder
// // NOTE: the first argument can be whatever route you want, it doesn't have to be the actual dirname.
// fs.readdir(__dirname, (err, files) => {
//   if (err) throw err
//   console.log(files)
// })

// // Copy a file
// fs.copyFile('source.txt', 'destination.txt', err => {
//   if (err) throw err;
//   console.log('File copied...')
// })
