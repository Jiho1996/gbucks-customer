import { $ } from "./api/dom.js";
import TopNavBar from "./components/TopNavBar.js";
import MenuSliderTemplate from "./components/MenuSliderTemplate.js";
import { SlideSize, MenuName } from "./constants/constants.js";
import CafeIntroduce from "./components/CafeIntroduce.js";
import { HowToUse } from "./components/HowToUse.js";
import Model from "./Model/Model.js";
import Container from "./components/container.js";

export default class App {
  constructor(domNode) {
    this.$domNode = domNode;
    this.model = new Model();
    this.menu = new Object();
    Object.keys(MenuName).forEach((ele) => {
      this.menu[ele] = [];
    });
    this.setup();
  }

  async setup() {
    await Promise.allSettled(
      Object.keys(this.menu).map(async (ele) => {
        this.menu[ele] = await this.model.getMenuObjectByCategory(ele);
      })
    );

    this.render();
  }

  render() {
    this.mount();
  }

  mount() {
    new Container($("#app"));

    new CafeIntroduce($('[data-component="cafe-introduce-container"]'));

    new HowToUse($('[data-component="cafe-how-to-use-container"]'));

    Object.keys(this.menu).forEach((ele) => {
      new MenuSliderTemplate(
        $(`[data-component="${ele}-menu-container"]`),
        ele,
        this.menu
      );
      this.setSlide(ele);
    });

    new TopNavBar($('[data-component="menu-info-bar"]'));
    const moveToSelectRegion = (() => {
      $(".nav-container").addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.innerText === "About") {
          $(".introduce-container").scrollIntoView({ behavior: "smooth" });
        }
        if (event.target.innerText === "Travel") {
          $("#Destination").scrollIntoView({ behavior: "smooth" });
        }
      });
    })();
  }

  // 임시방편..
  setSlide(category) {
    const slideList = $(`#${category}-slides_list`);
    const slideLen = document.querySelectorAll(
      `#${category}-slide-content`
    ).length;

    slideList.style.width =
      (SlideSize.slideWidth + SlideSize.slideMargin) * slideLen + "vw";
    const slideContents = document.querySelectorAll(
      `#${category}-slide-content`
    );

    const slideBtnNext = $(`#${category}-slide_btn_next`);
    const slideBtnPrev = $(`#${category}-slide_btn_prev`);

    slideContents.forEach((ele, idx) => {
      slideContents[idx].style.width = SlideSize.slideWidth + "px";
      slideContents[idx].style.height = SlideSize.slideHeight + "px";
      slideContents[idx].style.float = "left";
    });

    function slideInterval() {
      return parseInt(SlideSize.slideWidth) + parseInt(SlideSize.slideMargin);
    }

    function isLastElementshowed(location) {
      return (
        location >=
        (SlideSize.slideWidth + SlideSize.slideMargin) * (slideLen - 4)
      );
    }

    function isLoctionOnFront(location) {
      return location === 0;
    }

    function moveSlide() {
      let _slideLocation = 0;
      return (isNextButton) => {
        if (isNextButton) {
          if (isLastElementshowed(_slideLocation)) return;
          _slideLocation += slideInterval();
        }

        if (!isNextButton) {
          if (isLoctionOnFront(_slideLocation)) return;
          _slideLocation -= slideInterval();
        }
        slideList.style.transform = `translateX(-${_slideLocation}px)`;
      };

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

    slideBtnPrev.addEventListener("click", () => moveSlides(false));

    slideBtnNext.addEventListener("click", () => moveSlides(true));
  }
}
