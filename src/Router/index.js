import Header from "../components/Header";
import Home from "../views/Home";
import Footer from "../components/Footer";
import Results from "../views/Results";

const routes = {
    '': Home,
    '#home': Home,
    '#results': Results,
}


const router = async (route) => {

    const header = document.querySelector("#header");
    header.innerHTML = await Header();
    const footer = document.querySelector("#footer");
    footer.innerHTML = await Footer();

    const content = document.querySelector("#content");
    let render = routes[route] ? routes[route] : Home;
    content.innerHTML = await render();
}

export default router;