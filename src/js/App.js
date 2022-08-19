import Menu from "./core/Menu.js"

export default class App extends Menu{
    
    async setup(){
        console.log(this.$props)
        this.category = this.$props.category
        this.$state = this.$props.desert.menu;
        
    }

    template () {
        return this.$state.map(ele => `<div>${ele.name}</div>`).join("");
    }
    
    // const renderMenuList = async (menuCategory) =>{
    //    this.menu[menuCategory] = await MenuApi.getAllMenuByCategory(menuCategory);
    //    const template = this.menu[menuCategory]
    //    .map((item) => {return `<div>${item.name}</div>`}).join("");
    //    document.querySelector("#test").innerHTML = template;
    // }
    }