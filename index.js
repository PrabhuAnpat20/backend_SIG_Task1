const express = require("express");

const app = express();

//to parse the request body
app.use(express.json());


//Books Api Routes: GET, POST, PUT, DELETE
let books = [
    {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        name: "The Alchemist",
    },
    {
        id: 3,
        name: "The Da Vinci Code",
    }

];


app.get("/", (req, res) => {
    
    res.status(200).json({ message: "Hello change this to list of books!" });
})
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong" });
})


// Add other requests GET, POST, PUT, DELETE


app.get('/books',(req,res)=>{
    res.status(200).json({ message: books });
})

app.put('/updateBook',(req,res)=>{
    const {id,name}=req.body;
    
     books=books.map((book)=>{
        if (book.id===Number(id)) {
            book.name=name
        }
        return book
     })
     res.status(200).json({ message: books });
})


app.post('/post',(req,res)=>{
    const {id,name}=req.body;
    let newbook={
        "id":id,
        "name":name
    }
    books.push((newbook))
    res.status(200).json({ message: books });
    })
   
    

app.delete('/deleteBook',(req,res)=>{
    const {id}=req.body
    books=books.map((book)=>{
        if(book.id !=Number(id)){
            return book;
        }
    })
    res.status(200).json({message:books});
})


app.listen(5000, () => {
    console.log(`App is live on: http://localhost:5000`);
});