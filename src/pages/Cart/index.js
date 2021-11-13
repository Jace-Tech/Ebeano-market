import { useContext } from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BaseContainer from "../../components/BaseContainer"
import Seo from "../../components/Seo"
import BreadCrumb from "../../components/BreadCrumb"
import CustomCheckBox from "../../components/CustomCheckBox"
import PageMain from "../../components/PageMain"
import CartItem from "../../components/CartItem"
import Footer from "../../components/Footer"
import CartProduct from "../../components/CartProduct"

import { CartContext } from "../../contexts/Cart"
import './style.css';


const Cart = () => {
    const { cart, handleGlobalCheck, totalSub } = useContext(CartContext)

    return (
        <Box>
            <Seo title="Ebeano Market | Cart" />
            <Header isSticky={true} mode="dark" />

            <BaseContainer>
                <Box my={2}>
                    <BreadCrumb breadcrumb="cart" />
                </Box>
                <PageMain title={`cart (${cart.length})`}>
                    <Box width="100%">
                        <Grid container spacing={2} rowSpacing={3}>
                            <Grid item xs={12} md={10}>
                                <Box display={{xs: "none", md: "block"}}>
                                    <table className="cart-table">
                                        <thead>
                                            <tr>
                                                <th className="border-none">
                                                    <CustomCheckBox handleClick={handleGlobalCheck} />
                                                </th>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>subtotal</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cart && cart.map((item, index) => {
                                                    const {image, id, price, name} = item

                                                    return (
                                                        <CartItem
                                                            key={index}
                                                            name={name}
                                                            item={item}
                                                            image={image}
                                                            quantity={1}
                                                            id={id}
                                                            price={price}
                                                        />
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </Box>

                                <Box display={{xs: "block", md: "none"}}>
                                    <Box mb={3}>
                                        <CustomCheckBox />
                                    </Box>

                                    {
                                        cart &&
                                            cart.map(({image, name, price}, index) => (
                                                <CartProduct
                                                    key={index}
                                                    value={1}
                                                    image={image}
                                                    price={price}
                                                    name={name}
                                                />
                                            ))
                                    }
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={2}>
                                <Box mb={3}>
                                    <h2 className="summary-title">Summary</h2>
                                </Box>

                                <Box py={1} mb={1} sx={{textAlign: {xs: "left", md: "right"}}}>
                                    <Typography fontSize={{xs: "1rem", md: "1.3em"}} sx={{color: "#333", fontFamily: "'Sen', Segeo UI, sans-serif", fontWeight: 500, textTransform: "capitalize"}}>Subtotal</Typography>
                                    <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{color: "#777", mt: 1, fontFamily: "'Yantramanav', Segeo UI, sans-serif", fontWeight: 500, textTransform: "capitalize"}}> &#8358; { totalSub.toLocaleString() }</Typography>
                                </Box>

                                <Box py={1} mb={1} sx={{textAlign: {xs: "left", md: "right"}}}>
                                    <Typography fontSize={{xs: "1rem", md: "1.3em"}} sx={{color: "#333", fontFamily: "'Sen', Segeo UI, sans-serif", fontWeight: 500, textTransform: "capitalize"}}>Shipping</Typography>
                                    <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{color: "#777", marginTop: 1, fontFamily: "'Yantramanav', Segeo UI, sans-serif", fontWeight: 500, textTransform: "capitalize"}}> &#8358; 3,500 </Typography>
                                </Box>

                                <Box py={1} mb={1} sx={{textAlign: {xs: "left", md: "right"}}}>
                                    <Typography fontSize={{xs: "1rem", md: "1.3em"}} sx={{color: "#333", fontFamily: "'Sen', Segeo UI, sans-serif", fontWeight: 500, textTransform: "capitalize"}}>Total</Typography>
                                    <Typography fontSize={{xs: ".9rem", md: "1rem"}} sx={{color: "#777", mt: 1, fontFamily: "'Yantramanav', Segeo UI, sans-serif", fontWeight: 500, textTransform: "capitalize"}}> &#8358; 55,000 </Typography>
                                </Box>

                                <Box mt={2} display="flex" justifyContent={{xs: "flex-start", md: "flex-end"}}>
                                    <Link to="/checkout" className="addBtn text-decoration-none checkout-btn">
                                        Checkout
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </PageMain>
            </BaseContainer>
            <Footer />
        </Box>
    )
}


export default Cart
