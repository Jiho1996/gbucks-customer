import Menu from "../core/Menu.js"
import {$} from "../api/dom.js"


export default class TopNavBar extends Menu{

    template (){
        return `
    
        <ul class="nav-container">
            <li id ="nav-about" class="nav-item"><a href="">About</a></li>
            <li id ="nav-travel" class="nav-item"><a href="">Travel</a></li>
            <li id ="nav-event" class="nav-item"><a href="">Event</a></li>
        </ul>
    
        `
    }
    
    
}