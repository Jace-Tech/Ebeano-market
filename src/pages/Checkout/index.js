import {useState} from "react"
import { Box, Grid, Radio, Typography, Collapse  } from "@mui/material"
import Header from "../../components/Header"
import BaseContainer from "../../components/BaseContainer"
import Seo from "../../components/Seo"
import BreadCrumb from "../../components/BreadCrumb"
import PageMain from "../../components/PageMain"
import Footer from "../../components/Footer"
import InputBox from "../../components/InputBox"
import Paystack from "../../assets/paystack.png"
import { countries } from "../../apis/data/"

import "./style.css"


const Checkout = () => {
    const [radioValue, setRadioValue] = useState("old")
    const [payment, setPayment] = useState("paystack")
    const [shippingDetails, setShippingDetails] = useState({
        name: "",
        address: "",
        state: "",
        country: "",
        postalCode: "",
        email: "",
        phone: ""
    })
    const [billingDetails, setBillingDetails] = useState({
        name: "",
        email: ""
    })

    const handleChange = item => {
        setRadioValue(item)
    }


    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <Box>
            <Seo title="Ebeano Market | Checkout" />
            <Header mode="dark" isSticky={true}/>
            <BaseContainer>
                <Box my={2}>
                    <BreadCrumb breadcrumb="checkout" />
                </Box>
                <PageMain title="checkout">
                    <Grid container spacing={2} rowSpacing={3}>
                        <Grid item xs={12} md={8}>
                            <form onSubmit={handleSubmit}>
                                <Box>
                                    <h3 className="checkout-title">Shipping information</h3>

                                    <Box display="flex">
                                        <Box mr={2}>
                                            <Radio
                                                checked={(radioValue === "old") && true}
                                                value="old"
                                                size="small"
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        color: "var(--primary)",
                                                    },
                                                }}
                                                onChange={() => handleChange("old")}
                                                name= "user-details"
                                            />
                                        </Box>

                                        <Box mt={1}>
                                            <Typography fontSize={{xs: ".8rem", md: ".9rem"}} mb={1} sx={{color: "#777"}}>Deba Emmanuel Edoma</Typography>
                                            <Typography fontSize={{xs: ".8rem", md: ".9rem"}} mb={1} sx={{color: "#777"}}>+2349045386266</Typography>
                                            <Typography fontSize={{xs: ".8rem", md: ".9rem"}} mb={1} sx={{color: "#777"}}>Abakaliki Rd, Enugu North, Enugu</Typography>
                                        </Box>
                                    </Box>

                                    <Box display="flex" mt={3}>
                                        <Box mr={2}>
                                            <Radio
                                                checked={(radioValue === "new") && true}
                                                value="new"
                                                size="small"

                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        color: "var(--primary)",
                                                    },
                                                }}
                                                onChange={() => handleChange("new")}
                                                name= "user-details"
                                            />
                                        </Box>

                                        <Box mt={1}>
                                            <Typography fontSize={{xs: ".8rem", md: ".9rem"}} mb={1} sx={{color: "#777"}}>New shopping address</Typography>
                                        </Box>
                                    </Box>

                                    <Box mt={2}>
                                        <Collapse in={radioValue === "new"}>
                                            <Box mt={2}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={12}>
                                                        <InputBox value={shippingDetails.name} type="text" label="Name" handleChange={(e) => setShippingDetails(prev => ({...prev, name: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputBox value={shippingDetails.email} type="email" label="Email" handleChange={(e) => setShippingDetails(prev => ({...prev, email: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputBox value={shippingDetails.phone} type="text" label="Phone" handleChange={(e) => setShippingDetails(prev => ({...prev, phone: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={12}>
                                                        <InputBox value={shippingDetails.address} type="text" label="Address" handleChange={(e) => setShippingDetails(prev => ({...prev, address: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={4}>
                                                        <InputBox kind="select" items={countries} value={shippingDetails.country} label="Country" handleChange={(e) => setShippingDetails(prev => ({...prev, country: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={4}>
                                                        <InputBox value={shippingDetails.state}  kind="select" items={countries} label="State" handleChange={(e) => setShippingDetails(prev => ({...prev, state: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={4}>
                                                        <InputBox value={shippingDetails.postalCode} type="number" label="Postal Code" handleChange={(e) => setShippingDetails(prev => ({...prev, postalCode: e.target.value}))} />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Collapse>
                                    </Box>
                                </Box>

                                <Box mt={8}>
                                    <h3 className="checkout-title bordered">Payment</h3>

                                    <Box display="flex">
                                        <Box mr={2}>
                                            <Radio
                                                checked={(radioValue === "old") && true}
                                                value="old"
                                                size="small"
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        color: "var(--primary)",
                                                    },
                                                }}
                                                onChange={() => handleChange("old")}
                                                name= "user-details"
                                            />
                                        </Box>

                                        <Box mt={1} flex={1}>
                                            <Typography fontSize={{xs: ".8rem", md: ".9rem"}} mb={1} sx={{color: "#777"}}>Shipping info is same as my billing info </Typography>

                                            <Box mt={3}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <InputBox type="text" value={billingDetails.name} label="Billing name" handleChange={e => setBillingDetails(prev => ({...prev, name: e.target.value}))} />
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <InputBox type="email" value={billingDetails.email} label="Billing email" handleChange={e => setBillingDetails(prev => ({...prev, email: e.target.value}))} />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box mt={8}>
                                    <h3 className="checkout-title bordered">Payment Method</h3>

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Box display="flex">
                                                <Box mr={2}>
                                                    <Radio
                                                        checked={(payment === "paystack") && true}
                                                        value="paystack"
                                                        size="small"
                                                        sx={{
                                                            '& .MuiSvgIcon-root': {
                                                                color: "var(--primary)",
                                                            },
                                                        }}
                                                        onChange={() => setPayment("paystack")}
                                                        name= "user-payment"
                                                    />
                                                </Box>

                                                <Box mt={1} flex={1}>
                                                    <div className="box-outlined" onClick={() => setPayment('paystack')}>
                                                        <img alt="paystack" src={Paystack} className="paystack" />
                                                    </div>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <Box display="flex">
                                                <Box mr={2}>
                                                    <Radio
                                                        checked={(payment === "delivery") && true}
                                                        value="delivery"
                                                        size="small"
                                                        sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        color: "var(--primary)",
                                                    },
                                                }}
                                                        onChange={() => setPayment("delivery")}
                                                        name= "user-payment"
                                                    />
                                                </Box>

                                                <Box mt={1} flex={1}>
                                                    <div className="box-outlined" onClick={() => setPayment("delivery") }>
                                                        Pay on delivery
                                                    </div>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box mt={3}>
                                    <button className="checkout-btn" type="submit">
                                        Save and continue
                                    </button>
                                </Box>
                            </form>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{display: {xs: "none"}}}>
                            <Box mb={3}>
                                <h2 className="summary-title-checkout">Summary</h2>
                            </Box>
                        </Grid>
                    </Grid>
                </PageMain>
            </BaseContainer>
            <Footer />
        </Box>
    )
}

export default Checkout
