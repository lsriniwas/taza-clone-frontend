import { Breadcrumbs, Divider,  makeStyles} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory} from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../Styles/ProductPage/ProductPage.module.css"
import styles from "../Styles/ProductPage/ProductPage.module.css"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { addToCart } from '../Redux/Cart_and_Orders/actions';
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../Redux/Collections/actions";

const useStyles=makeStyles(()=>({
    root:{
        padding:'15px 16%',
        fontSize:'12px',
    }
    
    

}))


export const Product = () => {
    const classes=useStyles();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const [itemAdded, setItemAdded] = useState(false)
    const [breadCrumb,setBreadCrumb]=useState("");
    const product = useSelector(state=>state.collectionsBarReducer.productDetails)
    const history=useHistory(); 
    React.useEffect(() => {
        window.scrollTo(0, 0)
        const {search,state}=history.location
        const payload={
            _id:search.split("?")[1],
            url:state.url
            
        }
        setBreadCrumb(state.url)
        dispatch(getProductDetails(payload))
        document.title = ` ${product.name||'Chocolate'} | Taza Chocolate`

    },[history.location,dispatch])
    const handleAddToCart = (item) => {
        const payload = {
            id: item.id,
            img: item.src,
            qty: Number(qty),
            price: item.price,
            name: item.name
        }
        dispatch(addToCart(payload, qty))
        setItemAdded(true)

    }

    return (
        <div className={styles.root}>

            <Breadcrumbs separator="›" className={classes.root}>
                   <NavLink to="/" >
                     HOME
                     </NavLink>
                    <NavLink to={`/collections/${breadCrumb}`}>
                    {breadCrumb.toUpperCase()}
                    </NavLink>
                    <p>{product.name}</p>
            </Breadcrumbs>
            <Divider />
            <div className={styles.body}>
                <br/>
                <div className={styles.product_wrapper}>
                    <div className={styles.product_img}>
                        <div><img src={product.src} alt={product.alt} /></div>
                    </div>
                   
                    <div className={styles.product_info}>
                        <h1>{product.name}</h1>
                        <div className={styles.product_desc}>
                            {product.description}
                        </div>
                        <div className={styles.product_price_qty}>
                            <div className={styles.product_price}>
                                <span>PRICE</span>
                                <br />
                                <p>${product.price}</p>
                            </div>
                            <div>
                                <span>QTY</span>
                                <span >
                                    <input type="number" className={styles.qty_number} value={qty} onChange={(e) => e.target.value <= 0 ? setQty(1) : setQty(e.target.value)} id="" />
                                </span>
                            </div>
                        </div>
                        {itemAdded && <div className={styles.view_cart}>
                            <DoneOutlineIcon fontSize="small" /> ITEM ADDED TO CART SUCCESSFULLY!
                        </div>}
                        <div className={styles.addtocart_button}>
                            <button onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <Divider />
                <div className={styles.product_wrapper}>
                    <div className={styles.product_img} >
                        <div className={styles.product_details}>
                            <h4 style={{ margin: '20px 0px', fontWeight: 700, color: '#F2923C' }}>
                                DETAILS
                             </h4>
                            {product.details}
                            <br />
                            <NavLink to="#" style={{ color: '#2ebbcd' }}>
                                View Nutrition Information
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.product_info}>
                        <h4 style={{ margin: '20px 0px', fontWeight: 700, color: '#F2923C' }}>
                            CERTIFICATIONS
                         </h4>
                        <p>
                            This product is certified USDA Organic, Direct Trade, Gluten Free and Kosher Pareve, and Non-GMO Project Verified. It is also dairy free, soy free, and vegan.
                         </p>
                        <ul className={styles.images} style={{ display: 'flex' }}>
                            <li><img src="https://cdn.shopify.com/s/files/1/0974/7668/files/certified-usda-organic.jpg?4242370048212312334" alt="USDA Organic Poduct Certification" /></li>
                            <li><img src="https://cdn.shopify.com/s/files/1/0974/7668/files/certified-direct-trade.jpg?4242370048212312334" alt="Direct Trade Product Certification" /></li>
                            <li><img src="https://cdn.shopify.com/s/files/1/0974/7668/files/certified-non-gmo.jpg?4242370048212312334" alt="Non-GMO Product Certification" /></li>
                            <li><img src="https://cdn.shopify.com/s/files/1/0974/7668/files/certified-gf.jpg?4242370048212312334" alt="Gluten Free Product Certification" /></li>
                            <li><img src="https://cdn.shopify.com/s/files/1/0974/7668/files/certified-dairy-free.jpg?4242370048212312334" alt="Dairy Free Product Certification" /></li>
                        </ul>
                    </div>
                </div>
                <Divider />
            </div>

        </div>

    )
}