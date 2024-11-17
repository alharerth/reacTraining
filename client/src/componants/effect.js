import React , {useEffect, useState} from "react";

export default function EffectPage(){
    const [data,setData]=useState({})
    const [users, setUsers] = useState([]);
    const [loading,setLoading]=useState(true)

    const getFact =()=>{
        fetch('https://catfact.ninja/fact')
        .then((res)=>
        res.json()
    ).then((data)=>{
        console.log(data)
        setData(data)
        setUsers([...users, data]);
        setLoading(false)
    })
   
    console.log(users)
    }

    useEffect(()=>{
        getFact()
    },[])



    return(
        <>
        <button onClick={getFact}>add a fact</button>
        <h1>this is an effect</h1>
        {loading ?(<p>loading...</p>):(<div><ul>
            {users.map((item,index)=>(
                <li key={index}>{item.fact}</li>
            ))}</ul></div>)}
        </>
    )
}