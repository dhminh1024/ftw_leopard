// const students = ["tuan", "tan", "Vinh"];

// const ul = document.querySelector("ul");

// // const li = document.createElement("li");
// // li.textContent = "name";
// // ul.appendChild(li);

// // for (let index = 0; index < students.length; index++) {
// //   const name = students[index];
// //   const li = document.createElement("li");
// //   li.textContent = name;
// //   ul.appendChild(li);
// // }

// students
//   .map((name) => name.toUpperCase())
//   .forEach((name) => {
//     const li = document.createElement("li");
//     li.textContent = name;
//     ul.appendChild(li);
//   });

// ul.innerHTML = "";

// const student2 = ["minh", "duy"];
// student2
//   .map((name) => name.toUpperCase())
//   .forEach((name) => {
//     const li = document.createElement("li");
//     li.textContent = name;
//     ul.appendChild(li);
//   });
const ul = document.querySelector("ul");
const btnSearch = document.querySelector("#search");
const inputSearch = document.querySelector("#input-query");

const getGames = async (searchQuery = "") => {
  try {
    const response = await fetch(
      `https://cs-steam-api.herokuapp.com/games?q=${searchQuery}`
    );
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const renderGameList = async (searchQuery = "") => {
  const games = await getGames(searchQuery);
  ul.textContent = "";
  games.forEach((game) => {
    const li = document.createElement("li");
    li.textContent = game.name;
    ul.appendChild(li);
  });
};

renderGameList();

btnSearch.addEventListener("click", () => {
  const searchQuery = inputSearch.value;
  renderGameList(searchQuery);
});
