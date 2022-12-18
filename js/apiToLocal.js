if (!localStorage.getItem("blogPosts")) {

    fetch("https://odinsjourney.flowerpower.me.uk/wp-json/wp/v2/posts?_embed&per_page=20")
    .then(function(resp) {

        return resp.json();

    })

    .then(function(content) {
        localStorage.setItem("blogPosts", JSON.stringify(content));

    });


};


// let blogPosts = JSON.parse(localStorage.getItem("blogPosts")); // to use the data

