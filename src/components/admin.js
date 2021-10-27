import React from "react";
import axios from "axios";

const AdminTransfer=()=>{
    const [bankData,setBankData]= React.useState([])
    React.useEffect(()=>{
        BankData()
    },[])

    const BankData=async()=>{
        let results=await axios.get("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers")
        console.log(results.data)
        setBankData(results.data)
    }

    return(
        <div>

        </div>
    )
}

export  default AdminTransfer