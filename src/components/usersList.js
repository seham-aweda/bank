import React from "react";
import axios from "axios";
import User from "./users";
export default function UsersList(props){
    const[data,setData]=React.useState(null)
    const[Name,setName]=React.useState("")
    const[Age,setAge]=React.useState("")
    const[Country,setCountry]=React.useState("")
    const[UserName,setUserName]=React.useState("")
    const[Password,setPassword]=React.useState("")
    const [tempUser ,setTempUser] = React.useState('')



    React.useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        let results=await axios.get("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers")
        setData(results.data)
    }

    const Information = (e) => {
        if(e.target.name === 'Name'){
            setName(e.target.value)
        }
        else if (e.target.name === 'Country'){
            setCountry(e.target.value)
        }
        else if(e.target.name === 'Age' && Number(e.target.value )){
            setAge(e.target.value)
        }
        else if(e.target.name === 'Password'){
            setPassword(e.target.value)
        }
        else if(e.target.name === 'UserName'){
            setUserName(e.target.value)
        }
    }

    const AddDataUser =async ()=>{
        let NewUser={
            name:Name,
            age:Age,
            country:Country,
            username:UserName,
            password:Password,

        }
        let res=await axios.post("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers" ,NewUser)
        console.log(res)
        let copyData=[...data]
        copyData.push(res.data)
        setData(copyData)
        setName('')
        setUserName('')
        setAge('')
        setPassword('')
        setCountry('')
    }


const change=(e)=>{
    //     console.log(e.target.value)
    // console.log(data)
        let chosen=data.find((user)=>{
            // console.log(user)
            if(e.target.value===user.username){
             return user
            }
            })
   return setTempUser(chosen)
    }


    return(
        <div >
            <div>
            <input className={'btn'}  placeholder={'Name'} type={"text"} value={Name}   name={'Name'} onChange={Information}/>
            <input  className={'btn'} placeholder={'Age'} type={"text"} value={Age} name={'Age'} onChange={Information}/>
            <input className={'btn'} placeholder={'Country'} type={"text"} value={Country} name={'Country'}  onChange={Information}/>
            <input className={'btn'} placeholder={'UserName'} type={"text"} value={UserName}  name={'UserName'} onChange={Information}/>
            <input className={'btn'} placeholder={'Password'} type={"text"} value={Password}   name={'Password'} onChange={Information}/>
            <input className={'btn'} type={'button'} value={'add'} onClick={AddDataUser}/>
            </div>
             <select onChange={change}>
                 <option>any</option>
                { data?  data.map(u=>{
                  return<option key={u.id} >{u.username}</option>
                }):"loading"
                }
            </select>
            {tempUser ? <User data={data} user={tempUser} deleteFilterData={(val)=>{setData(val)
            setTempUser("")}}/> : ''}
        </div>
    )
}