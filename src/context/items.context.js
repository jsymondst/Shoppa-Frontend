import { createContext } from "react";

export const ItemsContext = createContext({
    items: [],
    update: () => {},
});

export default ItemsContext;
