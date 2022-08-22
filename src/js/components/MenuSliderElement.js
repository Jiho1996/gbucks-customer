import Menu from "../core/Menu.js"
import {$} from "../api/dom.js"

export default class MenuSliderElement extends Menu{
    
    async setup(){
        this.$state = this.$props
        console.log(this.$state.menu)
    }

    template () {
        return this.$state.menu.map(ele => 
        `
        <div id = ${ele.id} class = "slide-content" >${ele.name}</div> 
        `
        ).join("");
    }


    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }