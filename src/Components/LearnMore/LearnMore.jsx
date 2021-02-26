import React, { Component } from 'react'
import "../../Styles/LearnMore/LearnMore.module.css"
import styles from "../../Styles/LearnMore/LearnMore.module.css"
export class LearnMore extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.sub_root}>
                    <div className={styles.wrapper}>
                        <div className={styles.outer_border}>
                            <div className={styles.title}>
                                <p>Fair for all</p>
                            </div>
                            <div className={styles.inner_data}>
                            <h2>WE BELIEVE BOTH FARMER AND CHOCOLATE MAKER SHOULD SHARE THE REWARD OF MAKING A GREAT PRODUCT</h2>
                            </div>
                            <div className={styles.learn_more_button}>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
