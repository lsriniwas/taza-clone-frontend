import React, { useEffect } from 'react'
import { fetchCollectionBars } from '../Redux/Collections/actions'
import { useDispatch, useSelector } from "react-redux";
import styles from "../Styles/BarPage/BarPage.module.css"
import "../Styles/BarPage/BarPage.module.css"
import {Grid, Typography } from '@material-ui/core';
import {  useHistory } from 'react-router-dom';
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
            pathname:'/collections/product',
            search: `?${product._id}`,
            state:{
                url:'amaze-bars'
            }
        }
        history.push(data)
    }

   
    return !loading && (
        <div className={styles.root}>
           
            <div className={styles.title_img}
            
            style={{
                backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/page_banner_6_image.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '320px',
                marginBottom: '9px',
                position: 'relative',
                display: 'grid',
                placeItems: 'center',
            }}
            
            >
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
                                            <button className={styles.buy_button}  onClick={()=>handleProduct(bar)}  >
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
