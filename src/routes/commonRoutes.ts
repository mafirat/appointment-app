import { Profile, Home } from "../layouts";
import People from "../layouts/common/people/People";

export const commonRoutes = {
    Home: {
        Component: Home,
        path: "/home"
    },
    Profile: {
        Component: Profile,
        path: "/profile"
    },
    People: {
        Component: People,
        path: "/people"
    }
};