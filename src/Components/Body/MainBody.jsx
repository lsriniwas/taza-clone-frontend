import React from 'react'
import { GridBody } from './GridBody'
import "../../Styles/Body/MainBody.module.css"
import styles from "../../Styles/Body/MainBody.module.css"
import { NavLink } from 'react-router-dom'
export const MainBody = () => {
    React.useEffect(()=>{
        document.title = `Taza Chocolate | Organic Stone Ground Chocolate for Bold Flavor`
    })
    return (
        <>
        <div style={{position:'relative'}}>
            <NavLink to="/">
                <div className={styles.root}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.content}>
                            <span className={styles.bigtext_line0}>20% OFF</span>
                            <span className={styles.bigtext_line1}>ULTRA DARK</span>
                            <span className={styles.script_lines}>CHOCOLATE</span>
                            <span className={styles.bigtext_line3}>80% CACAO &amp; UP</span>
                            <span className={styles.bigtext_line4}>CODE: HELLONEW</span>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
            <GridBody />
        </>
    )
}
