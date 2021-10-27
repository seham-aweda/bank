import React from "react";
import axios from "axios";

const AdminTransfer=()=>{
    const [bankData,setBankData]= React.useState([])
    const [admin ,setAdmin] = React.useState('')
    const [admin1 ,setAdmin1] = React.useState('ITAY')
    const [adminPassword , setAdminPassword] = React.useState("")
    const [adminPassword1 , setAdminPassword1] = React.useState("0502727833")


    React.useEffect(()=>{
        BankData()
    },[])

    const BankData=async()=>{
        let results=await axios.get("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers/1/bank")
        console.log(results.data)
        setBankData(results.data)
    }

    //פונר=קצייה מפלתרת דאטה ומחזירה כל הפעולות של היוזר . נבדוק אם TRUE זה חיסור (משיכה) אם FALSE זה הפקדה
    // .פלתור לפי ID נבדוק אם כל הנתונים שיצאו לנו לנו הפ שיגים לאותו ID
    // check if isdrawal true: then number is negative,else if isdrawal false : then number positive,then by map :SUM

    //ADMIN:
    //there will be a button and input(amount of money) beside every user so he can transference some money
    //then we will add the money to his cash

    const admineinter = (e)=>{
        if(e.target.name === 'admin'){
            if(e.target.value===admin1) {
                console.log('admin')
                setAdmin(e.target.value)
            }
        }
        if (e.target.name === 'adminPassword'){
            if(e.target.value===adminPassword1) {
                {
                    console.log('adminPass')
                    setAdminPassword(e.target.value)
                }
        }
    }}

    return(
        <div>
            <input className="btn" type={"text"} value={admin} name={"admin"} onChange={admineinter}/>
            <input className={"btn"} type={"text"} value={adminPassword} name={"adminPassword"} onChange={admineinter}/>
            <input type={"button"} />
        </div>
    )
}

export  default AdminTransfer