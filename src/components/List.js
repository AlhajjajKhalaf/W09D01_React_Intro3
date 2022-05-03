import Listitem from "./Listitem"

const List =(prop)=>{
    const {collection}=prop
console.log("ju")
// console.log(prop.collection[0])
console.log({collection})

// const arry=collection.map((element,index)=>{
//     return <p>{element.todo}</p>
// })


return(<ul>{collection.map((element,index)=>{
    return<Listitem todo={element.todo}  id ={element.id}/>
})}</ul>)

}


export default List;