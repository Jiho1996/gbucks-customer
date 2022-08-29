import Menu from "../core/Menu.js"
import MenuSliderElement from "./MenuSliderElement.js"
import {$} from "../api/dom.js"
import { explanation } from "../constants/constants.js"


export default class MenuSliderTemplate extends Menu{

    setup(){
        this.$state = this.$props[this.category]
    }

    template (){
        return `
        <div class = "slider-title-explain-container">
            <p id = "${this.category}-title" class ="title-class"}>${this.category.toUpperCase()}</p>
            <p id ="${this.category}-explain" class ="explain-class"}>${explanation.espressoExplain}</p>
            
        </div>

            <ul id ="${this.category}-slides_list" class="slides_list"></ul>

            <div id ="${this.category}-slide_btn_box" class="slide_btn_box">
              <button type="button"><img src = "../img/left.png" id="${this.category}-slide_btn_prev" class="slide_btn_prev"></button>
                    <button type="button"><img src = "../img/right.png" id="${this.category}-slide_btn_next" class="slide_btn_next"></button>
                        </div>
                    `
        
    }

    mount(){
        
        new MenuSliderElement($(`.slides_list`), this.category ,this.$state);
    }


}