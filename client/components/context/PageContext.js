import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {

    const [page, setPage] = useState(2);

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );

}