import Menu from "../core/Menu.js"

export default class TopNavBar extends Menu{
    template (){
        return `
        <nav>
        <ul class="nav-container">
            <li class="nav-item"><a href="">About</a></li>
            <li class="nav-item"><a href="">Travel</a></li>
            <li class="nav-item"><a href="">Event</a></li>
        </ul>
    </nav>
        `
    }
}