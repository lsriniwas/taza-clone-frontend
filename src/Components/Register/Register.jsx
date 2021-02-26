import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Alert} from "@material-ui/lab"
import styles from "../../Styles/Register/Register.module.css"
import "../../Styles/Register/Register.module.css"
import { CustomHook } from '../CustomHook/CustomHook'
import { v4 as uuidv4 } from 'uuid';
import { userSignUp } from '../../Redux/isAuth/actions'
import { Redirect } from 'react-router-dom'
const init={
     id:uuidv4(),
     first_name:"",
     last_name:"",
     email:"",
     password:"",
     order_history:[],
     addresses:[]
}
export const Register=()=> {
    const [value,setValue]=CustomHook(init);
    const dispatch = useDispatch();
    const {isAuth,error,error_message} =useSelector(state=>state.authReducer)
    const handleFormData=(e)=>{
        e.preventDefault();
        dispatch(userSignUp(value))
    }
    React.useEffect(() => {
        window.scrollTo(0, 0)
        document.title="Register | Taza Chocolate"
      }, [])
    return (
            <div>
                {
                    isAuth && <Redirect to="/account"/>
                }
                <div className={styles.header}>
                    <div className={styles.title}>
                    <h1>CREATE ACCOUNT</h1>
                    </div>
                </div>   
                <div className={styles.formData}>
                {error && 
                   <Alert style={{display:'fixed',zIndex:10000}} variant="filled" severity="error">
                      {error_message}
                   </Alert>
                }
                    <form onSubmit={handleFormData}>
                        <div>
                        <div className={styles.label}>
                            <label htmlFor="">FIRST NAME</label>
                            </div>
                            <div className={styles.input}>
                             <input required type="text" placeholder="First Name" name="first_name" onChange={(e)=>setValue({[e.target.name]:e.target.value})} value={value.first_name}/>
                            </div>
                            <div className={styles.label}>
                            <label htmlFor=""> LAST NAME</label>
                            </div>
                            <div className={styles.input}>
                             <input required type="text" placeholder="Last Name" name="last_name" onChange={(e)=>setValue({[e.target.name]:e.target.value})} value={value.last_name}/>
                            </div>
                            <div className={styles.label}>
                            <label htmlFor="">EMAIL ADDRESS</label>
                            </div>
                            <div className={styles.input}>
                             <input required type="text" placeholder="Email" name="email" onChange={(e)=>setValue({[e.target.name]:e.target.value})} value={value.email}/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                            <label htmlFor="">PASSWORD</label>
                            </div>
                            <div className={styles.input}>
                             <input required type="password" placeholder="Password" name="password" onChange={(e)=>setValue({[e.target.name]:e.target.value})}value={value.password}/>
                            </div>
                        </div>
                        <button className={styles.formButton}>CREATE</button>
                    </form>
                </div>   
            </div>
        )
}
