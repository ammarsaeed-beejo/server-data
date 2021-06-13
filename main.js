const usersContainer = document.getElementById("all");
var inputVal = document.getElementById("username").value;

fetch("https://reqres.in/api/users/")
    .then(res => res.json())
    .then(function (prom) {
        all.innerHTML = displayUsers(prom.data)
    })

function displayUsers(users) {
    return users.reduce((result, user) => {
        return result += `
        <main class="user" id="all">
        <div id="card">
            <h3 id>${user.first_name} ${user.last_name}</h3>
            <p>
                ${user.email}
            </p>
            <img src="${user.avatar}">
        </div>
        </main>
        `
    }, "");
}


    


alert(inputVal);



