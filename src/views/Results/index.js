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
                    <h1>Nombre: ${pokemon.name}</h1>
                    <p>Peso: ${pokemon.weight}kg</p>
                    <p>Altura: ${pokemon.height}m</p>
                    ${pokemon.types.map( type => `
                        <p>Tipo: ${type.name}</p>
                    `).join("")}
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