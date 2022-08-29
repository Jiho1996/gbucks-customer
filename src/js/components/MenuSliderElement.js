import Menu from "../core/Menu.js"

export default class MenuSliderElement extends Menu{
    

    template () {
        return this.$props.menu.map(ele => 
        `
        <div id = "${this.category}-slide-content" class = "slide-content" >${ele.name}</div> 
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