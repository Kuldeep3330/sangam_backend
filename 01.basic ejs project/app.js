// const express = require('express');
// const app = express();

// // Set EJS as view engine
// app.set('view engine', 'ejs');

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.post('/submit', (req, res) => {
//   const { name, message } = req.body;
//   res.render('result', { name, message });
// });

// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });


// const asyncFunction=(cb)=>{
//   console.log('log inside async');

//   setTimeout(()=>{
//     console.log('inside async timeout');
//     cb()
//   },0)
  
// }

// const main=()=>{
//   console.log("start");

//   asyncFunction(()=>console.log("end"))
  
// }

// main()

//pros of callbacks
//1.Asnchronous handling

const asyncFun1=(cb)=>{
  console.log("inside async function 1");
  return new Promise((res, rej)=>{
    setTimeout(() => {
      res({"data":"Worked Successfully"})
    }, 1000);
  })  
}

function greet(name){
  return `hello, ${name}`
}

const asyncFun2=(cb)=>{
  console.log("inside async function 2");
  return new Promise((res, rej)=>{
    setTimeout(() => {
      res({"data":"Worked Successfully"})
    }, 2000);
  })  
}

const asyncFun3=(cb)=>{
  console.log("inside async function 3");
  return new Promise((res, rej)=>{
    setTimeout(() => {
      res({"data":"Worked Successfully"})
    }, 3000);
  })  
}

const main=async()=>{
  console.log("start");
  const start= Date.now()
  console.log(start);
  

  const resp=asyncFun1()
  .then(asyncFun2)
  .then(asyncFun3)
  .then(()=>{
    console.log(Date.now()-start);    
  })  
}

// const main = async () => {
//   console.log("start");
//   const start = Date.now();

//   const resp = await asyncFun1()
//     .then(() => asyncFun2())
//     .then(() => asyncFun3())
//     .then(() => {
//       console.log("All functions done");
//       console.log("Total time:", Date.now() - start, "ms");
//     });
// };



// const main = async () => {
//   console.log("start");
//   const start = Date.now();

//   await asyncFun1();
//   await asyncFun2();
//   await asyncFun3();

//   console.log("All functions done");
//   console.log("Total time:", Date.now() - start, "ms");
// };


// main()


// setTimeout(()=> console.log('A'),0) //A 5

// Promise.resolve() //I
// .then(()=>{
//   console.log('B') //3
//   return new Promise(res=>setTimeout(()=>{
//     console.log('C') //A 6
//     res()    
//   },0))  
// })
// .then(()=>{
//   console.log('D'); //7
  
// })

// //iffe
// (async ()=>{
//   console.log('E'); //1
//   await null; //I
//   console.log('F');  //4
// })();

// console.log('G'); //2
