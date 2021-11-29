import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const Cart = ({ children }) => {
    const [cart, setCart] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const [globalCheck, setGlobalCheck] = useState(false)
    const [totalSub, setTotalSub] = useState(0)

    const addItem = _item => {
        const item = {
            id: cart.length + 1,
            ..._item
        }

        setCart(prev => [...prev, item])
    }

    const handleGlobalCheck = () => {
        setGlobalCheck(prev => !prev)
    }

    const updateQuantity = (_item, quantity) => {
        let index = null
        let currentItem = selectedItems.forEach((item, i) => {
            if(item.id === _item.id){
                index = i
                return item
            }
        })

        currentItem = {..._item, quantity}

        console.log("currentItem => ", currentItem, "index => ", index);

        setSelectedItems(prev => prev.splice(index, 1, currentItem))
        getTotalCount()

    }

    const addSelectedItem = (_item, quantity) => {
        const item = { ..._item, quantity}
        setSelectedItems(prev => [...prev, item])
    }

    const removeSelectedItem = (_item) => {
        setSelectedItems(prev => prev.filter(item => item.id !== _item.id))
    }

    const deleteItem = itemId => {
        setCart(prev => prev.filter(item => item.id !== itemId))
    }

    const getTotalCount = () => {
        let total = 0
        selectedItems.forEach((item, i) => {
            total += (+item.price * +item.quantity)
        });

        setTotalSub(total)
    }

    const clearCart = () => setCart([])

    useEffect(() => {
        console.log(cart)
    }, [cart])

    useEffect(() => {
        getTotalCount()
    }, [ selectedItems, cart])


    return (
        <CartContext.Provider value={{cart, addItem, deleteItem, clearCart, handleGlobalCheck, addSelectedItem, removeSelectedItem, totalSub, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


export default Cart
