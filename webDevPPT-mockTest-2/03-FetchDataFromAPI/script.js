const users = document.querySelector("#users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    //console.log(data);
    return (users.innerHTML = data.map((user) => {
      return `
            <div class="w-auto border border-[1px] border-white px-4 py-2">
            <h1>Name: ${user.name}</h1>
            <h1>User Name: ${user.username}</h1>
            <p>Email ${user.email}</p>
            <p>Phone ${user.phone}</p>
            <p>Website ${user.website}</p>
          </div>
            `;
    }));
  });
