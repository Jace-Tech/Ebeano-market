import { Box, Grid, Typography, Collapse, Stack, IconButton } from "@mui/material"
import { useState } from "react"
import Header from "../../components/Header"
import BaseContainer from "../../components/BaseContainer"
import Seo from "../../components/Seo"
import BreadCrumb from "../../components/BreadCrumb"
import PageMain from "../../components/PageMain"
import Footer from "../../components/Footer"
import TrackDetails from "../../components/TrackDetails"
import { IoArrowBackSharp } from "react-icons/io5"
import "./style.css"

import { popularItems } from "../../apis/data/index.js"

const Tracking = () => {
    const [track, setTrack] = useState("")
    const [trackMobile, setTrackMobile] = useState("")
    return (
        <Box>
            <Seo title="Ebeano Market | Tracking" />
            <Header isSticky={true} mode="dark" />

            <BaseContainer>
                <Box my={2}>
                    <BreadCrumb breadcrumb="tracking" />
                </Box>
                <PageMain title="Tracking">
                    <h3 className="checkout-title">Orders</h3>
                    <Box width="100%">
                        <Box display={{xs: "none", md: "block"}}>
                            <Grid container spacing={2} rowSpacing={3} alignItems="center">
                                <Grid item xs={12} md={5}>
                                    <Grid spacing={1} container>
                                        {
                                            popularItems?.map(({image, name, }) => (
                                                <Grid item xs={12} md={12}>
                                                    <div className={`track-item ${(track === name) && "active"}`}>
                                                        <Box display="flex" sx={{alignItems: {xs: "center", lg: "start"}}}>
                                                            <img src={image && image} alt={name && name} className="popular-img"/>
                                                            <Box flex={1} ml={3} sx={{paddingY: {xs: 1}}}>
                                                                <Typography sx={{fontSize: {xs: "1.2rem"}, color: "#333", fontWeight: 500 }}>{ name && name }</Typography>
                                                                <Box mt={1}>
                                                                    <button className="addBtn" onClick={() => setTrack(name) }>
                                                                        Track this item
                                                                    </button>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <div className={`track-container ${(track === name) && "active"}`}>
                                                            <Stack spacing={2}>
                                                                <TrackDetails
                                                                    passed={true}
                                                                    title="Order placed"
                                                                    date="11/12/2021"
                                                                />
                                                                <TrackDetails
                                                                    passed={true}
                                                                    title="Order placed"
                                                                    date="11/12/2021"
                                                                />
                                                                <TrackDetails
                                                                    passed={true}
                                                                    title="Order placed"
                                                                    date="11/12/2021"
                                                                />
                                                                <TrackDetails
                                                                    passed={true}
                                                                    title="Order placed"
                                                                    date="11/12/2021"
                                                                />
                                                                <TrackDetails
                                                                    passed={true}
                                                                    title="Delivered"
                                                                    date="11/12/2021"
                                                                />
                                                            </Stack>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={7} sx={{display: {xs: "none", md: "flex"}}}>
                                    {
                                        !track && (
                                            <Typography variant="h5" mt={3} sx={{color: "#aaa"}} textAlign="center" width="100%">Click on an item to track it</Typography>
                                        )
                                    }
                                </Grid>
                            </Grid>
                        </Box>

                        {/* MOBILE VIEW */}
                        <Box display={{xs: "block", md: "none"}}>
                            <Grid container spacing={2} rowSpacing={3} alignItems="center">
                                <Grid item xs={12} md={5}>
                                    <Grid spacing={1} container>
                                        {
                                            popularItems?.map(({image, name, }) => (
                                                <Grid item xs={12} md={12}>
                                                    <div className={`track-item ${(track === name) && "active"}`}>
                                                        <Box display="flex" sx={{alignItems: {xs: "center", lg: "start"}}}>
                                                            <img src={image && image} alt={name && name} className="popular-img"/>
                                                            <Box flex={1} ml={3} sx={{paddingY: {xs: 1}}}>
                                                                <Typography sx={{fontSize: {xs: "1.2rem"}, color: "#333", fontWeight: 500 }}>{ name && name }</Typography>
                                                                <Box mt={1}>
                                                                    <button className="addBtn" onClick={() => setTrackMobile(name) }>
                                                                        Track this item
                                                                    </button>
                                                                </Box>
                                                            </Box>
                                                        </Box>

                                                        <div className={`mobile-track-container ${(trackMobile === name) && "active"}`}>
                                                            <Collapse in={trackMobile === name}>
                                                                <Box p={3} sx={{borderBottom: "1px solid #ccc"}}>
                                                                    <IconButton onClick={() => setTrackMobile("")}>
                                                                        <IoArrowBackSharp />
                                                                    </IconButton>
                                                                </Box>
                                                                <Box p={4}>
                                                                    <Stack spacing={2}>
                                                                        <TrackDetails
                                                                            passed={true}
                                                                            title="Order placed"
                                                                            date="11/12/2021"
                                                                        />

                                                                        <TrackDetails
                                                                            passed={true}
                                                                            title="Order placed"
                                                                            date="11/12/2021"
                                                                        />

                                                                        <TrackDetails
                                                                            passed={true}
                                                                            title="Order placed"
                                                                            date="11/12/2021"
                                                                        />

                                                                        <TrackDetails
                                                                            passed={true}
                                                                            title="Order placed"
                                                                            date="11/12/2021"
                                                                        />

                                                                        <TrackDetails
                                                                            passed={true}
                                                                            title="Delivered"
                                                                            date="11/12/2021"
                                                                        />
                                                                    </Stack>
                                                                </Box>
                                                            </Collapse>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={7} sx={{display: {xs: "none", md: "block"}}}>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </PageMain>
            </BaseContainer>
            <Footer />
        </Box>
    )
}


export default Tracking
