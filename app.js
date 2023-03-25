// const colors = {
//   fire: "#E69D8D",
//   grass: "#8DD694",
//   electric: "#E7C859",
//   water: "#8DC6E6",
//   ground: "#EFBE85",
//   rock: "#B89D72",
//   fairy: "#EEA1E2",
//   poison: "#A55EB1",
//   bug: "#BDDD7A",
//   dragon: "#8859D5",
//   psychic: "#D053BC",
//   flying: "#C9ADEC",
//   fighting: "#E07F60",
//   normal: "#B1B1B1",
//   ice: "#71D8DE",
//   ghost: "#825F94",
//   dark: "#686868",
//   steel: "#588FA3",
// };

function getPoke() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=36")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const results = data.results;
      for (let i = 0; i <= 36; i++) {
        const address = results[i].url;
        fetch(address)
          .then((response) => response.json())
          .then((data) => {
            const name = data.name;
            const image = data.sprites.front_default;
            const type = data.types[0].type.name;
            // const bg = data.colors;

            const wrapper = document.getElementById("wrapper");
            const wrap = document.createElement("div");
            wrap.id = "wrap";
            wrap.className = type;

            const title = document.createElement("h2");
            title.innerText = `Name: ${name}`;

            const img = document.createElement("img");
            img.src = `${image}`;

            // const bg = document.createElement("colors");
            // bg.src = `${colors}`;

            const gen = document.createElement("h3");
            gen.innerText = `Type: ${type}`;

            wrapper.appendChild(wrap);
            wrap.appendChild(title);
            wrap.appendChild(img);
            wrap.appendChild(gen);
          });
      }
    });
}
