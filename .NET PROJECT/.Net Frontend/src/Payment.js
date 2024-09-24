import { useState,useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
export default function Payment()
{
    const [payment,setPayment]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        fetch("https://localhost:7020/api/Payment/getby/"+id )
        .then(res=>res.json())
        .then((result) => {setPayment(result)}
        ); 
    },[]);
    return(
        <div>
            <label>Payment Id:</label> {payment.paymentid}<br/>
            <label>Student Id:</label>  {payment.studentId}<br/>
            <label>Transaction Id:</label>   {payment.transactionid}<br/>
            <label>Date:</label>{payment.date}
            <label>Amount:</label>{payment.amount}
            <label>Batch Id:</label>{payment.batchid} 
            <label>Payment Type Id:</label>{payment.paymentTypeId}
        </div>    
    )
}