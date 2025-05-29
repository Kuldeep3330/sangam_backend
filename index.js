// const express= require('express')

// const app=express()

// app.use(expree.json())

// const book=[
//     { "id": 1, "title": "The Silent Forest", "author": "Emily Stone" },
//     { "id": 2, "title": "Echoes of the Past", "author": "James Monroe" },
//     { "id": 3, "title": "Whispers in the Wind", "author": "Lara Bennett" },
//     { "id": 4, "title": "The Last Horizon", "author": "Noah Carter" },
//     { "id": 5, "title": "Tides of Tomorrow", "author": "Sophia Lin" },
//     { "id": 6, "title": "Shadows of the Mind", "author": "Aiden Brooks" },
//     { "id": 7, "title": "The Crimson Pact", "author": "Zara Knight" },
//     { "id": 8, "title": "Beneath the Ashes", "author": "Leo James" },
//     { "id": 9, "title": "Moonlight Sonata", "author": "Isla Morgan" },
//     { "id": 10, "title": "The Forgotten Code", "author": "Ethan Clarke" }
//   ];

//   //get all books

//   app.get('/', (req, res)=>{
//     res.json({
//         message:"welcome to our bookstore app"
//     })

//   })
//   app.get('/books', (req, res)=>{
//     res.json(book)
//   })


// app.listen(3000, ()=>{
//     console.log(`Server running at http://localhost:3000/`);
// })


// const http = require('http')

// const server= http.createServer((req, res)=>{

//   res.writeHead(200, {'content-type':'text/plain'})
//   res.end('Hello node js')
// })

// server.listen(3000, ()=>{
//   console.log(`server is listening on 3000`);
  
// })

// const  http= require('http')

// const server= http.createServer((req, res)=>{
//   const url=req.url
//   if(url==='/'){
//     res.writeHead(200, {"content-type":"text/plain"})
//     res.end('Home page')
//   }else if(url==='/projects'){
//     res.writeHead(200, {"content-type":"text/plain"})
//     res.end('Projects page')
//   }else{
//     res.writeHead(404, {"content-type":"text/plain"})
//     res.end('forbidden page')
//   }

// })


// server.listen(3000, ()=>
//   console.log(`server is on 3000`)  
// )




// console.log('Directory name', path.dirname(__filename));
// const basename= path.extname(__filename)

// const joinedPath= path.join(__dirname, '/','myNameis')
// console.log(joinedPath);

// const resolvePath= path.resolve()
const path= require('path')
const fs = require('fs');
const { log } = require('console');

// const folderPath= path.join(__dirname, "usersData")
// console.log(folderPath);
// const filePath=path.join(folderPath, 'user.json');

// if(!fs.existsSync(folderPath))
// {
//   fs.mkdirSync(folderPath,{recursive:true})
// }

// if(!fs.existsSync(filePath)){
//   fs.writeFileSync(filePath, JSON.stringify({users:[]}, null, 2))
//    console.log('user.json file created successfully.');
// } else {
//   console.log('user.json file already exists.');
// }

const myFolderPath= path.join(__dirname, 'db')
if(!fs.existsSync(myFolderPath)){
  fs.mkdirSync(myFolderPath)
  console.log("myfolderPath created");  
}

const myfilePath= path.join(myFolderPath, 'index.js')
if(!fs.existsSync(myfilePath)){
  fs.writeFileSync(myfilePath,"this file is for db connection")
  console.log('my file created')
}


  
