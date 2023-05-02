import { createContext, useState } from "react";

const ConversorContext = createContext({});

export const ConversorProvider = ({ children }) => {
    const [conversorFilter, setConversorFilter] = useState('volume');

    return (
        <ConversorContext.Provider value={{ conversorFilter, setConversorFilter }}>
            {children}
        </ConversorContext.Provider>
    )
}

export default ConversorContext;