const express= require('express')

const app=express()

app.use(express.json())

const books=[
    { "id": 1, "title": "The Silent Forest", "author": "Emily Stone" },
    { "id": 2, "title": "Echoes of the Past", "author": "James Monroe" },
    { "id": 3, "title": "Whispers in the Wind", "author": "Lara Bennett" },
    { "id": 4, "title": "The Last Horizon", "author": "Noah Carter" },
    { "id": 5, "title": "Tides of Tomorrow", "author": "Sophia Lin" },
    { "id": 6, "title": "Shadows of the Mind", "author": "Aiden Brooks" },
    { "id": 7, "title": "The Crimson Pact", "author": "Zara Knight" },
    { "id": 8, "title": "Beneath the Ashes", "author": "Leo James" },
    { "id": 9, "title": "Moonlight Sonata", "author": "Isla Morgan" },
    { "id": 10, "title": "The Forgotten Code", "author": "Ethan Clarke" }
  ];

  //get all books

  app.get('/', (req, res)=>{
    res.json({
        message:"welcome to our bookstore app"
    })

  })
  app.get('/books', (req, res)=>{
    res.json(books)
  })

  app.get('/books/:id', (req, res)=>{
        const bookId=req.params.id
        console.log(bookId);
        
        const mybook = books.find(item=> item.id===parseInt(bookId))
        console.log(mybook);
        
        if(mybook){
            res.status(200).json(mybook)            
        }else{
            res.status(404).json({message:"book not found"})
        }
  })

  app.post('/books', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1; 
    books.push(newBook)
    res.status(201).json(books);
  });

  //update a book
  app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book= books.find(item=> item.id===id)
    console.log(book);
    
    if(!book){
        res.status(404).json({message:"book not found"})
    }
    book.title=req.body.title
    book.author=req.body.author    
    res.status(202).json(book);
  });

  //delete by id
  app.delete('/books/:id',(req, res)=>{
    const id= parseInt(req.params.id)
    const index=books.findIndex(item=>item.id===id)

    if(index!=-1){
        const deleted= books.splice(index, 1);
        res.json(deleted);
    }else{
        res.status(404).json({ message: 'Book not found' });
    }

  })

  //clear the books array
  app.delete('/books', (req, res) => {
    books.length = 0; 
    res.json({ message: "All books have been deleted." });
  });
  
app.listen(3000, ()=>{
    console.log(`Server running at http://localhost:3000/`);
})
