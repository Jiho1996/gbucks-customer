import Menu from "../core/Menu.js"
import MenuSliderElement from "./MenuSliderElement.js"
import {$} from "../api/dom.js"


export default class MenuSliderTemplate extends Menu{

    setup(){
        this.$state = this.$props[this.category]
    }

    template (){
        return `

            <ul class="${this.category}-slides_list"></ul>

            <div class="${this.category}-slide_btn_box">
              <button type="button"><img src = "../img/left.png" id="${this.category}-slide_btn_prev" class="slide_btn_prev"></button>
                    <button type="button"><img src = "../img/right.png" id="${this.category}-slide_btn_next" class="slide_btn_next"></button>
                        </div>   

       
                    `
        
    }

    mount(){
        
        new MenuSliderElement($(`.${this.category}-slides_list`), this.category ,this.$state);
    }


}