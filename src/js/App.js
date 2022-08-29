import Menu from "./core/Menu.js"
import {$} from "./api/dom.js"
import TopNavBar from "./components/TopNavBar.js";
import MenuSliderTemplate from "./components/MenuSliderTemplate.js"
import {MenuName, SlideSize} from "./constants/constants.js";
import CafeIntroduce from "./components/CafeIntroduce.js";
import { HowToUse } from "./components/HowToUse.js";

export default class App extends Menu{
    
    async setup(){
        this.$state = this.$props;
    }

    template () {
       
        return `
        <header id="nav-container" data-component = "menu-info-bar"></header>

        <div data-component ="cafe-introduce-container" class ="introduce-container"></div>
        <div data-component ="cafe-how-to-use-container" class ="how-to-use-container"></div>
        <div id = "Destination">Destination</div>
        <div id = "espresso-container" class ="slide-container" data-component = "esspresso-menu-container"></div>
        <div id = "frappuccino-container" class ="slide-container" data-component = "frappuccino-menu-container"></div>
        <div id = "blended-container" class ="slide-container" data-component = "blended-menu-container"></div>
        <div id = "teavana-container" class ="slide-container" data-component = "teavana-menu-container"></div>
        <div id = "desert-container" class ="slide-container" data-component = "desert-menu-container"></div>
        
        `
    }

    mount (){
        const $cafeIntroduce = $('[data-component="cafe-introduce-container"]');
        new CafeIntroduce($cafeIntroduce);

        const $howtousecafe = $('[data-component="cafe-how-to-use-container"]');
        new HowToUse($howtousecafe);

        const $espressoMenuSlider = $('[data-component="esspresso-menu-container"]');
        new MenuSliderTemplate($espressoMenuSlider, MenuName.espresso ,this.$state);
        this.setSlide(MenuName.espresso);

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

        const moveToSelectRegion = () => {
            $(".nav-container").addEventListener("click", (event) => {
            event.preventDefault()
            if (event.target.innerText === "About"){
                $('.introduce-container').scrollIntoView({behavior : "smooth"});
            }
        })
    }

        new TopNavBar($topNavBar);
        moveToSelectRegion()
    }

    // 임시방편..
    setSlide (category) {
        
            const slideList = $(`#${category}-slides_list`); 
            const slideLen = document.querySelectorAll(`#${category}-slide-content`).length;
            
            slideList.style.width = ((SlideSize.slideWidth + SlideSize.slideMargin) * (slideLen))+ 'vw';
            const slideContents = document.querySelectorAll(`#${category}-slide-content`)
            
            const slideBtnNext = $(`#${category}-slide_btn_next`);
            const slideBtnPrev = $(`#${category}-slide_btn_prev`);
            
            for (let idx = 0; idx < slideContents.length;idx++){
                slideContents[idx].style.width = SlideSize.slideWidth+"px";
                slideContents[idx].style.height = SlideSize.slideHeight+"px";
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
                return (parseInt(SlideSize.slideWidth) + parseInt(SlideSize.slideMargin))
            }

            function isLastElementshowed(location){
                return location >= (SlideSize.slideWidth + SlideSize.slideMargin) * (slideLen - 4)  
            }

            function isLoctionOnFront(location){
                return location === 0
            }
        
            function moveSlide(){
                let slideLocation = 0;
                return( (isNextButton) => {
                    if (isNextButton) {
                        if ( isLastElementshowed(slideLocation) ) return;
                        slideLocation += slideInterval();
                    }

                    if (!isNextButton){
                        if ( isLoctionOnFront(slideLocation) ) return;
                        slideLocation -= slideInterval();
                     }
                     slideList.style.transform = `translateX(-${slideLocation}px)`;
                })
                
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
    