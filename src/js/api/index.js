const BASE_URL = "http://localhost:3000/api"


const makeError = (response) => {
    if (!response){
        alert("에러가 발쌩!")
    }
}

const HTTP_METHOD = {
    POST(data){
        return {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data),
        };
    },
    PUT(data){
        return{
        method : "PUT",
        headers:{
            "Content-Type" : "application/json",
        },
        body : data ?  JSON.stringify(data) : null,
    };
},
    DELETE(){
        return {
            method : "DELETE",
        };
    },
};

const request = async(url, option) => {
    const response = await fetch(url, option);
    makeError(response.ok);
    return response.json();
    
}

const requestWithoutJson = async(url, option) => {
    const response = await fetch(url, option);
    makeError(response.ok);
    return response;
    
}

export const MenuApi = {
    async getAllMenuByCategory(category){
        return request(`${BASE_URL}/category/${category}/menu`);
    },

    async createMenu(category, name){
        return request(`${BASE_URL}/category/${category}/menu`, HTTP_METHOD.POST({name}))
    },
    async UpdateMenu(category, name, menuId){
        return request(`${BASE_URL}/category/${category}/menu/${menuId}`, HTTP_METHOD.PUT({name}))
    },
    async toggleSoldOutMenu(category, menuId){
        return request(`${BASE_URL}/category/${category}/menu/${menuId}/soldOut`, HTTP_METHOD.PUT())
    },
    ///category/:category/menu/:menuId
    async deleteMenu(category, menuId){
        return requestWithoutJson(`${BASE_URL}/category/${category}/menu/${menuId}`, HTTP_METHOD.DELETE())
    }
}