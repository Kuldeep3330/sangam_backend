//A Promise represents a value that might be 
// available now, later, or never.

// function fetchData(){
//     return  new Promise((res, rej)=>{
//         setTimeout(()=>res("Data recieved"),2000)
//     })
// }

// fetchData()
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//more complex examples for promises
function fetchUser(){
    return new Promise((res)=>{
        setTimeout(()=>res({id:1, name:"kuldeep"}),1000)
    })
}

function fetchPosts(userId){
    return new Promise((res)=>{
        setTimeout(()=>res(["Post1", "Post2"]), 1000)
    });
}

function fetchComments(post){
    return new Promise((res)=>{
        setTimeout(()=>res(["Nice Post", "Interesting read."]), 1000)
    })
}

//promises chaining

fetchUser()
  .then(user => {
    console.log("User:", user.name);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return fetchComments(posts[0]);
  })
  .then(comments => {
    console.log("Comments on first post:", comments);
  })
  .catch(err => console.error("Error:", err));

  //async await
  async function getUserData(){
    try{
        const user=await fetchUser()
        console.log("User: ", user.name);

        const posts= await fetchPosts(user.id);
        console.log("Post: ", posts);

        const comments= await fetchComments(posts[0]);
        console.log("Comments on first post:", comments);
                
    }catch(err){
        console.log(err);
        
    }
  }
  getUserData()


//async/await is syntactic sugar over Promises
//It allows you to write asynchronous code that
// looks synchronous, improving readability.

// async function getData(){
//     try{
//         const data=await fetchData();
//         console.log("calling async await",data);        

//     }catch(err){
//         console.log(err);        
//     }
// }

// getData();