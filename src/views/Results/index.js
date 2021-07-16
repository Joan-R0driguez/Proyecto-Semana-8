import getData from "../../utils/getData"
import "./styles.css"

const Results = async() => {

    let userInput = localStorage.getItem("userSearch");

    const pokemon = await getData(userInput);

    const view = `
        <div class="pokecard">
            <section class="sprite">
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
            </section>
            <section class="data-sprites">
                <section class="datos">
                    <h1>Nombre: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                    <p>N°${pokemon.id}</p>
                    <p>Peso: ${pokemon.weight / 10}kg</p>
                    <p>Altura: ${pokemon.height / 10}m</p>
                    ${pokemon.types.map( type => `
                        <p>Tipo: ${type.type.name}</p>
                    `).join("")}
                    <p>Habilidad: ${pokemon.abilities[0].ability.name}</p>
                </section>
                <section class="spritesingame">
                    <img src="${pokemon.sprites.front_default}" alt="">
                    <img src="${pokemon.sprites.back_default}" alt="">
                </section>
            </section>
        </div>
    `
    return view;
}

export default Results;