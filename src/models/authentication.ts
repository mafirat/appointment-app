export interface ILogin {
    email: string;
    password: string;
}

export interface IAuth {
    accessToken: string;
    username: string;
    email: string;
    expirationTime: string;
}

export interface IRegister {
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    rePassword?: string;
}
