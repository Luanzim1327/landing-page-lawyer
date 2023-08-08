"use client"

import { useState } from "react";
import { createContext , useContext } from "react";

const ModalContactContext = createContext();

export default function ModalContactProvider ({children}) {
    const [displayModal , setDisplayModal] = useState(false);

    return (
        <ModalContactContext.Provider value={{displayModal , setDisplayModal}}>
            {children}
        </ModalContactContext.Provider>
    )
}

export function useModalContact () {
    const context = useContext(ModalContactContext);

    return context;
}

