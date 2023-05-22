import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/rutes";
import Login from "./components/Login/login";
import Chat from "./components/Chat";

export const publickRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    }
];

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]