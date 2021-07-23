(() => {
    // variables
    let httpMethod = document.querySelector("#method");
    let url = document.querySelector("#url");
    let id = document.querySelector("#id");
    let title = document.querySelector("#title");
    let body = document.querySelector("#body");
    let submitBtn = document.querySelector("#submitBtn");
    let userId = document.querySelector("#userId");

    // methods and functions
    function Post(title, body, userId) {
        this.title = title;
        this.body = body;
        this.userId = userId;
    }

    let fetchWithoutBody = (options) => {
        if (options.id) options.url = `${options.url}/${options.id}`;

        fetch(options.url, {
            method: options.method
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            // append a table to the dom with the returned data
        }).catch(e => console.error(e));
    }

    let fetchWithBody = (options) => {
        if (options.id) options.url = `${options.url}/${options.id}`;

        fetch(options.url, {
            method: options.method,
            headers:{
                    'Content-type': 'application/json; charset=UTF-8'
            },
            body:
                JSON.stringify(new Post(options.title, options.body, options.userId))
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            // append data to the dom
        }).catch(e => console.error(e));
    }

    // listeners and inits
    submitBtn.addEventListener("click", (event) => {
        // prevent default form submission behaviour
        // event.preventDefault(); // or set the buttons type to button in this case
        console.log(event.target);

        // modify style
        // event.target.style = "background-color: blue; display: none;";
        // modify classes
        event.target.className = "some-class";

        let options = {
            method: httpMethod.value,
            url: url.value,
            id: id.value,
            title: title.value,
            body: body.value,
            userId: userId.value
        };

        if (options.method === "GET" || options.method === "HEAD") {
            fetchWithoutBody(options);
        } else {
            fetchWithBody(options);
        }
    }, false);
})();
