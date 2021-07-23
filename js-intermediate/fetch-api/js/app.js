/* The Fetch API
    - Allows network requests to be made
    - Utilises promises
    - Simpler than XMLHttpRequest(XHR)
*/

(() => {
    let container = document.querySelector("#container");
    
    function simpleFetch() {
        // GET request to an API
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json()) // successful response
            .then(data => { // response promise resolved into JS object called data
                console.log(data);
                
                let element = document.createElement("p");
                element.innerText = data[0].title;
                
                container.appendChild(element);
            }) // chained so we can handle the js object
            .catch(error => console.error(error)) // insuccessful response
            .finally(() => { console.log("All done"); });
    }

    // simpleFetch();

    function fetchPost(id) {
        // provide a target url
        // - provide the id as a path variable/parameter
        // - query parameters look like: com/posts?id=1
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                // check for response OK (200)
                if (response.status !== 200) {
                    console.error(`status: ${response.status}`);
                    return;
                }
                // convert json response into object
                return response.json();
            }).then(data => {
                console.log(data);
            }).catch(error => {
                console.error(error);
            });
    }

    function createPost(post) {
        // provide a target url
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(post)
        }).then((response) => {
            // check for response CREATED (201)
            if (response.status !== 201) {
                console.error(`status: ${response.status}`);
                return;
            }
            // convert json response into object
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error(error);
        });
    }

    function updatePost(post, id) {
        post.id = id; // not required by this api, but the id could be 
                      // required on resources for other apis
        // provide a target url
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            // check for response OK (200)
            if (response.status !== 200) {
                console.error(`status: ${response.status}`);
                return;
            }
            // convert json response into object
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error(error);
        });
    }

    function deletePost(id) {
        // provide a target url
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        }).then((response) => {
            // check for response OK (200)
            if (response.status !== 200) {
                console.error(`status: ${response.status}`);
                return;
            }
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    }

    function Post(title, body, userId) {
        this.title = title;
        this.body = body;
        this.userId = userId;
    }

    // fetchPost(1);
    // createPost(new Post("Test", "A description", 3));
    // updatePost(new Post("Test", "Test description", 43), 1);
    // deletePost(1);

    let fetchDataBtn = document.querySelector("#fetchBtn");
    let simpleFetchBtn = document.querySelector("#simpleFetchBtn");

    fetchDataBtn.addEventListener("click", () => {
        fetchPost(3);
    }, false);

    simpleFetchBtn.addEventListener("click", simpleFetch, false);
})();