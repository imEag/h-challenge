import { createContext, useState } from "react";

export const UserDataContext = createContext();

const User = {
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
    service: ""
}

export const UserDataProvider = ({ children }) => {
    
    const [userData, setUserData] = useState(User);

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );

}