const express= require('express')
const fs= require('fs')
const path= require('path')

const router= express.Router()

const filePath= path.join(__dirname,'books.json')

const readBooksFromFile = () => {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
      console.log('books.json file created successfully!');
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading books.json:', error);
    return [];
  }
};

 
const writeBooksToFile = (books) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
  } catch (error) {
    console.error('Error writing to books.json:', error);
  }
};



//get all books

  router.get('/', (req, res)=>{
    const books= readBooksFromFile()
    console.log(books);
    
    res.status(200).json(books)

  })

  //get a single book

  router.get('/:id', (req, res)=>{
    const id= parseInt(req.params.id)
    const books= readBooksFromFile()
    const book= books.find(item=>item.id===id)
    res.status(200).json(book)
  })

  // add a new book
  router.post('/',(req, res)=>{
    const books=readBooksFromFile()
    const {title, author}= req.body
    if(!title || !author){
      return res.status(400).json({message:'Title and author are required'})
    }
    const newBook={
      id:books.length>0?books[books.length-1].id+1:1,
      title, 
      author
    }

    books.push(newBook)
    writeBooksToFile(books)
    res.status(201).json(newBook)
  })

  // update a book
  router.put('/:id',(req, res)=>{
    const id= parseInt(req.params.id)
    const {title, author} = req.body
    if(!title && !author){
      return res.status(400).json({message: 'At least one of title or author must needed'})

    }
    const books= readBooksFromFile(); 
    
    const index=books.findIndex(book=>book.id===id)
    if(index===-1){
      return res.status(404).json({message:'Book not found'})
    }

    if(title) books[index].title=title
    if(author) books[index].author=author

    writeBooksToFile(books)

    res.status(200).json(books[index])
  })

  //delete book by id
  router.delete('/:id', (req, res)=>{
    const id= parseInt(req.params.id)

    const books= readBooksFromFile(); 
    
    const index=books.findIndex(book=>book.id===id)
    if(index===-1){
      return res.status(404).json({message:'Book not found'})
    }
    const deleteBook= books.splice(index, 1)[0]
    writeBooksToFile(books)
    res.status(200).json({message:'Book successfully deleted',
      book:deleteBook
    })

  })

module.exports= router

  //delete by id
//   router.delete('/books/:id',(req, res)=>{
//     const id= parseInt(req.params.id)
//     const index=books.findIndex(item=>item.id===id)

//     if(index!=-1){
//         const deleted= books.splice(index, 1);
//         res.json(deleted);
//     }else{
//         res.status(404).json({ message: 'Book not found' });
//     }

//   })


  //clear the books array
//   router.delete('/books', (req, res) => {
//     books.length = 0; 
//     res.json({ message: "All books have been deleted." });
//   });

  