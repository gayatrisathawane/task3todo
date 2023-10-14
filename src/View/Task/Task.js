import { useState } from "react"
import Card from './../../Component/Card/Card'

const Task = () => {

    const [dataList ,setDataList]= useState([
        {
            name:"gayatri",
            surname:"sathawane",
            address:"pune"

        },
        {
            name:"Nilam",
            surname:"sathawane",
            address:"Warathi"

        }
])

// input fields value

const[name,setName]=useState('');
const[surname,setSurname]=useState('')
const[address,setAddress]=useState('')


//add Data

const  randomId = Math.floor(Math.random()*100)
console.log(randomId)

const addData = () =>{
    const obj = {
        id:randomId,
        name:name,
        surname:surname,
        address:address
    }

    setDataList([...dataList,obj])
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


}


    return (
        <div>

            <h1 className="text-center bg-warning ">To do List</h1>

            <div className="d-flex justify-content-around mt-4">
                <div>
                    <h1>ADD STUDENT DATA</h1>

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
                  <button type="button" onClick={addData}>Add Data</button>
                  <button>Update Data</button>

                  </div>
                

                
                  

                  

                </div>
                <div>
                    <h1>SHOW DATA</h1>

                    {
                        dataList.map((data,i)=>{
                            const {name,surname,address} = data
                            return(
                               <Card name={name} surname={surname} address={address} removeData={removeData}/>
                            )
                        })
                    }

                </div>
            </div>




        </div>

    )
}
export default Task