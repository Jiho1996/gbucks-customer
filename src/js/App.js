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

    //     const $frappuccinoMenuSlider = $('[data-component="frappuccino-menu-container"]');
    //     new MenuSliderTemplate($frappuccinoMenuSlider, MenuName.frappuccino ,this.$state)
    //     //this.setSlide(MenuName.frappuccino);

    //     const $blendedMenuSlider = $('[data-component="blended-menu-container"]');
    //     new MenuSliderTemplate($blendedMenuSlider, MenuName.blended ,this.$state);
    //     //this.setSlide(MenuName.blended)

    //     const $teavanaMenuSlider = $('[data-component="teavana-menu-container"]');
    //     new MenuSliderTemplate($teavanaMenuSlider,MenuName.teavana ,this.$state);
    //     //this.setSlide(MenuName.teavana)
        
    //     const $desertMenuSlider = $('[data-component="desert-menu-container"]');
    //     new MenuSliderTemplate($desertMenuSlider, MenuName.desert ,this.$state);
    //    // this.setSlide(MenuName.desert)

        const $topNavBar = $('[data-component="menu-info-bar"]');
        new TopNavBar($topNavBar);


    }

    // 임시방편..
    setSlide (category) {
        
            const slideList = $(`.${category}-slides_list`); 
            let slideLocation = 0;
            const slideLen = document.querySelectorAll(`.${category}-slide-content`).length;
            const slideWidth = 400;
            const slideMargin = 2;
            slideList.style.width = ((slideWidth + slideMargin) * slideLen) * 5 + 'px';
            const slideContents = document.getElementsByClassName(`${category}-slide-content`)
            
            const slideBtnNext = $(`.${category}-slide_btn_next`);
            const slideBtnPrev = $(`.${category}-slide_btn_prev`);

            const slideSpeed = 300;
            
            for (let idx = 0; idx < slideContents.length;idx++){
                
                slideContents[idx].style.width = "400px";
                slideContents[idx].style.height = "300px";
                slideContents[idx].style.float = "left";
                //slideContents[idx].style.flex = 1;
                
            }

            // Copy first and last slide
            function makeClone(){
                for(let i = 0; i<slideLen; i++){
                    let cloneSlide = slideContents[i].cloneNode(true);
                    
                    slideList.appendChild(cloneSlide);
                }
                //updateWidth();
            }

            for (let i =0; i<3;i++){
                makeClone();
                
            }

            function moveSlide(direction){
                slideList.style.transform = `translateX(-${slideLocation}px)`;
                
                if (direction) {
                    slideLocation += (parseInt(slideWidth) + parseInt(slideMargin))
                        
                    }

                    // if (slideList.style.left.includes('px')){
                    //     slideList.style.left = parseInt(slideList.style.left.slice(0, slideList.style.left.length - 2))
                    // }
                    // slideList.style.left += parseInt(slideWidth + slideMargin)
                    // slideList.style.left += 'px'
                    // console.log(slideList.style.left)
                    // return;
                // };
                if (!direction){
                    if (slideList.style.left.includes('px')){
                        slideList.style.left = parseInt(slideList.style.left.slice(0, slideList.style.left.length - 2))
                    }
                    slideList.style.left -= parseInt(slideWidth + slideMargin)
                    slideList.style.left += 'px'
                    console.log(slideList.style.left, slideWidth + slideMargin)
                    return;

                 }
                 slideList.style.transform = `translateX(-${slideLocation}px)`;
                 console.log(slideList.style.transform);
            }

    

            slideBtnPrev.addEventListener('click', () => moveSlide(0))
            
            slideBtnNext.addEventListener('click', () => moveSlide(1))
  
            }       
    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }
    