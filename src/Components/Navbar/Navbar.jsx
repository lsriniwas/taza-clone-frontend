import { Badge } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../../Styles/Navbar/Navbar.module.css"
import styles from "../../Styles/Navbar/Navbar.module.css"
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Login } from '../Login/Login'
import { useSelector } from 'react-redux'

const LightTooltip = withStyles(() => ({
    tooltip: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        fontSize: 12,
        wordSpacing: '7px',
        width: '225px',
        zIndex: 999999
    }
}))(Tooltip);

export const Navbar = () => {
    const matches = useMediaQuery('(max-width:1156px)')
    const menuTag = useMediaQuery('(max-width:430px)')
    const [login, setLogin] = useState(false);
    const [buy, setBuy] = useState(false)
    const [learn, setLearn] = useState(false)
    const [visit, setVisit] = useState(false)
    const [menu, setMenu] = useState(false)
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const totalCartItems = useSelector(state => state.cartorderReducer.totalItems)

    React.useEffect(() => {
        if (!matches) {
            setMenu(false)
        }
    }, [matches])



    const handleMenu = () => {
        setMenu(prev => !prev)
    }

    const handleOpen = () => {
        setLogin(true);
    };

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <NavLink to="#">Free shipping on orders $50+</NavLink>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.grid_item}>
                    <div className={styles.grid_item_1}>
                        <div className={styles.top_margin}></div>
                        <div className={styles.link}>
                            <ul>
                                {matches &&
                                    <li>
                                        <p to="/" title="Menu" className={styles.menuIcon} onClick={handleMenu}>
                                           {!menuTag?'Menu':''}
                                        </p>
                                    </li>
                                }
                                {!matches &&
                                    <>
                                        <li onMouseEnter={() => setBuy(true)} onMouseLeave={() => setBuy(false)}>
                                            <NavLink to="/" title="Buy">BUY</NavLink>
                                        </li>
                                        <li onMouseEnter={() => setLearn(true)} onMouseLeave={() => setLearn(false)} >
                                            <NavLink to="/" title="Learn">LEARN</NavLink>
                                        </li>
                                        <li onMouseEnter={() => setVisit(true)} onMouseLeave={() => setVisit(false)} >
                                            <NavLink to="/" title="Visit">VISIT</NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>

                    </div>
                    <div className={styles.grid_item_2}>
                        <div className={styles.grid_item_2_wrapper}>
                            <NavLink to="/">
                                <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/8/assets/logo.png" alt="" />
                            </NavLink>
                        </div>

                    </div>
                    <div className={styles.grid_item_3}>
                        <div className={styles.grid_item_3_top}>
                            <LightTooltip title="Free shipping on orders over $50. Offer applicable to contiguous US addresses only. Total order price must be over $50 AFTER any discounts are applied. Orders ship one business day after being placed.">
                                <NavLink to="/" className={styles.freeinfo}>
                                    Free shipping on orders $50+
                                    </NavLink>
                            </LightTooltip >
                        </div>
                        {
                            matches && <div className={styles.top_margin}></div>
                        }
                        <div className={styles.grid_item_3_bottom} >
                            <ul>
                                <li><NavLink to="/mail" title="Join Our Mailing List">Join Our Mailing List</NavLink></li>
                                <li><NavLink to="#" title="Contact">Contact</NavLink></li>
                                <li>
                                    {
                                        isAuth ?
                                            <NavLink to="/account" title="Account">Account</NavLink>
                                            :
                                            <NavLink to="#" onClick={handleOpen} title="Sign In">  Sign In</NavLink>
                                    }
                                </li>

                                <li><NavLink to="#" title="Search" className={styles.searchIcon}></NavLink></li>
                                <li><NavLink to="/cart">
                                    <Badge color="secondary" badgeContent={totalCartItems}>
                                        <div className={styles.cartIcon}>
                                        </div>
                                    </Badge>
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {buy && <div className={styles.hoverData} onMouseEnter={() => setBuy(true)} onMouseLeave={() => setBuy(false)}>
                <div className={styles.hoverData_wrapper}>
                    <ul>
                        <li><NavLink to="/collections/gifts-collections" title="Gifts">Gifts</NavLink></li>
                        <li><NavLink to="/collections/amaze-bars" title="Chocolate Bars">Chocolate Bars</NavLink></li>
                        <li><NavLink to="/collections/chocolate-covered-nuts" title="Chocolate Covered Treats">Chocolate Covered Treats</NavLink></li>
                        <li><NavLink to="/collections/discs" title="Chocolate Discs">Chocolate Discs</NavLink></li>
                        <li><NavLink to="/collections/dark-bark" title="Chocolate Bark">Chocolate Bark</NavLink></li>
                        <li><NavLink to="/collections/see-it-all" title="Everything">Everything</NavLink></li>
                        <li><NavLink to="https://www.tazachocolate.com/apps/store-locator" title="Find Us in Stores">Find Us in Stores</NavLink></li>
                    </ul>
                </div>
            </div>}
            { learn && <div className={styles.hoverData} onMouseEnter={() => setLearn(true)} onMouseLeave={() => setLearn(false)}>
                <div className={styles.hoverData_wrapper}>
                    <ul>
                        <li><NavLink to="/" title="About Taza">About Taza</NavLink></li>
                        <li><NavLink to="/" title="Our Process">Our Process</NavLink></li>
                        <li><NavLink to="/" title="Taza Direct Trade">Taza Direct Trade</NavLink></li>
                        <li><NavLink to="/" title="Recipes">Recipes</NavLink></li>
                        <li><NavLink to="/" title="Blog">Blog</NavLink></li>
                        <li><NavLink to="/" title="Wholesale">Wholesale</NavLink></li>
                    </ul>
                </div>
            </div>}
            { visit && <div className={styles.hoverData} onMouseEnter={() => setVisit(true)} onMouseLeave={() => setVisit(false)} >
                <div className={styles.hoverData_wrapper}>
                    <ul>
                        <li><NavLink to="/" title=" Our Factory Store"> Our Factory Store</NavLink></li>
                        <li><NavLink to="/" title="Tours &amp; Events">Tours &amp; Events</NavLink></li>
                    </ul>
                </div>
            </div>}
            { menu && <div className={styles.hoverData} style={{ flexDirection: 'column' }}>
                <div className={styles.hoverData_wrapper}>
                    <ul>
                        <li onClick={()=>
                           { setBuy(true)
                            setLearn(false)
                            setVisit(false)}
                            }
                        >
                            <NavLink to="/" title="Buy">BUY</NavLink>
                        </li>
                        <li onClick={()=>{
                             setLearn(true)
                             setBuy(false)
                             setVisit(false)}
                             }>
                            <NavLink to="/" title="Learn">LEARN</NavLink>
                        </li>
                        <li onClick={() => {
                                setVisit(true)
                                 setBuy(false)
                                 setLearn(false)}
                        } >
                            <NavLink to="/" title="Visit">VISIT</NavLink>
                        </li>
                    </ul>
                </div>
                {buy && <div className={styles.menu_hover}>
                    <ul>
                        <li><NavLink to="/collections/gifts-collections" title="Gifts">Gifts</NavLink></li>
                        <li><NavLink to="/collections/amaze-bars" title="Chocolate Bars">Chocolate Bars</NavLink></li>
                        <li><NavLink to="/collections/chocolate-covered-nuts" title="Chocolate Covered Treats">Chocolate Covered Treats</NavLink></li>
                        <li><NavLink to="/collections/discs" title="Chocolate Discs">Chocolate Discs</NavLink></li>
                        <li><NavLink to="/collections/dark-bark" title="Chocolate Bark">Chocolate Bark</NavLink></li>
                        <li><NavLink to="/collections/see-it-all" title="Everything">Everything</NavLink></li>
                        <li><NavLink to="https://www.tazachocolate.com/apps/store-locator" title="Find Us in Stores">Find Us in Stores</NavLink></li>
                    </ul>
                </div>}
                {visit && <div className={styles.menu_hover}>
                    <ul>
                        <li><NavLink to="/" title="About Taza">About Taza</NavLink></li>
                        <li><NavLink to="/" title="Our Process">Our Process</NavLink></li>
                        <li><NavLink to="/" title="Taza Direct Trade">Taza Direct Trade</NavLink></li>
                        <li><NavLink to="/" title="Recipes">Recipes</NavLink></li>
                        <li><NavLink to="/" title="Blog">Blog</NavLink></li>
                        <li><NavLink to="/" title="Wholesale">Wholesale</NavLink></li>
                    </ul>
                </div>}
                {learn && <div className={styles.menu_hover}>
                    <ul>
                        <li><NavLink to="/" title=" Our Factory Store"> Our Factory Store</NavLink></li>
                        <li><NavLink to="/" title="Tours &amp; Events">Tours &amp; Events</NavLink></li>
                    </ul>
                </div>}
            </div>}

            {
                login && <Login login={login} setLogin={setLogin} />
            }

        </div>
    )
}
