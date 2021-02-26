import React from 'react'
import styles from "../../Styles/SocialMedia/SocialMedia.module.css"
import "../../Styles/SocialMedia/SocialMedia.module.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink } from 'react-router-dom';
export const SocialMedia = () => {
    const matches = useMediaQuery('(max-width:758px)');
    const [open,setOpen]=React.useState(false)
    React.useEffect(()=>{
        if(matches){
            setOpen(false)
        }
    },[matches])
    return (
        <div className={styles.root}>
            <span onClick={()=>setOpen(prev=>!prev)}>SHARE</span>
            {!matches &&
              <ul>
                <li><NavLink to="/" className={styles.facebook} title="Facebook"></NavLink></li>
                <li><NavLink to="/" className={styles.twitter} title="Twitter"></NavLink></li>
                <li><NavLink to="/" className={styles.pinterest} title="Pinterest"></NavLink></li>
                <li><NavLink to="/" className={styles.email} title="Email"></NavLink></li>
            </ul>}
            {open && matches &&
              <ul>
                <li><NavLink to="/" className={styles.facebook} title="Facebook"></NavLink></li>
                <li><NavLink to="/" className={styles.twitter} title="Twitter"></NavLink></li>
                <li><NavLink to="/" className={styles.pinterest} title="Pinterest"></NavLink></li>
                <li><NavLink to="/" className={styles.email} title="Email"></NavLink></li>
            </ul>}
        </div>
    )
}
