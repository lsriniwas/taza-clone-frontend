import React from 'react'
import styles from "../../Styles/Footer/Footer.module.css"
import "../../Styles/Footer/Footer.module.css"
import { Grid } from "@material-ui/core"
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_upper}>
                    <div className={styles.footer_upper_left}>
                        <Grid container className={styles.grid_item_list}>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3 className="h3"><NavLink to="buy.com" className={styles.buylink}>BUY</NavLink></h3>
                                <ul>
                                    <li><NavLink to="/collections/gifts-collections" title="Gifts">Gifts</NavLink></li>
                                    <li><NavLink to="/collections/dark-bark" title="Dark Bark">Dark Bark</NavLink></li>
                                    <li><NavLink to="/collections/NavLinkmaze-bars" title="Chocolate Bars">Chocolate Bars</NavLink></li>
                                    <li><NavLink to="/collections/discs" title="Chocolate Discs">Chocolate Discs</NavLink></li>
                                    <li><NavLink to="/collections/chocolate-covered-nuts" title="Chocolate Covered">Chocolate Covered</NavLink></li>
                                    <li><NavLink to="/collections/baking" title="Bulk and Baking">Bulk and Baking</NavLink></li>
                                    <li><NavLink to="/collections/80-cacao-up" title="80% Cacao &amp; Up">80% Cacao &amp; Up</NavLink></li>
                                </ul>
                            </Grid>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3 className="h3">LEARN</h3>
                                <ul>
                                    <li><NavLink to="/pages/NavLinkbout-taza" title="About Taza">About Taza</NavLink></li>
                                    <li><NavLink to="/pages/our-process" title="Our Process">Our Process</NavLink></li>
                                    <li><NavLink to="/pages/taza-direct-trade" title="Taza Direct Trade">Taza Direct Trade</NavLink></li>
                                    <li><NavLink to="/pages/recipes" title="Recipes">Recipes</NavLink></li>
                                    <li><NavLink to="/blogs/news" title="Stone Ground Blog">Stone Ground Blog</NavLink></li>
                                    <li><NavLink to="/pages/wholesale" title="Wholesale">Wholesale</NavLink></li>
                                </ul>
                            </Grid>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3 className="h3">VISIT</h3>
                                <ul>
                                    <li><NavLink to="/pages/factory-store" title=" Our Factory Store"> Our Factory Store</NavLink></li>
                                    <li><NavLink to="/pages/tours-events" title="Tours &amp; Events">Tours &amp; Events</NavLink></li>
                                </ul>
                            </Grid>
                            <Grid className={styles.grid_item} item sm={3} md={3} lg={3} xl={3} >
                                <h3 className="h3">More</h3>
                                <ul>
                                    <li><NavLink to="/pages/contact-us" title="Contact Us">Contact Us</NavLink></li>
                                    <li><NavLink to="/pages/faqs" title="FAQs">FAQs</NavLink></li>
                                    <li><NavLink to="/pages/shipping-info" title="Shipping Info">Shipping Info</NavLink></li>
                                    <li><NavLink to="https://www.tazachocolate.com/pages/return-policy" title="Return Policy">Return Policy</NavLink></li>
                                    <li><NavLink to="/pages/careers" title="Careers">Careers</NavLink></li>
                                    <li><NavLink to="/NavLinkpps/store-locator" title="Find Us in Stores">Find Us in Stores</NavLink></li>
                                    <li><NavLink to="/pages/press" title="Press">Press</NavLink></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={styles.footer_upper_right}>
                        <h3 className="h3" style={{color:'#fff'}} >JOIN OUR MAILING LIST</h3>
                        <form action="" className={styles.form_inp}>
                            <input type="text" name="" id="" placeholder="Name" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <input type="submit" value="SIGN UP" />
                        </form>
                        <ul className={styles.footersocial}>
                            <li><NavLink to="##" className={styles.facebook}></NavLink></li>
                            <li><NavLink to="##" className={styles.instagram}></NavLink></li>
                            <li><NavLink to="##" className={styles.pinterest}></NavLink></li>
                            <li><NavLink to="##" className={styles.twitter}></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_lower}>
                    <div className={styles.hr}>
                        <hr className={styles.thin} />
                    </div>
                    <div className={styles.footer_lower_bottom}>
                        <div className={styles.footer_lower_left}>
                            <div className={styles.footer_logo}>
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/8/NavLinkssets/taza-white-footer.png" width="77px" alt="" />
                            </div>
                            <div className={styles.credits}>
                                <h4>TAZA CHOCOLATE</h4>
                                <address>561 Windsor Street, Somerville MA 02143561 Windsor Street, Somerville MA 02143</address>
                                <p className={styles.copyright}>
                                    © 2021 Taza Chocolate. All rights reserved.<br />
                                Web design by <NavLink to="http://www.jumpingjackrabbit.com/" target="_blank">Jackrabbit</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className={styles.footer_lower_right}>
                            <div className={styles.badges}>
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/taza-badges-all_400x.png" className={styles.first} alt="" />
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/taza-badges-all-stacked_400x.png" className={styles.second} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
    )
}
