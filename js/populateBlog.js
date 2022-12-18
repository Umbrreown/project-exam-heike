let content = document.querySelector(".content");

let cardTitle = document.querySelector(".card-title");

let cardDate = document.querySelector(".card-date");

let cardText = document.querySelector(".card-text");

let blogPosts = JSON.parse(localStorage.getItem("blogPosts")); // to use the local storage data



if (getCurrentURL().includes("index")) {
    for (let i = 0; i < 4; i++) {

        document.querySelector(".carousel-container").innerHTML += `
        
        <li class="carousel">
            <div class="carousel-card">
                <div>

                <a href="pages/post.html?postId=${i}"><h2 class="card-title">${blogPosts[i].title.rendered}</h2></a>

                <h5 class="card-date">${blogPosts[i].date}</h5>

                <p class="card-text">${blogPosts[i].content.rendered.substring(0,255)} ..</p>

                <a href="pages/post.html?postId=${i}"><h3 class="card-link">read more ..</h3></a>


                </div>
            </div>
        </li>
        `;
    };

} else if (getCurrentURL().includes("blog")) {


    for (let i = 0; i < 10; i++) {

        content.innerHTML += `
        
        <div class="card">
            <div class="card-content">

            <a href="post.html?postId=${i}"><h2 class="card-title">${blogPosts[i].title.rendered}</h2></a>

            <h5 class="card-date">${blogPosts[i].date}</h5>

            ${blogPosts[i].content.rendered.substring(0,255) + " ..."}

            <a href="post.html?postId=${i}"><h3 class="card-link">read more ..</h3></a>


            </div>
        </div>

        `;

    }

    if (blogPosts.length > 9) {
    
        document.querySelector(".load-more-posts-btn").style.display = "block";



    };

} else if (getCurrentURL().includes("post")) {
    
    cardTitle.innerHTML = `<h2 class="card-title">${blogPosts[getCurrentURL().slice(-1)].title.rendered}</h2>`;

    cardDate.innerHTML = `<h5 class="card-date">${blogPosts[getCurrentURL().slice(-1)].date}</h5>`;

    cardText.innerHTML = `<p class="card-text">${blogPosts[getCurrentURL().slice(-1)].content.rendered}</p>`;

};

function getCurrentURL () {
    return window.location.href
};

function loadMorePosts () {

    for (let i = 10; i < blogPosts.length; i++) {

        content.innerHTML += `
        
        <div class="card">
        <div class="card-content">

        <a href="post.html?postId=${i}"><h2 class="card-title">${blogPosts[i].title.rendered}</h2></a>

        <h5 class="card-date">${blogPosts[i].date}</h5>

        ${blogPosts[i].content.rendered.substring(0,255) + " ..."}
        
        <a href="post.html?postId=${i}"><h3 class="card-link">read more ..</h3></a>


        </div>
        </div>

        `;

    };

    document.querySelector(".load-more-posts-btn").style.display = "none";
};
