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
        <ul id="slides_espresso" data-component = "esspresso-menu-slider"></ul>
        <ul id="slides_espresso" data-component = "frappuccino-menu-slider"></ul>
        <ul id="slides_espresso" data-component = "blended-menu-slider"></ul>
        <ul id="slides_espresso" data-component = "teavana-menu-slider"></ul>
        <ul id="slides_espresso" data-component = "desert-menu-slider"></ul>
        `
    }

    mount (){
        const $esspressoMenuSlider = $('[data-component="esspresso-menu-slider"]');
        new MenuSlider($esspressoMenuSlider, "espresso" ,this.$state);

        const $frappuccinoMenuSlider = $('[data-component="frappuccino-menu-slider"]');
        new MenuSlider($frappuccinoMenuSlider, "frappuccino" ,this.$state);

        const $blendedMenuSlider = $('[data-component="blended-menu-slider"]');
        new MenuSlider($blendedMenuSlider, "blended" ,this.$state);

        const $teavanaMenuSlider = $('[data-component="teavana-menu-slider"]');
        new MenuSlider($teavanaMenuSlider, "teavana" ,this.$state);
        
        const $desertMenuSlider = $('[data-component="desert-menu-slider"]');
        new MenuSlider($desertMenuSlider, "desert" ,this.$state);

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