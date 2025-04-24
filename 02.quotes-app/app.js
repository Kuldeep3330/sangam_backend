const express= require('express')

const app=express()

app.set("view engine", "ejs")
app.use(express.static('public'))

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something exciting, it will keep you motivated."
  ];

app.get('/', (req, res)=>{
    const randomQuote= quotes[Math.floor(Math.random()* quotes.length)];
    res.render("index",{quote:randomQuote})
})


app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");f
    
})