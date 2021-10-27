import React from "react";
import axios from "axios";
import ExistsUser from "./existsusers";

export default function AboutUs(props) {
    const [isPass, setIsPass] = React.useState(false)
    const [existsUser, setExistsUser] = React.useState('')
    const [existsPass, setExistsPass] = React.useState('')
    const [data, setData] = React.useState(null)
    const [tempUser, setTempUser] = React.useState('')
    const [tempMess, setTempMess] = React.useState('')
    const [showMess, setShowMess] = React.useState(false)

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let results = await axios.get("https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers")
        setData(results.data)
    }

    let type = isPass ? "text" : "password"

    const EyeFunction = () => {
        setIsPass(!isPass)
    }

    const TakeData = (e) => {
        if (e.target.name === 'UserName') {
            setExistsUser(e.target.value)
        }
        else if (e.target.name === 'Password') {
            setExistsPass(e.target.value)
        }
    }


    const LogIn = (e) => {
        let FindUser = data.find((user) => {
            if (existsUser === user.username) {
                if (existsPass === user.password) {
                    setTempMess(false)
                    return user
                } else {
                    setShowMess(!showMess)
                    setTempMess("ERROR, Check Your UserName Or PassWord")
                }
            }
            else {
                setShowMess(!showMess)
                setTempMess("ERROR, Check Your UserName Or PassWord")
            }
        })
        setTempUser(FindUser)
        setExistsUser("")
        setExistsPass("")

    }
    return (
        <div className="PowerGirl">
            <h1>SFI BANK <br/>💵💰💶</h1>
            <div className='firstDive'>
            <input className={'btn'} placeholder={'UserName'} type={"text"} value={existsUser} name={'UserName'} required onChange={TakeData} />
            <input className={'btn'} placeholder={'Password'} type={type} value={existsPass} name={'Password'} required onChange={TakeData} />
            {isPass ? <span onClick={EyeFunction}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg> </span> : <span onClick={EyeFunction}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                className="bi bi-eye-slash" viewBox="0 0 16 16">
                <path
                    d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                <path
                    d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                <path
                    d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
            </svg> </span>
            }<br />
            </div>
            <div>
            <input className={"btn"} type="submit" value="LogIn" onClick={LogIn} />
            {/*<div>{? tempMess :}</div>*/}
            <div> {showMess ? tempMess : tempUser ? <ExistsUser data={data} user={tempUser} /> : tempMess}</div>
            </div>
        </div>
    )
}