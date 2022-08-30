

export default class Menu{
    constructor (domNode, category ,props){
        this.$domNode = domNode;
        this.$props = props;
        this.category = category;
        this.setup();
        this.render();
    }

    setup () {
        
    }
    setState (newState){
        this.$state = { ... newState};
        this.render();

    }
    template () {
        
    }
    

    render () {
        // console.log(this.$domNode)
        // console.log(this.template())
        this.$domNode.innerHTML = this.template();
        this.mount();
    }

    mount () {

    }

    setEvent() {

    }
}