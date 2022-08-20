import Menu from "./core/Menu.js"
import {$} from "./api/dom.js"
import TopNavBar from "./components/TopNavBar.js";
import MenuSliderTemplate from "./components/MenuSliderTemplate.js"
import {MenuName} from "./constants/constants.js";

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
        new MenuSliderTemplate($espressoMenuSlider, MenuName.espresso ,this.$state);
        this.setSlide(MenuName.espresso)

        const $frappuccinoMenuSlider = $('[data-component="frappuccino-menu-container"]');
        new MenuSliderTemplate($frappuccinoMenuSlider, MenuName.frappuccino ,this.$state)
        this.setSlide(MenuName.frappuccino);

        const $blendedMenuSlider = $('[data-component="blended-menu-container"]');
        new MenuSliderTemplate($blendedMenuSlider, MenuName.blended ,this.$state);
        this.setSlide(MenuName.blended)

        const $teavanaMenuSlider = $('[data-component="teavana-menu-container"]');
        new MenuSliderTemplate($teavanaMenuSlider,MenuName.teavana ,this.$state);
        this.setSlide(MenuName.teavana)
        
        const $desertMenuSlider = $('[data-component="desert-menu-container"]');
        new MenuSliderTemplate($desertMenuSlider, MenuName.desert ,this.$state);
        this.setSlide(MenuName.desert)

        const $topNavBar = $('[data-component="menu-info-bar"]');
        new TopNavBar($topNavBar);


    }

    // 임시방편..
    setSlide (category) {
        
            const slideList = $(`.${category}-slide_list`); 
            const slideLen = document.querySelectorAll(`.${category}-slide-content`).length;
            const slideWidth = 400;
            const slideContents = document.getElementsByClassName(`${category}-slide-content`)
            
            for (let idx = 0; idx < slideContents.length;idx++){
                slideContents[idx].style.width = "100px";
                slideContents[idx].style.height = "400px";
                slideContents[idx].style.display = "table";
                slideContents[idx].style.float = "left";
            }
    
            slideList.style.width = slideWidth * (slideLen) + "px";
        
    }
    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }