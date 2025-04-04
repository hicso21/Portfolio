import { createContext, useContext, useState } from "react";

const PagesContext = createContext(null);

function PageProvider({ children }) {
    const [globalState, setGlobalState] = useState({
        page: "home",
        modal: null,
    });

    const setPage = (newPage) => {
        setGlobalState((curr) => ({ ...curr, page: newPage }));
    };

    const setModal = (modal) => {
        setGlobalState((curr) => ({ ...curr, modal }));
    };

    const value = {
        page: globalState.page,
        setPage,
        modal: globalState.modal,
        setModal,
    };

    return (
        <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
    );
}

function usePage() {
    const context = useContext(PagesContext);
    if (context === null) {
        throw new Error("usePage debe usarse dentro de un PageProvider");
    }
    return context;
}

export { PageProvider, usePage };
