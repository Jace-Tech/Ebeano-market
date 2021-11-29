import { useContext, useState } from "react"
import { Box, IconButton } from "@mui/material"
import CustomCheckBox from "../../components/CustomCheckBox"
import CartProduct from "../../components/CartProduct"

import { ShopContext } from "../../contexts/Shop"
import { CartContext } from "../../contexts/Cart"

import Minus from "../../assets/minus.svg"

import { IoAddCircle } from "react-icons/io5"
import "./style.css"


const CartItem = ({image, item, name, quantity, price, id}) => {
    const { handleFavorite, handleCheckoutItem } = useContext(ShopContext)
    const { deleteItem, addSelectedItem, removeSelectedItem, updateQuantity } = useContext(CartContext)
    const [value, setValue] = useState(quantity || 1)

    const handleChange = (_item, _quantity, _type) => {
        (_type === "add") ? addSelectedItem(_item, _quantity) : removeSelectedItem(_item)
    }

    const handleIncrease = () => {
        setValue(prev => prev + 1 )
        updateQuantity(item, value + 1)
    }

    const handleDecrease = () => {
        setValue(prev => (prev > 1) ?  prev - 1 : prev)
        updateQuantity(item, value - 1)
    }

    return (
        <tr>
            <td>
                <CustomCheckBox
                    value={item}
                    quantity={value}
                    onChange={(_item, _quantity, _type) => handleChange(_item, _quantity, _type)}
                />
            </td>

            <td>
                <CartProduct
                    name={name}
                    image={image}
                    id={id && id}
                    handleCheckItem={handleCheckoutItem}
                    handleDeleteItem={deleteItem}
                    handleAddfavorite={handleFavorite}
                />
            </td>

            <td>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <IconButton onClick={handleDecrease} sx={{color: "var(--primary)"}}>
                        <img alt="minus" src={Minus} className="minusBtn" />
                    </IconButton>

                    <input onChange={e => setValue(+e.target.value)} value={value} className="cart-quantity" />

                    <IconButton onClick={handleIncrease} sx={{color: "var(--primary)"}}>
                        <IoAddCircle />
                    </IconButton>
                </Box>
            </td>

            <td> &#8358; { price && price.toLocaleString() }</td>
            <td>&#8358; { (price * value).toLocaleString() }</td>
        </tr>
    )
}

export default CartItem
