import React from "react";
import axios from "axios";
export default function Users(props){
    const[data,setData]=React.useState(null)
     React.useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        let results=await axios.get("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers")
        setData(results.data)
    }
    return(
        <div className="PowerGirle">
            <h1>Power Girl Bank</h1>

        </div>
    )
}