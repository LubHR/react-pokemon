const baseURL = "https://pokeapi.co/api/v2";

const urls = {
    pokemon: {
        all: '/pokemon',
        byId: (id: string) => baseURL + urls.pokemon.all + "/" +id
    },
}

export {baseURL, urls}