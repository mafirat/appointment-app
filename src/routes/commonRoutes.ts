import { Profile, Appointments } from "../layouts";

export const commonRoutes = {
    Home: {
        Component: Appointments,
        path: "/home"
    },
    Profile: {
        Component: Profile,
        path: "/profile"
    }
};