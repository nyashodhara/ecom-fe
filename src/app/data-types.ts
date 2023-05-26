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

export const environment = {
    production: false,
    apiUrl: 'https://ecomproject-production.up.railway.app/'
  };