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
        <div id = "espresso-container" class ="slide-container" data-component = "esspresso-menu-container"></div>
        <div id = "frappuccino-container" class ="slide-container" data-component = "frappuccino-menu-container"></div>
        <div id = "blended-container" class ="slide-container" data-component = "blended-menu-container"></div>
        <div id = "teavana-container" class ="slide-container" data-component = "teavana-menu-container"></div>
        <div id = "desert-container" class ="slide-container" data-component = "desert-menu-container"></div>
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
        
            const slideList = $(`#${category}-slides_list`); 
            const slideLen = document.querySelectorAll(`.slide-content`).length;
            console.log(slideLen)
            const slideWidth = 400;
            const slideMargin = 2;
            slideList.style.width = ((slideWidth + slideMargin) * (slideLen))+ 'px';
            const slideContents = document.getElementsByClassName(`slide-content`)
            console.log(slideContents)
            
            const slideBtnNext = $(`#${category}-slide_btn_next`);
            const slideBtnPrev = $(`#${category}-slide_btn_prev`);

            const slideSpeed = 300;
            
            for (let idx = 0; idx < slideContents.length;idx++){
                
                slideContents[idx].style.width = "400px";
                slideContents[idx].style.height = "300px";
                slideContents[idx].style.float = "left";
                //slideContents[idx].style.flex = 1;
                
            }

            // Copy first and last slide
            // function makeClone(){
            //     for(let i = 0; i<slideLen; i++){
            //         let cloneSlide = slideContents[i].cloneNode(true);
                    
            //         slideList.appendChild(cloneSlide);
            //     }
            //     //updateWidth();
            // }

            // for (let i =0; i<3;i++){
            //     makeClone();
                
            // }
            function slideInterval(){
                return parseInt(slideWidth) + parseInt(slideMargin)
            }
        
            function moveSlide(){
                let slideLocation = 0;
                return( (isRightButton) => {
                    slideList.style.transform = `translateX(-${slideLocation}px)`;
                    
                    if (isRightButton) {
                        if (slideLocation === (slideWidth + slideMargin) * (slideLen - 4) ) return;
                        slideLocation += slideInterval();
                    }

                    if (!isRightButton){
                        if (slideLocation === 0 ) return;
                        slideLocation -= slideInterval();
                     }
                     slideList.style.transform = `translateX(-${slideLocation}px)`;
                })
                slideList.style.transform = `translateX(-${slideLocation}px)`;
                
                // history 1
                    // if (slideList.style.left.includes('px')){
                    //     slideList.style.left = parseInt(slideList.style.left.slice(0, slideList.style.left.length - 2))
                    // }
                    // slideList.style.left += parseInt(slideWidth + slideMargin)
                    // slideList.style.left += 'px'
                    // console.log(slideList.style.left)
                    // return;
                // };

                // history 2
                // if (direction) {
                //     if (slideLocation === (slideWidth + slideMargin) * (slideLen - 4) ) return;
                //     slideLocation += (parseInt(slideWidth) + parseInt(slideMargin))
                //     }

                // if (!direction){
                //     if (slideLocation === 0 ) return;
                //     slideLocation -= (parseInt(slideWidth) + parseInt(slideMargin))
                //  }
                //  slideList.style.transform = `translateX(-${slideLocation}px)`;
                //  console.log(slideList.style.transform);
            }

            const moveSlides = new moveSlide();

            slideBtnPrev.addEventListener('click', () => moveSlides(false))
            
            slideBtnNext.addEventListener('click', () => moveSlides(true))
  
            }       
    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }
    