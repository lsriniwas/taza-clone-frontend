import React from 'react';
import  "../../Styles/FreeShipping/FreeShipping.module.css";
import styles from "../../Styles/FreeShipping/FreeShipping.module.css";
export const FreeShipping = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.outer}>
                    <p className={styles.freeshipping}>Free Shipping!</p>
                    <div className={styles.inner_content}>
                        <p>Get FREE SHIPPING on orders $50+! Contiguous United States addresses only. (Total order price must be over $50 AFTER any discounts are applied.) Orders now ship within one business day!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
