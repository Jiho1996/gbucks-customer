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
              <button type="button" class="${this.category}-slide_btn_prev">Prev</button>
                    <button type="button" class="${this.category}-slide_btn_next">Next</button>
                        </div>   

       
                    `
        
    }

    mount(){
        
        new MenuSliderElement($(`.${this.category}-slides_list`), this.category ,this.$state);
    }


}