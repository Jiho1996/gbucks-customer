import Menu from "./core/Menu.js";

export default class Container extends Menu{

    template(){
        return `
        <header id="nav-container" data-component = "menu-info-bar"></header>

        <div data-component ="cafe-introduce-container" class ="introduce-container"></div>
        <div data-component ="cafe-how-to-use-container" class ="how-to-use-container"></div>
        <div id = "Destination">Destination</div>
        <div id = "espresso-container" class ="slide-container" data-component = "espresso-menu-container"></div>
        <div id = "frappuccino-container" class ="slide-container" data-component = "frappuccino-menu-container"></div>
        <div id = "blended-container" class ="slide-container" data-component = "blended-menu-container"></div>
        <div id = "teavana-container" class ="slide-container" data-component = "teavana-menu-container"></div>
        <div id = "desert-container" class ="slide-container" data-component = "desert-menu-container"></div>
        `
    }
}