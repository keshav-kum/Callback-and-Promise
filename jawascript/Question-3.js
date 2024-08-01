async function fetchData(url) {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
};


fetchData("https://jsonplaceholder.typicode.com/todos/1");
