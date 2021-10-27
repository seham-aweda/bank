import React from "react";
import axios from "axios";

const AdminTransfer=()=>{
    const [bankData,setBankData]= React.useState([])
    const [idArray ,setIdArray] = React.useState([])
    const [admin ,setAdmin] = React.useState('')
    const [adminPassword , setAdminPassword] = React.useState("")
    const [theRealAdmin , settheRealAdmin] = React.useState(false)
    const[count, setCount]=React.useState(0)
    const[promres, setPromres]= React.useState([])

    React.useEffect(()=>{
        BankData()
    },[])
 

    const BankData=async()=>{
        let results=await axios.get("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers")
        let ids = (results.data).map(u=>{
            return u.id
        })
        setIdArray(ids)
    }

    //פונר=קצייה מפלתרת דאטה ומחזירה כל הפעולות של היוזר . נבדוק אם TRUE זה חיסור (משיכה) אם FALSE זה הפקדה
    // .פלתור לפי ID נבדוק אם כל הנתונים שיצאו לנו לנו הפ שיגים לאותו ID
    // check if isdrawal true: then number is negative,else if isdrawal false : then number positive,then by map :SUM

    //ADMIN:
    //there will be a button and input(amount of money) beside every user so he can transference some money
    //then we will add the money to his cash
    React.useEffect(()=>{
        dataById()
    },[idArray])

const dataById = ()=>{
    let result = idArray.map(async(val)=>{
        return await (await axios.get(`https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers/${val}/bank`)).data
  
    })
    
    Promise.all(result).then(res =>{
        let copy = [];
        return res.map((elemnt)=>{
            let num= 0;
            elemnt.map((val)=>{
                if(val.isWithdrawal== false){
                   num+= val.cash
                }else{
                  num-= val.cash
                }
                setCount(num)
                copy.id = val.BankUserId
                copy.amount = num
                promres.push(copy)
                console.log(copy)                
            })
            console.log(copy)
        })
    })
    
}
    const admineinter = (e)=>{
        if(e.target.name === 'admin'){
                console.log('admin')
                setAdmin(e.target.value)
        }
        if (e.target.name === 'adminPassword'){
                    console.log('adminPass')
                    setAdminPassword(e.target.value)      
        }
    }

const adminClick = ()=>{
    if(admin === 'ITAY' && adminPassword === '0502727833'){
        settheRealAdmin(true)
    }
    setAdmin('')
    setAdminPassword('')
}

    return(
        <div className='admin'>
            {
  console.log(promres)
              } 
            <div style={{display:theRealAdmin? 'none' : 'block'}} >
            <input className={"btn"} type={"text"} value={admin} name={"admin"} onChange={admineinter} placeholder={'Admin Name'}/>
            <input className={"btn"} type={"text"} value={adminPassword} name={"adminPassword"} onChange={admineinter} placeholder={'Admin Password'}/>
            <input type={"button"} value={'Hello Itay'} onClick={adminClick} className={'btn'}/>
            </div>
            <div>{theRealAdmin ? <div>{
                promres.map(val=>{
                  return val.BankUserId
                })
               
                }
                 <input type={'button'} value={'Transferm Money'}  />
                 <input type={'text'} />

                </div> :<span style={{display:!theRealAdmin? 'block' : 'none'}}> YOU ARE NOT ITAY</span>}</div>
        </div>
    )
}

export  default AdminTransfer