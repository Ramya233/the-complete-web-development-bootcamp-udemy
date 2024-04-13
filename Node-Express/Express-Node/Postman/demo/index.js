import express from "express"; 

const app = express();
const port = 3000;

//What should happen when a user is trying to get from our home page
app.get("/", (req, res) => {
   res.send("Hello World");
});
//It comes in from the browser, it hits up a particular path, and we can get hold of it inside the anon fun or send a request back.
//helloworld is sent back from my server
//When we request our home page in that loaction(localhost:3000) and hit enter to go to that loaction, our browser sends the request to our server and because our server is running and listening and it knows how to handle that get request, it sends the piece of text that we see.

app.get("/about", (req, res) => {
    res.send("Hyyiuiujjh");
 });
// endpoints /about or / or /contact - when you send your letter that's equi to the http request.

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});

//port is the port on which we are going to be listening, and as soon as our app is listening on port 3000 and everything is set the callback function is triggred.
//Port is like a door we are listening on - finding the door 3000 that is listening.
//eg: printer is having one door that gets viewed 
//Each port has a different number, different services/hardware/applications/ can tap into a particular port and this way wer can way multiple services running through the same computer without them interfering with each other. So that each one can be listening on different ports.


// netstat -ano | findstr "LISTENING"  - To find what is running on the different ports 

// Cannot GET / - means cannot get the route file/home file

// Hyper text transfer protocal - transfer protocol is a language that allows computers to talk to each other.
//The thought transfer protocal btw humans.

//GET - is used when you want to request the server to get something.
// POST - Sending a resource to the server. eg: when someone signs up to your news letter, their email and their passwords are going to be send to the servers
// PUT - (Update) This is used when you want to replace a resource with something else. 
// PATCH -(Update) You want to patch up a resources. 
// The PUT and PATCH work like amazon return. 1)When amazon sent you a broken bicycle - they can either send you entirely new bicycle(PUT) or They only sent you the functioning wheel(PATCH)
// DELETE -To delete from the server or database.

// You cannot run 2 files on one port, you need to close the running on one file on that port or teminate that port.


//Purpose of our http : is for the client computer to communicate with our server computer.
//we make the http request from the client to the server


//Post request is usually made, by an html from to the server
//The server might perform certain operations on the data sent, like storing it on the database, validating it, etc 