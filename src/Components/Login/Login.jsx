import React, { useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { Modal } from '@material-ui/core';
import styles from "../../Styles/Login/Login.module.css"
import  "../../Styles/Login/Login.module.css"
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/isAuth/actions';
import {useSelector} from "react-redux"
import {Alert} from "@material-ui/lab"
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:100000,
        backgroundColor:'rgba(47, 188, 206, 0.84)',
        opacity: 1,
        outline:'none',
        border:'none'
    },
    paper: {
        maxWidth:'450px',
        backgroundColor: 'white',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
        padding: theme.spacing(2, 4, 3),
        outline:'none',
        border:'none'
    },
}));


export const Login = ({login,setLogin}) => {
    const classes=useStyles();
    const [open, setOpen] = useState(login);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch()
    const {isAuth,error,error_message} =useSelector(state=>state.authReducer)
    const handleClose = () => {
        setOpen(false);
        setLogin(false)
    };
    React.useEffect(() => {
        document.title = `Login |Taza Chocolate `
      }, [])

    const handleLoginData=(e)=>{
        e.preventDefault();
        const payload={
            email,
            password
        }
        dispatch(userLogin(payload))
        
       
    }
 
    React.useEffect(()=>{
        if(isAuth){
            handleClose()
        }
    },[isAuth])

    return (
        <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={open}>
               
            <div style={{outline:'none',border:'none',position:'relative'}} >
                <div className={styles.close_cross} onClick={handleClose}>
                   +
                </div>
            <div className={classes.paper}>
                <div className={styles.title}>
                <h2>SIGN IN</h2>
                </div>
                <div>
                {error && 
                   <Alert  variant="filled" severity="error">
                     {error_message}
                    </Alert>
                }
                {/* {
                    isAuth && <Redirect to="/account"/>
                } */}
                    <form onSubmit={handleLoginData}>
                        <div>
                            <div className={styles.label}>
                            <label htmlFor="">EMAIL ADDRESS</label>
                            </div>
                            <div className={styles.input}>
                             <input required  type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                            <label htmlFor="">PASSWORD</label>
                            </div>
                            <div className={styles.input}>
                             <input required  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                            </div>
                        </div>
                        <button className={styles.formButton} >SIGN IN</button>
                    </form>
                </div>
                <p className={styles.forgot_password}>Forgot your password?</p>
                <div className={styles.or}>
                    <h2>or</h2>
                </div>
                <div>
                    <NavLink to="/account/register" >
                    <button className={styles.formButton} onClick={handleClose} >CREATE AN ACCOUNT</button>
                    </NavLink>
                    <div>
                        <p className={styles.footer_p}>
                        By creating an account with our store, you will be able to move through the checkout process faster, save products to your wishlist, view your orders in your account and more.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                 Sign In
                </p>
            </div>
            </div>
        </Fade>
    </Modal>
    )
}
