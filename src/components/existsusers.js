
export default function ExistsUser({user,data}){

    return(
        <div className="PowerGirl" key={user.id}>
            <br/>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Country : {user.country}</div>
            <div> UserName: {user.username}</div>
            <div>PassWord: {user.password}</div>
            <br/>

        </div>
    )
}