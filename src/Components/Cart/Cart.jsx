import { MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { deletecart, updateOrder } from '../../Redux/Cart_and_Orders/actions'
import "../../Styles/Cart/Cart.module.css"
import styles from "../../Styles/Cart/Cart.module.css"
import { Login } from '../Login/Login'

export const Cart = () => {
    const dispatch = useDispatch();
    const history =useHistory()
    const [login,setLogin]=useState(false);
    const { isAuth, isLoading, profile } = useSelector(state => state.authReducer)
    const items = useSelector(state => state.cartorderReducer.cart)
    const total = useSelector(state => state.cartorderReducer.totalAmt)
    const [qty, setQty] = React.useState();

    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `User Cart |Taza Chocolate `
    }, [])

    const handleRemove=(id)=>{
        dispatch(deletecart(id))
    }

    const handleCheckout=()=>{
        if(!isAuth){
            setLogin(true)
        }
        else{
            history.push("/order")
        }
    }
    const handleUpdateCart = (id,value) => {
        let quantity=value;
        if(quantity<0){
            quantity=0
            dispatch(updateOrder(id,quantity))
        }
        else{
            dispatch(updateOrder(id,quantity))
        }
    };

    return (
        <div className={styles.root}>
            {items.length!==0 &&
            <div className={styles.header}>
                <div>
                    <h1>SHOPPING CART</h1>
                </div>
            </div>}
            <div className={styles.profile_wrapper}>
              { items.length!==0 && 
                <>
              <table className={styles.table_data}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items?.map(item =>
                            <tr key={item.id} className={styles.indv_item}>
                                <td><img src={item.img} width="150px" height="100px" alt="" /></td>
                                <td>
                                    {item.name}
                                    <p className={styles.span} onClick={()=>handleRemove(item.id)}>Remove</p>
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    {/* {item.qty} */}
                                    <input type="number" className={styles.qty_number} value={item.qty}  onChange={(e) => handleUpdateCart(item.id,e.target.value) }  />
                                </td>
                                <td style={{}}>${(item.qty * item.price).toFixed(3)}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                <div className={styles.total_amount}>
                    <div>
                        <button className={styles.button}>CONTINUE SHOPPING</button>
                    </div>


                    <div className={styles.float_right} >
                        <div>
                            <div style={{display:'flex',marginBottom:'10px',alignItems:'flex-end'}} >
                                <p style={{marginTop:'9px'}}>
                                 Subtotal
                                </p >
                                  <h1>${Number(total).toLocaleString('en')}</h1>
                            </div>
                        </div>
                        <div>
                            <p>Shipping & taxes calculated at checkout</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'100%',alignItems:'flex-end'}}  >
                            {/* <button className={styles.button}>UPDATE CART</button> */}
                            <button className={styles.button} onClick={handleCheckout}>CHECK OUT</button>
                        </div>
                    </div>
                </div>
                </>
                }
               { items.length===0 && <div style={{padding:'0px 50px'}}>
                <div><h1>Shopping Cart</h1></div>
                <div>Your cart is currently empty.</div>
                <br/>
                <div>Continue browsing  <NavLink to="/" className={styles.span}>Here.</NavLink></div>
                </div>}
            </div>
            {
               login && <Login login={login} setLogin={setLogin} />
             }
        </div>
    )
}
