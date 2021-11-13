import { createContext, useState } from 'react';

export const SideBarContext = createContext()

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    return (
        <SideBarContext.Provider value={{handleOpen, handleClose, isOpen}}>
            { children }
        </SideBarContext.Provider>
    )
}

export default SideBar
