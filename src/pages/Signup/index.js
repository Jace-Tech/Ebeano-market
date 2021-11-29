import {useState} from "react"
import { Box, Grid, Button } from "@mui/material"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import BaseContainer from "../../components/BaseContainer"
import Seo from "../../components/Seo"
import BreadCrumb from "../../components/BreadCrumb"
import PageMain from "../../components/PageMain"
import Footer from "../../components/Footer"
import CustomCheckBox from "../../components/CustomCheckBox"
import InputPassword from "../../components/InputPassword"
import InputBox from "../../components/InputBox"



const Signup = () => {
    const [data, setData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        password: ""
    })
    const [type, setType] = useState(false)

    const handleSubmit = () => {}

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


    return (
        <Box>
            <Seo title="Ebeano Market | Sign up" />
            <Header mode="dark" isSticky={true}/>
            <BaseContainer>
                <Box my={2}>
                    <BreadCrumb breadcrumb="sign up" />
                </Box>
                <PageMain title="sign up">
                <Grid container spacing={2} rowSpacing={3}>
                    <Grid item xs={12} md={5}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InputBox
                                        label="Firstname"
                                        value={data.firstname}
                                        type="text"
                                        handleChange={e => setData(prev => ({...prev, firstname: e.target.value}))}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputBox
                                        label="Lastname"
                                        value={data.lastname}
                                        type="text"
                                        handleChange={e => setData(prev => ({...prev, lastname: e.target.value}))}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputBox
                                        label="Email"
                                        value={data.email}
                                        type="email"
                                        handleChange={e => setData(prev => ({...prev, email: e.target.value}))}
                                    />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputBox
                                        label="Phone"
                                        value={data.phone}
                                        type="tel"
                                        handleChange={e => setData(prev => ({...prev, phone: e.target.value}))}
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
                                    <Box>
                                        <CustomCheckBox>
                                            <p style={{fontSize: ".9rem"}}>
                                                I accept the <Link to="/" className="text-decoration-none text-orange"> terms and conditions </Link> and <Link to="/" className="text-decoration-none text-orange"> privacy policy </Link>
                                            </p>
                                        </CustomCheckBox>
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box mt={2}>
                                        <button className="addBtn" style={{padding: ".6rem 2rem"}}>Create an account</button>
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box mt={3}>
                                        <p className="create-account">Already have an account? <Link className="create-link"  to="/login"> Login </Link> </p>
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

export default Signup
