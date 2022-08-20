import Menu from "./core/Menu.js"
import {$} from "./api/dom.js"
import TopNavBar from "./components/TopNavBar.js";
import MenuSliderTemplate from "./components/MenuSliderTemplate.js"

export default class App extends Menu{
    
    async setup(){
        this.$state = this.$props;
    }

    template () {
       
        return `
        <header id="nav-container" data-component = "menu-info-bar"></header>
        <div id = "espresso-container" data-component = "esspresso-menu-container"></div>
        <div id = "frappuccino-container" data-component = "frappuccino-menu-container"></div>
        <div id = "blended-container" data-component = "blended-menu-container"></div>
        <div id = "teavana-container" data-component = "teavana-menu-container"></div>
        <div id = "desert-container" data-component = "desert-menu-container"></div>
        `
    }

    mount (){
        const $espressoMenuSlider = $('[data-component="esspresso-menu-container"]');
        //console.log(this.$state)


        
        new MenuSliderTemplate($espressoMenuSlider, "espresso" ,this.$state);

        const $frappuccinoMenuSlider = $('[data-component="frappuccino-menu-container"]');

        new MenuSliderTemplate($frappuccinoMenuSlider, "frappuccino" ,this.$state);

        const $blendedMenuSlider = $('[data-component="blended-menu-container"]');
        new MenuSliderTemplate($blendedMenuSlider, "blended" ,this.$state);

        console.log(document.documentElement.innerHTML)

        const $teavanaMenuSlider = $('[data-component="teavana-menu-container"]');
        new MenuSliderTemplate($teavanaMenuSlider, "teavana" ,this.$state);
        
        
        const $desertMenuSlider = $('[data-component="desert-menu-container"]');
        new MenuSliderTemplate($desertMenuSlider, "desert" ,this.$state);
        

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