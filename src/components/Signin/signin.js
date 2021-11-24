import {useState} from 'react'
import { useContext } from 'react/cjs/react.development'
import  signinProvider  from '../../store/signinProvider'
export default function SignIn(props){
    const [,setuser] = useContext(signinProvider.Signin)
    const [username,setusername] = useState('')
    const [pwd,setpwd] = useState('')
    const [signinvisibility,setsigninvisibility] = useState(false)
    // 'http://127.0.0.1:8000/user/login_user'
    async function handleSubmit(e){
        e.preventDefault()
        const response =await  fetch('https://imdb-fullstack-app.herokuapp.com/user/login_user',{
            method:"POST",
            body:JSON.stringify({
                "username":username,
                "password":pwd
            }),
            headers:{
                'Content-Type':'application/json'
            },
        })
        const data=await response.json()
        setuser(data.data)
        

    }

    return(
        <div className={signinvisibility? 'signIn__div':props.className}>
            <form className="signIn__form" onSubmit={handleSubmit}>
                <h2>SIGNIN</h2>
            <input placeholder="NAME" value={username} onChange={(e)=>setusername(e.target.value)}/>
            <input placeholder="PASSWORD" type="password" value={pwd} onChange={(e)=>setpwd(e.target.value)}/>
            <button type="submit" onClick={()=>setsigninvisibility(true)}>SUBMIT</button> 
            </form>
        </div>
    )
}