(() => {
    // variables
    let httpMethod = document.querySelector("#method");
    let url = document.querySelector("#url");
    let id = document.querySelector("#id");
    let title = document.querySelector("#title");
    let body = document.querySelector("#body");
    let submitBtn = document.querySelector("#submitBtn");

    // methods and functions
    let initiateFetch = (options) => {
        if (options.id) options.url = `${options.url}/${options.id}`;

        fetch(options.url, {
            method: options.method,
            headers: 
                options.method === "POST" || options.method === "PUT"
                ? {
                    'Content-type': 'application/json; charset=UTF-8'
                }
                : {},
            body:
                options.title !== null || options.title !== ""
                ? JSON.stringify(options)
                : {}
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(e => console.error(e));
    }

    // listeners and inits
    submitBtn.addEventListener("click", (event) => {
        // prevent default form submission behaviour
        event.preventDefault();
        initiateFetch({
            method: httpMethod.value,
            url: url.value,
            id: id.value,
            title: title.value,
            body: body.value,
        });
    }, false);
})();
