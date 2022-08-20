import Menu from "../core/Menu.js"
import MenuSlider from "./MenuSlider.js"
import {$} from "../api/dom.js"

export default class MenuSliderTemplate extends Menu{

    setup(){
        this.$state = this.$props[this.category]
    }

    template (){
        return `
        <div class="slide_wrap">
            <div class="slide_box">
                <div class="${this.category}-slide_list">
                
            </div>
        </div>
    </div>`
        
    }

    mount(){
        
        new MenuSlider($(`.${this.category}-slide_list`), this.category ,this.$state);
    }


}