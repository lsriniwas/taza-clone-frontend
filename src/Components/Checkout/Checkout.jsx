import React, { useState } from 'react'
import styles from "../../Styles/Checkout/Checkout.module.css"
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, MenuItem, Paper, Snackbar, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { CustomHook } from '../CustomHook/CustomHook';
import { addOrder } from '../../Redux/Cart_and_Orders/actions';
import axios from 'axios';

const init = {
    first_name: "",
    last_name: "",
    company: "",
    apartment: "",
    address: "",
    city:"",
    country: "",
    state: "",
    zipcode: "",
    phone: ""
}
//asd
export const Checkout = () => {
    const [formDisplay,setFormDisplay]=useState(true)
    const [value, setValue] = CustomHook(init);
    const dispatch = useDispatch();
    const history=useHistory()
    let address = ""
    const [open, setOpen] = useState(false);
    const { isAuth,  profile } = useSelector(state => state.authReducer)
    const cartItems = useSelector(state => state.cartorderReducer.cart)
    const totalAmt = useSelector(state => state.cartorderReducer.totalAmt)
    const message = useSelector(state => state.cartorderReducer.message)
    const [presentAddress, setAdd] = useState("")
    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Checkout |Taza Chocolate `
    },[])

    const handleShipping=()=>{
        setFormDisplay(false)
    }
    const handlePlaceOrder=async()=>{
        const payload={
            total_amount:totalAmt
        }
          const orderItems={
            customer_id:profile._id,
            items:[...cartItems],
            date:new Date().toLocaleString(),
            address:presentAddress,
            total_amount:totalAmt
        }   
         dispatch(addOrder(payload,orderItems))
        }
        const handleAddress = (value) => {
        const temp=value.trim(" ").split("\n")
        const payload=value.split("\n")
        let init={
            first_name:""||payload[0],
            last_name:""||payload[1],
            company:""||payload[2],
            apartment:""||payload[3],
            address:""||payload[4],
            city:""||payload[5],
            country:""||payload[6],
            state:""||payload[7],
            zipcode:""||payload[8],
            phone:""||payload[9]
        }
        setValue(init)
        setAdd(value)
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 2000)
    }
    return (
        <div className={styles.root}>
            {
                cartItems.length === 0 && <Redirect to="/" />
            }
            {
                !isAuth && <Redirect to="/" />
            }
            <Snackbar open={open} anchorOrigin={{ 'vertical': 'top', 'horizontal': 'center' }} autoHideDuration={2000}>
                <Alert severity="info">
                    Address Selected
                </Alert>
            </Snackbar>
            <div className={styles.header} >
                <div className={styles.wrapper}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/Taza_Website_Desktop_400px_Wide.png" width="110" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.form_data}>
                <div className={styles.form}>
                    <div className={styles.form_header}>
                        <div className={styles.express_checkout}>
                            <p className={styles.freeshipping}>Express checkout</p>
                            <div className={styles.express_content_wrapper}>
                                <div>
                                    <button className={styles.shop_pay}></button>
                                </div>
                                <div>
                                    <button className={styles.paypal}></button>
                                </div>
                                <div>
                                    <button className={styles.amazon_pay}></button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                       {  formDisplay &&
                       <>
                        <h4>Contact Information</h4>
                        <div className={styles.contact_info}>
                            <div>
                                <img src="http://via.placeholder.com/60" alt="" />
                            </div>
                            <div>
                                <p>{profile.first_name}{profile.last_name}</p>
                                <p>{profile.email}</p>
                            </div>
                        </div>
                       <div >
                            <br />
                            <select className={styles.select} name="address" value={presentAddress} onChange={(e) => handleAddress(e.target.value)} style={{ width: '100%' }}>
                                <option value="" disabled>--Select Address--</option>
                                {
                                    profile.addresses?.map((address, i) =>
                                        <option
                                            value={`${address.first_name}\n${address.last_name}\n${address.company}\n${address.apartment}\n${address.address}\n${address.city}\n${address.country}\n${address.state}\n${address.zipcode}\n${address.phone}`}>
                                            {address.first_name},{address.last_name},
                                                    {address.company},
                                                    {address.apartment},
                                                    {address.address},
                                                    {address.city},
                                                    {address.country},{address.state},{address.zipcode},
                                                    {address.phone}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        </>
                        }
                    </div>
                    <h4>Shipping Address</h4>
                    <br />
                    {!formDisplay && 
                         <div className={styles.formDisplay}>
                               <div className={styles.formDisplay_contact}>
                                    <div className={styles.formDisplay_label}>Contact</div>
                                    <div>{profile.email}</div>
                               </div>
                                <div style={{borderBottom:'1px solid rgba(224, 224, 224, 1)'}}></div>
                               <div className={styles.formDisplay_contact}>
                                    <div className={styles.formDisplay_label}>Ship to</div>
                                    <div>
                                         <p>
                                        {presentAddress}
                                        </p> 
                                        </div>
                               </div>
                         </div>
                    }
                    <div>
                        { formDisplay && <form action="" className={styles.form_inputs}  >
                            <div className={styles.first_inp_div}>
                                <div>
                                    <TextField
                                    value={value.first_name}
                                        onChange={(e) => setValue({ [e.target.name]: e.target.value })}

                                        variant="outlined"
                                        label="First Name"
                                        type="text"
                                        name="first_name"
                                        className={styles.input_name}
                                    />
                                </div>
                                <div>
                                    <TextField
                                    value={value.last_name}
                                        onChange={(e) => setValue({ [e.target.name]: e.target.value })}

                                        variant="outlined"
                                        label="Last Name"
                                        type="text"
                                        name="last_name"
                                        className={styles.input_name}
                                    />
                                </div>
                            </div>
                            <div>
                                <TextField
                                value={value.company}
                                    onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                                    size='small'
                                    variant="outlined"
                                    label="Company"
                                    type="text"
                                    name="company"
                                    fullWidth
                                    style={{ margin: '10px 0px' }}
                                />
                            </div>
                            <div>
                                <TextField
                                value={value.apartment}
                                    onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                                    size='small'
                                    variant="outlined"
                                    label="Apartment, suite (Optional)"
                                    type="text"
                                    name="apartment"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField
                                value={value.address}
                                    onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                                    size='small'
                                    variant="outlined"
                                    label="Address"
                                    type="text"
                                    name="address"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>

                            <div>
                                <TextField
                                value={value.city}
                                    onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                                    size='small'
                                    variant="outlined"
                                    label="City"
                                    type="text"
                                    name="city"
                                    style={{ margin: '10px 0px' }}
                                    fullWidth
                                />
                            </div>
                            <div className={styles.select_option}>
                                <div className={styles.padding_left}>
                                    <TextField
                                        onChange={(e) => setValue({ [e.target.name]: e.target.value })}

                                        id="outlined-select-currency"
                                        select
                                        label="Country/Region"
                                        name="country"
                                        value={value.country}
                                        helperText="Please select your Country"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        {["India"].map((option) => (
                                            <MenuItem key={option.value} style={{ color: 'primary' }} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField
                                        onChange={(e) => setValue({ [e.target.name]: e.target.value })}

                                        select
                                        label="States"
                                        value={value.state}
                                        name="state"
                                        helperText="Please select your State"
                                        variant="outlined"
                                        color="primary"
                                    >
                                        {["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh", "Telangana"].map((option) => (
                                            <MenuItem key={option.value} style={{ color: 'primary' }} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div><div>
                                    <TextField
                                        onChange={(e) => setValue({ [e.target.name]: e.target.value })}

                                        value={value.zipcode}
                                        name="zipcode"
                                        variant="outlined"
                                        label="ZIP code"
                                        type="text"
                                    />
                                </div></div>
                            </div>
                            <div>
                                <div>
                                    <TextField
                                        onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                                        size='small'
                                        name="phone"
                                        value={value.phone}
                                        variant="outlined"
                                        label="Phone"
                                        type="text"
                                        style={{ margin: '10px 0px' }}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </form>}
                        <div className={styles.form_footer}>
                            <div>
                                <NavLink to="/cart">{`< Return to cart`}</NavLink>
                            </div>
                            <div>
                              { 
                                 formDisplay ? 
                                    <div onClick={()=>handleShipping()}>
                                        Continue Shipping
                                    </div>
                                    :
                                    <div onClick={()=>handlePlaceOrder()}>
                                        Place Order
                                    </div>
                              }
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Divider />
                            <ul>
                                <li>Refund Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={styles.payment}>
                    <div >
                        <Table>
                            <TableBody>
                                {
                                    cartItems?.map(item => {
                                        return (
                                            <TableRow>
                                                <TableCell >
                                                    <Badge color="primary" badgeContent={item.qty}>
                                                        <div className={styles.item_checkout} >
                                                            <div className={styles.item_checkout_img}>
                                                                <img src={item.img} alt="" />
                                                            </div>
                                                        </div>
                                                    </Badge>
                                                    <span style={{ fontSize: '10px', marginLeft: '5px' }}>
                                                        {item.name}
                                                    </span>
                                                </TableCell>
                                                <TableCell align="right">{`$ 
                                                ${(item.qty * item.price).toFixed(2)}`}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                                <TableRow >
                                    <TableCell className={styles.gift_coupon}>
                                        <input type="text" name="" id="" placeholder="Gift card or discount code" />
                                    </TableCell>
                                    <TableCell align="right"><button className={styles.gift_coupon_button}>APPLY</button></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>SubTotal</TableCell>
                                    <TableCell align="right">{`$ 
                                    ${totalAmt.toFixed(2)}`}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>Shipping</TableCell>
                                    <TableCell align="right">Free</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell>Total</TableCell>
                                    <TableCell align="right"><h2>{`$ 
                                    ${totalAmt.toFixed(2)}`}</h2></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}


