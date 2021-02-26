import React from 'react'
import {NavLink} from "react-router-dom"
import "../../Styles/Body/GridBody.module.css"
import styles from "../../Styles/Body/GridBody.module.css"
export const GridBody = () => {
    return (
        // 
        <div className={styles.root}>
            <div className={styles.upper}>
                <NavLink to="/" >
                    <div className={styles.upper_inner_wrapper}>
                    <p className={styles.title}>Shop</p>
                            <p><span></span></p>
                            <div className={styles.inner_content}>
                                <h2 >AMAZE BARS</h2>
                            </div>
                    </div>
                    <div className={styles.smooth_hover}></div>
                </NavLink>
                <NavLink to="/"  >
                    <div className={styles.upper_inner_wrapper}>
                    <p className={styles.title}>Shop</p>
                            <p><span></span></p>
                            <div className={styles.inner_content}>
                            <h2>CHOCOLATE DISCS</h2> 
                            </div>
                    </div>
                    <div className={styles.smooth_hover}></div>
                </NavLink>
                <NavLink to="/" >
                    <div className={styles.upper_inner_wrapper}>
                    <p className={styles.title}>Shop</p>
                            <p><span></span></p>
                            <div className={styles.inner_content}>
                            <h2>GIFTS & COLLECTIONS</h2>
                            </div>
                    </div>
                    <div className={styles.smooth_hover}></div>
                </NavLink>
               
            </div>
            <div className={styles.lower}>
                <div className={styles.lower_left}>
                    <div className={styles.lower_left_wrapper}>
                        <div className={styles.content_box}>
                            <span></span>
                            <h3>Read Our Transparency Report</h3>
                            <p>Learn more about how Taza Direct Trade breaks the (chocolate) mold!</p>
                            <NavLink to="/" title="Read More">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className={styles.lower_right}>
                </div>
            </div>
        </div>

    )
}
