
import React from 'react'
import axios from "axios"
import {GlobalState} from "../../GlobalState"
import {Link,useNavigate } from 'react-router-dom'
import {useState,useContext} from 'react'


const TrainData = () => {

   

    const onSubmit = async (e) => {
        e.preventDefault();

     
        try {
            
            let res = await  axios.get("http://104.45.148.31:5000/train-data")

            console.log(res);
            
           
                     
        } catch (err) {
            console.log(err);
            alert("Problem in authentication");
        }
    }
   
   return (
        <div><button onClick={onSubmit}>Train Data
            </button></div>
    )
}

export default TrainData
