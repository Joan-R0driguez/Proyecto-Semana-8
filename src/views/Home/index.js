import "./styles.css"

const Home = () => {
    const view = `
        <div class="buscador">
            <h1>Buscador</h1>
            <p>Introduce el nombre de un pokemon</p>
            <input type="text" id="buscador-pokemon" placeholder="Nombre de un pokemon aqui">
            <div>
                <a href="#results"><button>Buscar</button></a>
            </div>
        </div>
    `;

    document.addEventListener("click", () => {
        const userSearch = document.getElementById("buscador-pokemon").value;
        localStorage.setItem("userSearch", userSearch);
    });

    return view;
}

export default Home;