export interface login{
    mobile:String,
    password:String
}
export interface signUp{
    name:String,
    mobile:String,
    email:String,
    password:String
}

export interface productSearch{
    search:String,
    category:number
}

export interface product{
    name:String,
    price:number,
    category:number,
    images:String,
    productId:number
}

export const environment = {
    production: false,
    apiUrl: 'https://ecom-be-production.up.railway.app/'
  };