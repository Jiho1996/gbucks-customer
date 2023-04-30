import Menu from "./core/Menu.js";

export default class MenuSliderElement extends Menu {
  template() {
    return this.$props
      .map(
        (ele) =>
          `
        <div id = "${this.category}-slide-content" class = "slide-content" >${ele.name}</div> 
        `
      )
      .join("");
  }
}
