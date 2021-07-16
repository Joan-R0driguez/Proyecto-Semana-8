import pokedex from "../../assets/img/pokedex.png";
import "./styles.css"

const Header = () => {
    const view = `
        <a href="#home">
            <div class="logo">
                <img src="${pokedex}" alt="Imagen de una pokedex">
                <h2>Pokedex.com</h2>
            </div>
        </a>    
        <div class="contactenos">
            <a href="">Contactenos</a>
        </div>
    `
    return view;
};

export default Header;