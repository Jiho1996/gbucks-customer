import { MenuApi } from "../api/index.js";

export default class Model {
  getMenuObjectByCategory = async (category) => {
    return await MenuApi.getAllMenuByCategory(category);
  };
}
