const Listitem =({todo,id})=>{
    // const {todo,id}=prop
    // console.log({prop})
    console.log({todo})
    const logs=()=>{
        console.log({id})
    }

 return <li onClick={logs} >{todo}</li>


}


export default Listitem;