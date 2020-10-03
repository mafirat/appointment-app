import { Login } from "../layouts/authentication/Login";
import { Register } from "../layouts/authentication/Register";

export const authRoutes = {
    Login: {
        Component: Login,
        path: "/login"
    },
    Register: {
        Component: Register,
        path: "/register"
    }
};