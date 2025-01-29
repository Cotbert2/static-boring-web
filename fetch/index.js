// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));


// fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Nuevo post",
//         body: "a body",
//         userId: 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data))


// //fetch api async

// async function fetchAsync() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchAsync();


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let html = "";
    data.forEach(user => {
        html += `
        <li>
            ${user.name}
        </li>
        `;
    });
    document.getElementById("users").innerHTML = html;
})