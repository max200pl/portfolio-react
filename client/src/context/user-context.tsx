
import Cookies from "js-cookie";
import { FC, createContext, useEffect, useState } from "react";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    language: string;
    avatarUrl: string;
    role?: "guest" | "admin" | "user";
}

type UserContextType = {
    isAuth: boolean;
    user?: User;
    logInUser: (user: User) => void;
    logOutUser: () => void;
};


export const UserContext = createContext<UserContextType>({
    isAuth: false,
    user: undefined,
    logInUser: (user) => { },
    logOutUser: () => { }
});

interface Props {
    children: React.ReactNode;
}

const UserContextProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User>();
    const userCookies = Cookies.get("user");

    const logInUserHandler = (user: User) => {
        Cookies.set("user", JSON.stringify(user));
        setUser(user);
    }

    const logOutUserHandler = () => {
        setUser(undefined);
        Cookies.remove("user");
        Cookies.remove("session");
        console.log("logOutUserHandler")
    }

    if (userCookies !== undefined && user === undefined) {
        const user = JSON.parse(userCookies || "{}");
        setUser(user);
    }

    const contextValue: UserContextType = {
        isAuth: !!user,
        user: user,
        logInUser: logInUserHandler,
        logOutUser: logOutUserHandler,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;