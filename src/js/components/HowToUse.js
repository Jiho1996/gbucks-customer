import Menu from "../core/Menu.js"
import { explanation } from "../constants/constants.js"


export class HowToUse extends Menu {
   

    template () {
        return `
        <div class ="how-to-use-first-contents">
            <div id="img-coffee-head" class ="how-to-use-items">
            </div>

            <div id="how-to-use-mean" class ="how-to-use-items">
                <img id ="mean-logo" src="../img/logo.svg" alt="logo"/>
            <p>${explanation.howToUseMean}</p>
            </div>
        </div>
        <div class= "how-to-use-second-contents"> 
            <div id="how-to-use-destination" class ="how-to-use-items">
            ${explanation.howToUseDestination}
            </div>

            <div id= "how-to-use-ticket" class ="how-to-use-items">
            ${explanation.howToUseTicket}
            </div>

            <div id="img-coffee-tail" class ="how-to-use-items">
            </div>
        </div>
        `
    }


}