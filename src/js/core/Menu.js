

export default class Menu{
    constructor (domNode, props){
        this.$domNode = domNode;
        this.$props = props
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
        console.log(this.template())
        this.$domNode.innerHTML = this.template();
    }

    mount () {

    }

    setEvent() {

    }
}