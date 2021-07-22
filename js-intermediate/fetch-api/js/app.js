(() => {
    let container = document.querySelector("#container");

    function getByPokedexNum(id) {
        fetch(`https://jsonplaceholder.typicode.com/comments`) // 1
            .then((response) => {
                if (response.status !== 200) {  //  2
                    console.error(`status: ${reponse.status}`);
                    return;
                }
            }).then(data => console.log(data))
            .catch(error => {
                console.error(error);
            });
    }
})();