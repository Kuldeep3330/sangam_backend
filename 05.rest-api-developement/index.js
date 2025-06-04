const app= require('./app.js')
const { connectDB } = require('./db/index.js');

const PORT=3000

connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
})
.catch((err)=>{
    console.log("MongoDB connection failed", err);
})


