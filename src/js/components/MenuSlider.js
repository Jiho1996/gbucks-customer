import Menu from "../core/Menu.js"

export default class MenuSlider extends Menu{
    
    async setup(){
        this.$state = this.$props[this.category]
    }

    template () {
        return this.$state.menu.map(ele => `<div>${ele.name}</div>`).join("");
    }
    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }