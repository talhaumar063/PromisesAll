let posts = [
    { username: "POST1", body: "This is 1st Post" },
    { username: "POST2", body: "This is 2nd Post" },
  ];
  
  const user = {
    username: "abc",
    lastactivitytime: new Date().toISOString(),

  };
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 1000);
    });
  }
  
  function getPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`User: ${user.username} , lastActivityTime: ${user.lastactivitytime}`);
        for (let i = 0; i < posts.length; i++) {
          console.log(posts[i].username);
        }
        resolve();
      }, 1000);
    });
  }
  
  function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length !== 0) {
          resolve(posts.pop().username);
        } else {
          reject("Array is Empty.");
        }
      }, 2000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       user.lastactivitytime = new Date().toISOString();
        resolve(user.lastactivitytime);
      }, 1000);
    });
  }
  
  // Promise.all([
  //   createPost({ username: "POST3", body: "This is 3rd Post" }),
  //   updateLastUserActivityTime()])
  //   .then(() => {
  //     getPost().then(() => {
  //       deletePost()
  //         .then(() => {
  //           console.log("Remaining Post");
  //           getPost();
  //         })
  //         .catch((err) => console.log(err));
  //     });
  //   })
  //   .catch((err) => console.log(err));
try{
  Promise.all([createPost({ username: "POST3", body: "This is 3rd Post" }),getPost(), deletePost(), updateLastUserActivityTime()])
  .then(() => {
    getPost().then(() => {
      deletePost()
    })
  })
}catch(err){
  console.log(err);
}