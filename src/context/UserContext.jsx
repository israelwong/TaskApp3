import { createContext } from 'react'
export const CreateContext = createContext()

export function UserContextProvider(props) {

    let value = 10

    return (
        <CreateContext.Provider value={value}>
            {props.children}
        </CreateContext.Provider>
    )
}