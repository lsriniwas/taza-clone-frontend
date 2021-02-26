import React, { useEffect } from 'react'
import { fetchCollectionBars } from '../Redux/Collections/actions'
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/BarPage/BarPage.module.css"
import "../Styles/BarPage/BarPage.module.css"
import { Breadcrumbs,Grid, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
export const BarPage = () => {
    const dispatch = useDispatch()
    const bars = useSelector(state => state.collectionsBarReducer.bars)
    const loading = useSelector(state => state.collectionsBarReducer.isLoading)
    const history = useHistory()


    
    
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Bars —Taza Chocolate`
        dispatch(fetchCollectionBars())
    }, [])
    const handleProduct=(product)=>{
        const data={
            pathname:'/collections/amaze-bars/product',
            search: `?${product._id}`,
            state:product
        }
        history.push(data)
    }

   
    return !loading && (
        <div className={styles.root}>
            <div>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link to="/" >
                        HOME
                     </Link>
                    <Link to="/bars">
                        BUY
                    </Link>
                    <Typography color="textPrimary">BAR</Typography>
                </Breadcrumbs>
            </div>
            <div className={styles.title_img}>
                <div>
                    <h1>bars</h1>
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <span>Our Chocolate Bars take stone ground chocolate to another dimension by mixing incredible flavor combinations into our minimally processed, bold chocolate.</span>
                </div>
            </div>
            <div className={styles.body_wrapper}>
                <div>
                    <Grid container  justify="flex-start"  >
                        {
                            bars?.map((bar,i) =>
                                <Grid item xs={12} sm={6} md={4} lg={4} key={bar.id} style={{padding: '40px 0px',position:'relative',border:'1px solid #E1E1E1'}} >
                                    
                                       {i%2===0 && <div className={styles.newproduct}></div>}
                                        <div className={styles.img_div} >
                                        <div onClick={()=>handleProduct(bar)} title="Taza dairy-free plant-based Almond Milk Chocolate" >
                                            <img src={bar.src} alt={bar.alt} />
                                        </div>
                                        </div>
                                        <Typography title="Almond Milk Classic" variant="h6" className={styles.bar_name} >
                                            <div to="">
                                                {bar.name}
                                            </div>
                                        </Typography>
                                        <p>
                                            ${bar.price.toFixed(2)}
                                        </p>
                                        <p>
                                        <span title="Buy">
                                            <button className={styles.buy_button} >
                                                BUY
                                            </button>
                                        </span>
                                        </p>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </div>
        </div>
    )
}
