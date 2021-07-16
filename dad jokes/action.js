const btn = document.getElementById("getJokes");
const content = document.getElementById("content");
getjoke()
function getjoke() {
  content.textContent = "Loading....";
  fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json(),error=>{content.textContent= "Couldn't connect to the server"})
    .then((res) => {
      content.textContent = res.joke;
    });
}

btn.addEventListener("click", getjoke);
