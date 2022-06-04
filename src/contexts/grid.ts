import {createContext, useContext, Dispatch} from 'react';

interface IContextProps {
    state: gridType;
    dispatch: Dispatch<actionType>
}

const Grid = createContext({} as IContextProps);

export function useGridContext() {
    return useContext(Grid);
}

export default Grid;