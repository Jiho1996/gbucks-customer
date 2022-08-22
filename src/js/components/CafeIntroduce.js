import {explanation} from "../constants/constants.js"
import Menu from "../core/Menu.js"

export default class CafeIntroduce extends Menu{
    template (){
        return `
        <div class="introduce-about">About</div>
            
            <div class="introduce-explain">${explanation.introduce}</div>
        </div>

        `


    }



}