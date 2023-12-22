const ASNYCFUNCTION = async () => {
    let posts = [
        { username: "POST1", body: "This is 1st Post" },
        { username: "POST2", body: "This is 2nd Post" },
    ];

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
            for (let i = 0; i < posts.length; i++) {
              console.log(posts[i]);
            }
            resolve();
          }, 1000);
        });
      }

    function deletePost() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length !== 0) {
            resolve(posts.pop());
            } else {
            reject("Array is Empty.");
            }
        }, 2000);
        });
    }

    let [ creat, delet ,get] =
    await Promise.all([ createPost({ username: "POST3", body: "This is 3rd Post" }), deletePost() , getPost()]);
}

ASNYCFUNCTION().then(() => console.log(`Done`));