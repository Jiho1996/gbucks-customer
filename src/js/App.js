import Menu from "./core/Menu.js"
import {$} from "./api/dom.js"
import MenuSlider from "./components/MenuSlider.js"
import TopNavBar from "./components/TopNavBar.js";

export default class App extends Menu{
    
    async setup(){
        this.$state = this.$props;
        console.log(this.$state)
        
    }

    template () {
        return `
        <header id="nav-container" data-component = "menu-info-bar"></header>
        <ul id="slides_espresso" data-component = "menu-slider"></ul>
        `
    }

    mount (){
        const $menuSlider = $('[data-component="menu-slider"]');
        new MenuSlider($menuSlider, this.$state);
        const $topNavBar = $('[data-component="menu-info-bar"]');
        new TopNavBar($topNavBar);
        
    }
    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }