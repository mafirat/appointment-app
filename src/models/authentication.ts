export interface ILogin {
    email: string;
    password: string;
}

export interface IAuth {
    accesToken: string;
    email: string;
}

export interface IRegister {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    rePassword: string;
}
