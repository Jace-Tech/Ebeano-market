import { createContext, useState } from "react"

export const ShopContext = createContext()

const Shop = ({children}) => {
    const [radio, setRadio] = useState([])
    const [checkBox, setCheckBox] = useState([])

    const handleFavorite = (item) => {
        console.log("From shop Context: => ", item)
    }

    const handleCheckoutItem = (item) => {
        console.log("From shop Context: => ", item)
    }

    const handleAddToCart = (item) => {
        console.log("From shop Context: => ", item)
    }

    const handleRadioBtn = (index) => {
        setRadio(state => state.splice(index, 1, !checkBox[index]))
    }

    const handleCheckBox = (index) => {
        setCheckBox(state => state.splice(index, 1, !checkBox[index]))
    }

    return (
        <ShopContext.Provider value={{handleFavorite, handleAddToCart, handleCheckoutItem, radio, checkBox, handleCheckBox, handleRadioBtn}}>
            { children }
        </ShopContext.Provider>
    )
}


export default Shop
