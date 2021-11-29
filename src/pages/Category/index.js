import { useContext } from "react"
import { Box, Grid } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header"
import BaseContainer from "../../components/BaseContainer"
import BreadCrumb from "../../components/BreadCrumb"
import Seo from "../../components/Seo"
import PageMain from "../../components/PageMain"
import SideBarMenu from "../../components/SideBarMenu"
import CustomRadioButton from "../../components/CustomRadioButton"
import CustomCheckBox from "../../components/CustomCheckBox"
import LatestItem from "../../components/LatestItem"
import Footer from "../../components/Footer"
import Pagination from "../../components/Pagination"
import SideBar from "../../components/SideBar"

import {ShopContext} from "../../contexts/Shop"
import {CartContext} from "../../contexts/Cart"
import {SideBarContext} from "../../contexts/SideBar"

import { latestItems } from "../../apis/data"


const Category = () => {
    const { category } = useParams()
    const { handleFavorite } = useContext(ShopContext)
    const  { handleOpen, handleClose, isOpen }  = useContext(SideBarContext)
    const  { addItem }  = useContext(CartContext)


    return (
        <Box>
            <Seo title={`Ebeano Market | Category - ${category}`} />
            <Header isSticky={true} mode="dark" />

            <SideBar handleClose={handleClose} isOpen={isOpen}>
                <SideBarMenu title="category">
                    <li>
                        <Link to="/" className="text-hover">Women's fashion</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">men's fashion</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">clothing</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">watches</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">sunglasses</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">boys's fashion</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">girl's fashion</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">top brands</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-hover">unisex</Link>
                    </li>
                </SideBarMenu>

                <SideBarMenu title="price">
                    <li>
                        <CustomRadioButton label="2000">
                            <span>Below &#8358; 2,000</span>
                        </CustomRadioButton>
                    </li>

                    <li>
                        <CustomRadioButton checked={true} label="2000">
                            <span>&#8358; 2,000 - &#8358; 10,000</span>
                        </CustomRadioButton>
                    </li>

                    <li>
                        <CustomRadioButton label="2000">
                            <span>&#8358; 10,000 - &#8358; 30,000</span>
                        </CustomRadioButton>
                    </li>

                    <li>
                        <CustomRadioButton label="2000">
                            <span>&#8358; 30,000 - &#8358; 50,000</span>
                        </CustomRadioButton>
                    </li>

                    <li>
                        <CustomRadioButton label="2000">
                            <span>&#8358; 50,000 - above</span>
                        </CustomRadioButton>
                    </li>
                </SideBarMenu>

                <SideBarMenu title="color">
                    <li>
                        <CustomCheckBox checked={true}>
                            <span>red</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox>
                            <span>black</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox checked={true}>
                            <span>orange</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox >
                            <span>purple</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox >
                            <span>white</span>
                        </CustomCheckBox>
                    </li>
                </SideBarMenu>

                <SideBarMenu title="size">
                    <li>
                        <CustomCheckBox checked={false}>
                            <span>m</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox checked={false}>
                            <span>l</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox checked={true}>
                            <span>XL</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox checked={false}>
                            <span>XXL</span>
                        </CustomCheckBox>
                    </li>

                    <li>
                        <CustomCheckBox checked={true}>
                            <span>XXXL</span>
                        </CustomCheckBox>
                    </li>
                </SideBarMenu>
            </SideBar>

            <BaseContainer>
                <Box my={2}>
                    <BreadCrumb breadcrumb={`category/${category}`} />
                </Box>
                <PageMain title={category} handleOpen={handleOpen} hasSide={true} products={147940}>
                    <Box>
                        <Grid container >
                            <Grid item xs={0} md={3}  sx={{display: {xs: "none", md: "block"}}}>
                                <SideBarMenu title="category">
                                    <li>
                                        <Link to="/" className="text-hover">Women's fashion</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">men's fashion</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">clothing</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">watches</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">sunglasses</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">boys's fashion</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">girl's fashion</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">top brands</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-hover">unisex</Link>
                                    </li>
                                </SideBarMenu>

                                <SideBarMenu title="price">
                                    <li>
                                        <CustomRadioButton label="2000">
                                            <span>Below &#8358; 2,000</span>
                                        </CustomRadioButton>
                                    </li>
                                    <li>
                                        <CustomRadioButton checked={true} label="2000">
                                            <span>&#8358; 2,000 - &#8358; 10,000</span>
                                        </CustomRadioButton>
                                    </li>
                                    <li>
                                        <CustomRadioButton label="2000">
                                            <span>&#8358; 10,000 - &#8358; 30,000</span>
                                        </CustomRadioButton>
                                    </li>
                                    <li>
                                        <CustomRadioButton label="2000">
                                            <span>&#8358; 30,000 - &#8358; 50,000</span>
                                        </CustomRadioButton>
                                    </li>
                                    <li>
                                        <CustomRadioButton label="2000">
                                            <span>&#8358; 50,000 - above</span>
                                        </CustomRadioButton>
                                    </li>
                                </SideBarMenu>

                                <SideBarMenu title="color">
                                    <li>
                                        <CustomCheckBox checked={true}>
                                            <span>red</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox>
                                            <span>black</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox checked={true}>
                                            <span>orange</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox >
                                            <span>purple</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox >
                                            <span>white</span>
                                        </CustomCheckBox>
                                    </li>
                                </SideBarMenu>

                                <SideBarMenu title="size">
                                    <li>
                                        <CustomCheckBox checked={false}>
                                            <span>m</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox checked={false}>
                                            <span>l</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox checked={true}>
                                            <span>XL</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox checked={false}>
                                            <span>XXL</span>
                                        </CustomCheckBox>
                                    </li>

                                    <li>
                                        <CustomCheckBox checked={true}>
                                            <span>XXXL</span>
                                        </CustomCheckBox>
                                    </li>
                                </SideBarMenu>
                            </Grid>

                            <Grid item xs={0} md={9}>
                                <Grid container spacing={2} rowSpacing={3}>
                                {
                                    latestItems.map((item, index) => {
                                        const {name, image, price} = item
                                        return (
                                            <Grid item xs={6} sm={4} md={3} key={index}>
                                                <LatestItem
                                                    handleFavorite={handleFavorite}
                                                    handleAddToCart={addItem}
                                                    name={name}
                                                    price={price}
                                                    item={item}
                                                    image={image}

                                                />
                                            </Grid>
                                        )
                                    })
                                }
                                </Grid>
                            </Grid>
                        </Grid>

                        <Box mt={18}>
                            <Pagination count={50} />
                        </Box>
                    </Box>
                </PageMain>
            </BaseContainer>
            <Footer />
        </Box>
    )
}


export default Category
