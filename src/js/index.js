import {MenuApi} from "./api/index.js"
import App from "./App.js"


//new App(document.querySelector("#slides_espresso"), "espresso");
window.addEventListener('DOMContentLoaded', async () => {
    new App(document.querySelector("#app"), "" ,await getAllMenuObject());  
  });

const getAllMenuObject = async () => {
    return {
        espresso : {
          menu: await MenuApi.getAllMenuByCategory("espresso")
        },
        frappuccino:  {
            menu: await MenuApi.getAllMenuByCategory("frappuccino")
          },
          blended :  {
            menu: await MenuApi.getAllMenuByCategory("blended")
          },
          teavana: {
            menu: await MenuApi.getAllMenuByCategory("teavana")
          },
          desert:  {
            menu: await MenuApi.getAllMenuByCategory("desert")
          },
        }
  }

  