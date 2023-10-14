import { useEffect, useState } from "react"
import Card from './../../Component/Card/Card'

const Task = () => {

    const [dataList ,setDataList]= useState([
        {
            id:1,
            name:"gayatri",
            surname:"sathawane",
            address:"pune"

        },
        {    id:2,
            name:"Nilam",
            surname:"sathawane",
            address:"Warathi"

        }
])

// input fields value
const [id ,setId]=useState(0)
console.log(id)
const[edit,setEdit]=useState(false);
const[name,setName]=useState('');
const[surname,setSurname]=useState('')
const[address,setAddress]=useState('')


//add Data



useEffect(()=>{
    
    const list = JSON.parse(localStorage.getItem('todolist'))
    // if(list && list >0 ){
    //   setDataList(list)
    // }

    setDataList(list)

},[])

const saveToLocalStorage = (task)=>{
   localStorage.setItem('todolist',JSON.stringify(task))
}
const  randomId = Math.floor(Math.random()*1000)
const addData = () =>{
   
    const obj = {
        id:randomId,
        name:name,
        surname:surname,
        address:address
    }

    const newarray = [...dataList,obj]
setDataList(newarray)
    saveToLocalStorage(newarray)

    setName('')
    setSurname('')
    setAddress('')
}

//remove data 

const removeData = (id) =>{

    let index;

   dataList.forEach((task,i)=>{
    if(task.id==id)
    {
        index=i
    }
   })

   const temarray = dataList
   temarray.splice(index ,1)
    setDataList([...temarray])
 saveToLocalStorage(temarray)

}

//edit data 

const editData = (id) =>{
    console.log(id)

    setEdit(true)
    setId(id)
  
    let currentData;

    dataList.forEach((task,i)=>{
       if(task.id==id)
       {
        currentData=task;
       }
    })
    
      setName(currentData.name)
      setSurname(currentData.surname)
      setAddress(currentData.address)

}





    return (
        <div>

            <h1 className="text-center bg-warning ">To do List</h1>

            <div className="d-flex justify-content-around mt-4">
                <div>
                    <h1>{edit ?"UPDATE STUDENT DATA":"ADD STUDENT DATA"}</h1>

                    <div class="input-group mb-3 mt-5">
              <span className="input-group-text" id="inputGroup-sizing-default">Name</span>

                 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={name} onChange={(e)=>{
                    setName(e.target.value)

                 }}/>
                   </div>

                   <div class="input-group mb-3">
              <span className="input-group-text mt-3" id="inputGroup-sizing-default">Surname</span>

                 <input type="text" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={surname} onChange={(e)=>{
                     setSurname(e.target.value)
                 }}/>
                 </div>
                  <div class="input-group mb-3">
              <span className="input-group-text mt-3" id="inputGroup-sizing-default">Address</span>

                 <input type="text" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={address} onChange={(e)=>{
                              setAddress(e.target.value)
                 }}/>
                 </div>

                  <div className=" d-flex justify-content-around">
                    {edit ? <button>Update Data</button> : 
                    <button type="button" onClick={addData}>Add Data</button> }
                 
                 

                  </div>
                

                
                  

                  

                </div>
                <div>
                    <h1>SHOW DATA</h1>

                   

                    {
                        dataList.map((data,i)=>{
                            const {name,surname,address,id} = data
                            return(
                               <Card name={name} 
                               surname={surname} 
                               address={address} 
                               removeData={removeData} 
                               key={i}  
                               editData={editData}
                               id={id}/>
                            )
                        })
                    }

                </div>
            </div>




        </div>

    )
}
export default Task