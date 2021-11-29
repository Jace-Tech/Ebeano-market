import { useState } from "react"
import { Box, Grid, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BaseContainer from "../../components/BaseContainer"
import Seo from "../../components/Seo"
import BreadCrumb from "../../components/BreadCrumb"
import PageMain from "../../components/PageMain"
import Footer from "../../components/Footer"
import InputBox from "../../components/InputBox"
import CustomCheckBox from "../../components/CustomCheckBox"
import InputPassword from "../../components/InputPassword"

import "./style.css"

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [type, setType] = useState(false)

    const btnStyle = {
        textTransform: "uppercase",
        color: "#777",
        fontWeight: 500,
        fontSize: {
            xs: ".7rem",
            md: ".75rem"
        },
        "&:hover": {
            color: "#EB790F"
        }
    }


    const handleSubmit = () => {

    }
    return (
        <Box>
            <Seo title="Ebeano Market | Login" />
            <Header mode="dark" isSticky={true}/>
            <BaseContainer>
                <Box my={2}>
                    <BreadCrumb breadcrumb="login" />
                </Box>
                <PageMain title="login">
                    <Grid container spacing={2} rowSpacing={3}>
                        <Grid item xs={12} md={5}>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <InputBox
                                            label="Email"
                                            value={data.email}
                                            type="email"
                                            handleChange={e => setData(prev => ({...prev, email: e.target.value}))}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <InputPassword
                                            label="Password"
                                            value={data.password}
                                            type={type}
                                            handleChange={e => setData(prev => ({...prev, password: e.target.value}))}
                                        >
                                            <Button type="button" onClick={() => setType(!type)} sx={btnStyle}>{ type && type ? "hide" : "show" }</Button>
                                        </InputPassword>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box alignItems="center" display="flex" justifyContent="space-between">
                                            <CustomCheckBox>
                                                <Typography sx={{fontSize: ".9rem"}}>Remember me</Typography>
                                            </CustomCheckBox>

                                            <div>
                                                <Link to="" className="forgot-password">Forgot&nbsp;password&nbsp;?</Link>
                                            </div>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box mt={2}>
                                            <button className="addBtn" style={{padding: ".6rem 2rem"}}>Login</button>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box mt={3}>
                                            <p className="create-account">Don't have an account? <Link className="create-link"  to="/register">Create an account </Link> instead </p>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </PageMain>
            </BaseContainer>
            <Footer />
        </Box>
    )
}

export default Login
