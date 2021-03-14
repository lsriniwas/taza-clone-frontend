import React, { useState } from 'react'
import {DebounceInput} from "react-debounce-input"
import { getSearch } from '../../Redux/Search/actions'
import {useDispatch, useSelector} from "react-redux"
export const Search = () => {
    const [value,setValue]=useState("")
    const dispatch = useDispatch()
    const {searchResult,isLoading,error,message}=useSelector(state=>state.search)
    const handleSearch=(e)=>{
        dispatch(getSearch(e))
        setValue(e)
    }
    return (
        <div>
            <DebounceInput 
            value={value}
            minLength={2}
            debounceTimeout={1000}
            onChange={(e)=>handleSearch(e.target.value)}
            />
            {
                isLoading?<div>Loading...</div>:error?<div>{`error ${message}`}</div>:searchResult.length!==0?

                <div>
                    {
                        searchResult?.map(item=>{
                            return(
                                <div key={item._id}>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
                :
                <div>
                    No Products found
                </div>
            }
        </div>
    )
}
