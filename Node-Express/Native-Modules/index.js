const fs = require("fs");
//The above means we have required the module we need

// fs.writeFile("message.txt", "Hello from node js", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// });

fs.readFile('./message.txt', "utf8" , (err, data) => {
    if (err) throw err;
    console.log(data);
  });
