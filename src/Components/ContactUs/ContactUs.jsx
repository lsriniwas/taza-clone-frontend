import React, { useState } from 'react'
import styles from "../../Styles/Register/Register.module.css"
import "../../Styles/Register/Register.module.css"
import axios from 'axios'

export const ContactUs = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [success,setSuccess]=useState(false)
    const [failure,setFailure]=useState(false)
 const handleFormData=(e)=>{
            e.preventDefault();
        const payload={
            name,
            email,
            message
        }
        
  var config = {
    method: 'post',
    url: 'http://localhost:5000/mail',
    headers: { 
        "Content-Type": "application/json"
    },
    data : payload
  };
  
    axios(config)
    .then(res=>setSuccess(true))
    .catch(err=>setFailure(true))
    }
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>
                    {
                        !success && !failure ?  <h1>Contact Us</h1>:<h1>Thank you</h1>
                    }
                    </div>
            </div>
                <div className={styles.formData}>
            {
                success &&  
                <p>Thank you for contacting us! Stay tuned for Taza news updates and promotions</p>
            }
            {
                failure && 
                <p>Please try after sometime</p>
            }
            {
                    !success && !failure && 
                <form onSubmit={handleFormData}>
                        <div className={styles.label}>
                            <label htmlFor="">NAME</label>
                            <div className={styles.input}>
                                <input required type="text" name="name" placeholder="Name" onChange={e=>setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label htmlFor="">Email</label>
                            <div className={styles.input}>
                                <input required type="text" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className={styles.label}>
                            <label htmlFor="">Message</label>
                            <div className={styles.input}>
                                <textarea  rows = "5" required  name="message" type="text" placeholder="Message" onChange={e=>setMessage(e.target.value)}/>
                            </div>
                        </div>
                    <button className={styles.formButton}>SEND</button>
                </form>
            }
            </div>
        </div>
    )
}


