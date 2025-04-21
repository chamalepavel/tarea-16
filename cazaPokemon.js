const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i] === 'Yoshi') {
        continue;
    }
    console.log(`¡Atrapaste un ${pokemonList[i]}!`);
}
