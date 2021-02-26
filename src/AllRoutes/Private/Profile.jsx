import { Divider, Fade, makeStyles, Modal, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../Redux/isAuth/actions'
import "../../Styles/Profile/Profile.module.css"
import styles from "../../Styles/Profile/Profile.module.css"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    React.useEffect(() => {
        document.title = `User Profile |Taza Chocolate `
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
                <div>
                    <h1>ORDERS HISTORY</h1>
                    <p>You haven't placed any orders yet.</p>
                </div>
                <div>
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
                                <Paper style={{margin:20}}>
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
                                                <br/>
                                                {address.apartment}
                                                <br/>
                                                {address.company}
                                                <br/>
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
