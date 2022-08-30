import {MenuApi} from "../api/index.js"


export default class Model{

    // setMenuList = async (category, allMenu) => {
    //     const menuList = await MenuApi.getAllMenuByCategory(category);
    //     allMenu[category] = menuList;
    // }
    // getMenuList = (category, allMenu) => {
    //     return allMenu[category]
    // }

    getMenuObjectByCategory = async (category) => {
        return await MenuApi.getAllMenuByCategory(category)
    }

    // getAllMenuObject = async () => {
    //     return {
    //          espresso : {
    //           menu: await MenuApi.getAllMenuByCategory("espresso")
    //         },
    //         frappuccino:  {
    //             menu: await MenuApi.getAllMenuByCategory("frappuccino")
    //           },
    //           blended :  {
    //             menu: await MenuApi.getAllMenuByCategory("blended")
    //           },
    //           teavana: {
    //             menu: await MenuApi.getAllMenuByCategory("teavana")
    //           },
    //           desert:  {
    //             menu: await MenuApi.getAllMenuByCategory("desert")
    //           },
    //         }

            // return ["espresso","frappuccino","blended","teavana","desert"]
            // .forEach( async (ele) => 
            //     { ele : { menu : await MenuApi.getAllMenuByCategory(ele) }}
            // )
        
        //}
}