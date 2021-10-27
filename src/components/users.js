import axios from "axios";

export default function User({deleteFilterData,user,data}){
const DeleteUser= async (id)=>{
    if(user.isActiv === false){
    const deleteUser =  await axios.delete('https://6178f8f7aa7f34001740465e.mockapi.io/BankUsers/' + id)
    if (deleteUser.status === 200){
        const deleteData= [...data]
        let result=deleteData.filter((val)=>{
            return  val.id !==id
        })

        deleteFilterData(result)

    }}else{
        alert("This User Is Active")
    }

    }
    return(
        <div className="PowerGirl" key={user.id}>
            <br/>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Country : {user.country}</div>
            <div> UserName: {user.username}</div>
            <div>PassWord: {user.password}</div>
            <div>IsActive: {user.isActiv?"✔":"✖"}</div>
            <input className={"btn"} type={"button"} value={"Delete An UnActive User"} onClick={()=>{DeleteUser(user.id)}}/>
            <br/>

        </div>
    )
}