let _blogBody , currentBlog;
function blogPageloading() {

    //reading Js File
    _blogBody = returnBlog();
    currentBlog = 1;
    if(currentBlog >_blogBody.length){currentBlog=1;}
    displayBlog();
}

function nextBlog(){
    currentBlog++;
    if(currentBlog >_blogBody.length){currentBlog=1;}
    displayBlog();
}
function prevBlog(){
    currentBlog--;
    if(currentBlog < 0){currentBlog=_blogBody.length;}
    displayBlog();
}

function displayBlog(){
    document.getElementById("blogBody").innerHTML = _blogBody.map((post) => {
        if (post.blog_no === currentBlog) {
            if (post.is_image) {
                return (`
            <h3 class="blog-post-title" >${post.title}</h3>
            <p>${post.introdcution}</p>
            <img src="${post.image_location}" width="350px" height="220px" alt="${post.title}" >
            <p>${post.body}</p>
            `)
            }
            else {
                return (`
                <h3 class="blog-post-title">${post.title}</h3>
                <p>${post.introdcution}</p>
                <p>${post.body}</p>
                `)
            }
        }
    }).join("");
}
