import { Divider, Fade, makeStyles, Modal, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, userLogout } from '../../Redux/isAuth/actions'
import "../../Styles/Profile/Profile.module.css"
import styles from "../../Styles/Profile/Profile.module.css"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { requestUserOrder } from '../../Redux/Cart_and_Orders/actions'

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))


export const Profile = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.authReducer.profile)
    const addresses = useSelector(state => state.authReducer.profile.addresses)
    const orders = useSelector(state => state.cartorderReducer.user_ordered_items)
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    React.useEffect(() => {

        dispatch(getUserProfile())
        document.title = `User Profile |Taza Chocolate `
        const payload = {
            id: profile._id
        }
        dispatch(requestUserOrder(payload))
    }, [])

    const handleLogout = () => {
        dispatch(userLogout())
    }
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div>
                    <h1>MY ACCOUNT</h1>
                </div>
            </div>
            <div className={styles.profile_wrapper}>
                <div className={styles.orders} >
                    <h1>ORDERS HISTORY</h1>
                    {orders.length !== 0 ?
                        <div className={styles.orders_list}>
                            {orders?.map(order =>
                                <div>
                                    <div>
                                        Date:{order.date}
                                        {
                                            order.items?.map(item => {
                                                return (
                                                    <div className={styles.item}>
                                                        <div className={styles.item_checkout} >
                                                            <div className={styles.item_checkout_img}>
                                                                <img src={item.img} alt="" />
                                                            </div>
                                                        </div>
                                                        <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                                            {item.name}
                                                        </span>
                                                        <div>
                                                            {item.qty}
                                                        </div>
                                                        <div>
                                                            ${(item.qty * item.price).toFixed(2)}`
                                                        </div>
                                                  </div>
                                                )
                                            })
                                        }


                                    </div>
                                    <p>Delivered Address:{}</p>
                                </div>
                            )
                            }

                        </div>
                        :
                        <p>You haven't placed any orders yet.</p>
                    }
                </div>
                <div className={styles.account_details}>
                    <div>
                        <h1>ACCOUNT DETAILS</h1>
                        <h4>{`${profile.first_name} ${profile.last_name}`}</h4>
                    </div>
                    <Divider />
                    <div className={styles.address_signout}>
                        <div onClick={handleOpen}>View Addresses</div>
                        <div>
                            {`>`}
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.address_signout} onClick={() => handleLogout()}>
                        <div>Sign Out</div>
                        <div>{`>`}</div>
                    </div>
                </div>
            </div>

            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
            >
                <Fade
                    in={open}
                >
                    <div>
                        {
                            addresses?.map(address =>
                                <Paper style={{ margin: 20 }}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{address.first_name} {address.last_name}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {address.phone}
                                                <br />
                                                {address.address}
                                                <br />
                                                {address.apartment}
                                                <br />
                                                {address.company}
                                                <br />
                                                {address.city}
                                                <br />
                                                {address.state}-{address.zipcode}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Paper>
                            )
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
