function showPokemon(items) {
    const source = document.querySelector('#pokemon-list').innerHTML;
    const template = Handlebars.compile(source);
    const context = { items: items };
    const html = template(context);

    const app = document.querySelector('#app');
    app.innerHTML = html;
}


fetch('https://pokeapi.co/api/v2/pokemon-color/yellow')
    .then(response => response.json())
    .then(json => {
        console.log(Handlebars);
        showPokemon(json.pokemon_species);
    })
    .catch((error) => {
        console.error(error);
    });

module.exports = { showPokemon };