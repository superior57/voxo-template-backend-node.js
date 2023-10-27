const express = require('express')
const router = express.Router()
module.exports = router
const { getProduct, getProductById } = require('../Controller/Product/ProductController')
const { getBanner } = require('../Controller/Banner/BannerController')
const { getHomeSlider } = require('../Controller/HomeSlider/HomeSliderController')
const { getCategoryBanner } = require('../Controller/CategoryBanner/CategoryBannerController')
const { getPopularCard } = require('../Controller/PopularCard/PopularController')
const { getTabSection } = require('../Controller/TabSection/TabsectionController')
const { getCategoryMenu } = require('../Controller/CategoryMenu/CategoryMenuController')
const { getHeaders } = require('../Controller/Header/HeaderController')
const { getFooter } = require('../Controller/Footer/FooterController')
const { getBlog } = require('../Controller/Blog/BlogController')
const { getPortfolio } = require('../Controller/Portfolio/PortfolioController')
const { PostCartData, GetCartData, DeleteCartData } = require('../Controller/Cart/cartController')
const { PostCompareData, GetCompareData, DeleteComapareData } = require('../Controller/Comapre/compareController')
const { PostWishlistData, GetWishlistData, DeleteWishlistData } = require('../Controller/Wishlist/WishlistController')


// Api Routes

//Header
router.get('/header', getHeaders)

//Footer
router.get('/footer', getFooter)

//Product
router.get('/products', getProduct)

//ProductById
router.get('/product/:id', getProductById)

//Banner
router.get('/banner', getBanner)

//HomeSlider
router.get('/homeslider', getHomeSlider)

//CategoryBanner
router.get('/categorybanner', getCategoryBanner)

//Popular Card
router.get('/popular', getPopularCard)

//Tab Section
router.get('/tabsection', getTabSection)

//Category Menu
router.get('/categorymenu', getCategoryMenu)

//Blog
router.get('/blog', getBlog)

//Portfolio
router.get('/portfolio', getPortfolio)

// Cart Post
router.post('/addtocart', PostCartData)
router.get('/getcart', GetCartData)
router.delete('/remove/cart/:id', DeleteCartData)

//Wishlist 
router.post('/addtowishlist', PostWishlistData)
router.get('/getwishlist', GetWishlistData)
router.delete('/remove/wishlist/:id', DeleteWishlistData)


// Compare list
router.post('/addtocompare/:id', PostCompareData)
router.get('/getcompare', GetCompareData)
router.delete('/remove/compare/:id', DeleteComapareData)